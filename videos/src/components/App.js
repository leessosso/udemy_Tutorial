import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {
  state = { videos: [] };

  onMyinputSubmit = async myInput => {
    console.log(myInput);
    const response = await youtube.get("/search", {
      params: {
        q: myInput
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onMyinputSubmit} />
        <br />I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
