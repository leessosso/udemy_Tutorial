import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight); //0이 찍힐건데 이미지 로딩이 아직 안돼서

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const heigt = this.imageRef.current.clientHeight;

    const spans = Math.ceil(heigt / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
