import React, { Component } from "react";

class SearchBar extends Component {
  state = { myInput: "" };

  //onChange로 콜백으로 onInputChange 바로 실행, 텍스트에 글씨 적히게끔
  onInputChange = event => {
    this.setState({ myInput: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault(); //새로고침 방지

    //TODO: Make sure we call
    //callback from parent component
    this.props.onFormSubmit(this.state.myInput);
  };

  render() {
    return (
      <div className="seach-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.myInput}
              onChange={this.onInputChange}
              //onChange={e=> this.setState({myInput: e.target.value})} 이런식으로 표현가능
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
