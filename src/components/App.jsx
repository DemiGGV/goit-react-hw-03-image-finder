import { Component } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Section } from 'components/MainContainerCSS';
import { Button } from './Button/Button';
import { fetchGetImgs } from '../Utils/FetchEngine';
import { mappingArray } from '../Utils/imgArrayFormatting';
import { Modal } from './Modal/Modal';

// Notification options
const toastOpts = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export class App extends Component {
  abortController;

  state = {
    querry: '',
    page: 1,
    imgArr: [],
    errorMessage: null,
    visibleBtn: false,
    status: 'idle',
    isOpenModal: false,
    modalImage: {},
  };

  async componentDidUpdate(_, pState) {
    const { querry, page, imgArr } = this.state;
    if (querry !== pState.querry || page !== pState.page) {
      if (this.abortController) {
        this.abortController.abort();
      }
      this.abortController = new AbortController();
      this.handleChangeState('loading');
      this.setState({ errorMessage: null });
      try {
        const resp = await fetchGetImgs(querry, page, this.abortController);
        if (!resp.hits.length) {
          this.handleChangeState('idle');
          toast.warn('There nothing inside!', toastOpts);
          this.setState({ visibleBtn: false });
          return;
        }
        const fetchArr = mappingArray(resp.hits);
        if (Number(resp.totalHits) > fetchArr.length + imgArr.length) {
          this.setState({ visibleBtn: true });
        } else {
          this.setState({ visibleBtn: false });
          toast.warn('No more pictures!', toastOpts);
        }
        this.setState(
          prevState => ({
            imgArr: [...prevState.imgArr, ...fetchArr],
          }),
          () => {
            if (page !== 1)
              window.scrollBy({
                top: 280 * 3,
                behavior: 'smooth',
              });
          }
        );
        this.handleChangeState('idle');
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          this.handleChangeState('error');
          this.setState({
            errorMessage: 'Bad request! Try reloading the page.',
          });
        }
      }
    }
  }

  //state machine engine
  handleChangeState = status => {
    this.setState({ status });
  };

  handleFormQuerry = querry => {
    if (querry === '') {
      toast.error('Input your querry!', toastOpts);
      return;
    }
    if (querry === this.state.querry) return;
    this.setState({
      querry,
      page: 1,
      imgArr: [],
    });
  };

  handleModalToggle = modalImage => {
    this.setState({ modalImage });
    this.setState(pState => ({
      isOpenModal: !pState.isOpenModal,
    }));
  };

  newFetchImages = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    const {
      status,
      errorMessage,
      imgArr,
      visibleBtn,
      modalImage,
      isOpenModal,
    } = this.state;

    return (
      <Section>
        <ScrollToTop
          smooth
          top={100}
          component={<p style={{ color: 'blue' }}>UP</p>}
        />
        <Searchbar onQuerry={this.handleFormQuerry} />
        <ImageGallery imgArr={imgArr} modalToggle={this.handleModalToggle} />
        {status === 'loading' && <Loader />}
        {status === 'error' && toast.error(errorMessage, toastOpts)}
        {visibleBtn && <Button onChange={this.newFetchImages} />}
        <Modal
          image={modalImage}
          isOpenState={isOpenModal}
          onChange={this.handleModalToggle}
        />
        <ToastContainer />
        <GlobalStyle />
      </Section>
    );
  }
}
