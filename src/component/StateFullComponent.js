import React, { Component } from "react";
import PureComp from "./PureComp";
import StatelessComponent from "./StatelessComponent";

export default class StateFullComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      counterkedua: 0,
    };
  }
  render() {
    console.log("state full component");
    const { counter, counterkedua } = this.state;

    const data = [
      { nama: "wahyu romadhon", nik: "12345" },
      { nama: "irfan romadhon", nik: "12346" },
      { nama: "dani romadhon", nik: "12347" },
    ];

    return (
      <>
        <div className="App">
          <div>counter click pertama: {counter}</div>
          <button
            onClick={() =>
              this.setState({
                counter: counter + 1,
              })
            }
          >
            click me
          </button>
          <div>counter click kedua: {counterkedua}</div>
          <button
            onClick={() =>
              this.setState({
                counterkedua: counterkedua + 1,
              })
            }
          >
            click me kedua
          </button>
        </div>
        <PureComp counterkedua={counterkedua} />
        <StatelessComponent data={data} />
      </>
    );
  }
}
