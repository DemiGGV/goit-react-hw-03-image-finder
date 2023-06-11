import { Component } from 'react';
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
  state = {
    querry: '',
    page: 1,
    imgArr: [],
    errorMessage: null,
    visibleBtn: false,
    status: 'idle',
  };

  async componentDidUpdate(_, pState) {
    const { querry, page, imgArr } = this.state;
    if (querry !== pState.querry || page !== pState.page) {
      this.handleChangeState('loading');
      try {
        const resp = await fetchGetImgs(querry, page);
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
                top: 270 * 3,
                behavior: 'smooth',
              });
          }
        );
        this.handleChangeState('idle');
      } catch (error) {
        this.handleChangeState('error');
        this.setState({ errorMessage: 'Bad request! Try reloading the page.' });
      }
    }
  }

  handleChangeState = status => {
    this.setState({ status });
  };

  handleFormQuerry = querry => {
    if (querry === this.state.querry) return;
    this.setState({
      querry,
      page: 1,
      imgArr: [],
    });
  };

  newFetchImages = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    const { status, errorMessage, imgArr, visibleBtn } = this.state;
    return (
      <Section>
        <Searchbar onQuerry={this.handleFormQuerry} />
        <ImageGallery imgArr={imgArr} />
        {status === 'loading' && <Loader />}
        {status === 'error' && toast.error(errorMessage, toastOpts)}
        {visibleBtn && <Button onChange={this.newFetchImages} />}
        <ToastContainer />
        <GlobalStyle />
      </Section>
    );
  }
}
