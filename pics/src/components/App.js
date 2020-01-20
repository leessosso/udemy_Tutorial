import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* style의 첫번째 중괄호는 스크립스를 적기위한 것 두번째중괄호는 스타일을 사용하기 위한것 */}
        <SearchBar ssosso={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found:{this.state.images.length} images
      </div>
    );
  }
}

export default App;
