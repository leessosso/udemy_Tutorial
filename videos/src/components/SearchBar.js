import React, { Component } from "react";

class SearchBar extends Component {
  state = { myInput: "" };

  //onChange의 이벤트 핸들러 메서드, 콜백으로 onInputChange 바로 실행, 현재 input태그에 타이핑이 가능하게 되어있음
  //역할은 타이핑 친 글자를 setState함
  onInputChange = event => {
    this.setState({ myInput: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault(); //새로고침 방지

    this.props.onFormSubmit1(this.state.myInput);
    //onFormSubmit1으로 넘어 온 onMyinputSubmit 함수 프롭에 '(input에 적은 글자)myInput' state를 넣어서
    //부모 컨포넌트에 있는 onMyinputSubmit 함수를 실행함.
  };

  //서치바 랜더링 작업
  render() {
    return (
      <div className="seach-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* 2번 순서 input에 글자를 적고 엔터를 딱 누르면 onFormSubmit 실행 */}
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.myInput}
              onChange={this.onInputChange}
              //1번순서 인풋이 변화가 있을때마다 onInputChange이 실행
              //onChange={event=> this.setState({myInput: event.target.value})} 이런식으로 표현가능
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
