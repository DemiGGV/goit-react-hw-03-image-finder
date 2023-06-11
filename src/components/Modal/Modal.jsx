import { Component } from 'react';

export class Modal extends Component {
  componentDidMount = () => {};

  render() {
    const { image } = this.props;
    return <img src={image} alt={image.tags} />;
  }
}
