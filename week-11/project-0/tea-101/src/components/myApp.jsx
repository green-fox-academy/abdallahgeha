import React, { Component } from 'react';
import FrontPage from './frontpage';
import Detail from './detail';
import Opinion from './opinion';

class App extends Component {
  state = {
    pageSelection: ['front', 'detail', 'opinion'],
    selectedPage: "front"
  }
  frontPage = () => {
    return <FrontPage />;
  }

  teaDetails = () => {
    return <Detail onOpinion={this.switchToOpinion}/>;
  }

  leaveOpinion = () => {
    return <Opinion />;
  }

  switchToDetail = ()=> {
    this.setState({ selectedPage : this.state.pageSelection[1] });
  }

  switchToOpinion = ()=> {
    this.setState({ selectedPage : "opinion" });
  }

  render() {
    if (this.state.selectedPage === this.state.pageSelection[0]) {
      return (this.frontPage());
    } else if (this.state.selectedPage === this.state.pageSelection[1]) {
      return (this.teaDetails());
    } else {
      return (this.leaveOpinion());
    }

  }
}

export default App;