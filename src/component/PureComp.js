import React, { PureComponent } from "react";

//kesimpulan, tidak akan merender, bila tidak ada perubahan props atau state
export default class PureComp extends PureComponent {
  render() {
    console.log("pure component");

    return <div className="App">PureComponent: {this.props.counterkedua}</div>;
  }
}
