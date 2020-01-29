import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  //컨포넌트가 마운트 딱 되었을때
  componentDidMount() {
    this.onMyinputSubmit("아이린");
  }

  //SearchBar 컨포넌트에서 myInput 받아서 실행 할거임
  onMyinputSubmit = async term => {
    //console.log(myInput);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  //비디오를 선택했을 때
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  //화면을 랜더링하기위한 부분
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit1={this.onMyinputSubmit} />
        {/* onFormSubmit1으로 onMyinputSubmit 함수를 날림, 그리고나서 state를 가져와서 함수이용 */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        <br />I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
