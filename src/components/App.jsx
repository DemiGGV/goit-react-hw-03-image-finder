import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Section } from 'components/MainContainerCSS';
import { Button } from './Button/Button';
import { fetchGetImgs } from './ImageGallery/FetchEngine';
import { mappingArray } from './ImageGallery/imgArrayFormatting';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    querry: '',
    page: 1,
    imgArr: [],
    visibleBtn: false,
    status: 'idle',
  };

  handleFormQuerry = ({ querry }) => {
    this.setState({ querry });
  };

  handleChangeState = status => {
    this.setState({ status });
  };

  componentDidUpdate(_, pState) {
    const { querry, page } = this.state;
    if (querry === pState.querry) {
      window.scrollBy({
        top: 280 * 3,
        behavior: 'smooth',
      });
      return;
    }
    this.handleChangeState('loading');
    this.setState({ page: 1 });
    try {
      fetchGetImgs(querry, page)
        .then(resp => {
          const fetchArr = mappingArray(resp.hits);
          if (Number(resp.totalHits) > 12) {
            this.setState({ visibleBtn: true });
          } else this.setState({ visibleBtn: false });
          this.setState({ imgArr: [...fetchArr] });
          this.handleChangeState('loaded');
        })
        .catch(function (error) {
          throw new Error(error);
        });
    } catch (error) {
      this.handleChangeState('error');
      this.setState({ errorMessage: error });
    }
  }

  newFetchImages = async () => {
    this.handleChangeState('loading');
    const { querry, page, imgArr } = this.state;
    const currPage = page + 1;
    this.setState({
      page: currPage,
    });
    try {
      await fetchGetImgs(querry, currPage)
        .then(resp => {
          const fetchArr = mappingArray(resp.hits);
          if (Number(resp.totalHits) > fetchArr.length + imgArr.length) {
            this.setState({ visibleBtn: true });
          } else this.setState({ visibleBtn: false });
          this.setState(prevState => ({
            imgArr: [...prevState.imgArr, ...fetchArr],
          }));
          this.handleChangeState('loaded');
        })
        .catch(function (error) {
          throw new Error(error);
        });
    } catch (error) {
      this.handleChangeState('error');
      this.setState({ errorMessage: error });
    }
  };

  render() {
    const { status, errorMessage, imgArr, visibleBtn } = this.state;
    return (
      <Section>
        <Searchbar onQuerry={this.handleFormQuerry} />
        <ImageGallery imgArr={imgArr} />
        {/* {status === 'loaded' &&} */}
        {status === 'loading' && <Loader />}
        {status === 'error' && <p>{errorMessage}</p>}
        {visibleBtn && <Button onChange={this.newFetchImages} />}
        <GlobalStyle />
      </Section>
    );
  }
}
