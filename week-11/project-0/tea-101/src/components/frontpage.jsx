import React, { Component } from 'react';

class FrontPage extends Component {
  state = {
    title1 : "DELICIOUS",
    title2 : "DELIGHTS",
    btnText : "Check'em Out"
  }
  render() {
    return (
      <div>
        <h1>{this.state.title1}</h1>
        <h1>{this.state.title2}</h1>
        <button onClick={this.props.onOpinion}>{this.state.btnText}</button>
      </div>
    );
  }
}

export default FrontPage;