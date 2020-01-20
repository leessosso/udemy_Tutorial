import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    //기본값으로 변경되는것을 막아줌 새로고침방지
    e.preventDefault();
    this.props.ssosso(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="feild">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
