import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      count: 0,
    };

    this.handleInput = this.handleInput.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.clearCount = this.clearCount.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;

    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) {
      document.title = this.state.name;
    }

    if (this.state.count !== prevState.count) {
      this.updateCount();
    }
  }

  componentWillUnmount() {
    this.clearCount();
  }

  updateCount() {
    this.timerCount = setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 2000);
  }

  clearCount() {
    if (this.timerCount) {
      clearTimeout(this.timerCount);
      this.timerCount = 0;
    }
  }

  handleInput(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <>
        <div className="App">
          <div style={{ margin: "10px 0" }}>Class Component</div>
          <input
            name={this.state.name}
            value={this.state.name}
            onChange={(e) => this.handleInput(e)}
            className="input"
            placeholder="silahkan ketik title tab anda disini ..."
          />
          <div className="count">{this.state.count}</div>
        </div>
      </>
    );
  }
}
