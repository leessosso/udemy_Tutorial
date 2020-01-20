import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

import Spinner from "./Spinner";

class App extends React.Component {
  //THIS IS THE ONLY TIME we DO direct assignment
  //to this.state
  //babel이 알아서 생성자를 만들어준다.
  state = { lat: null, errorMessage: "" };

  //
  //일반적으로 통신규칙인 데이터로드 요청 같은거는 constructor가 아닌 componentDidMount에서 함
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    alert("my component was just updated - it rerendered!");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Plaease accept lacation request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
