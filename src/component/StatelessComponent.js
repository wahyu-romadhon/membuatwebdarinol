import React from "react";

const StatelessComponent = (props) => {
  console.log("StatelessComponent", props);
  return (
    <div className="App">
      <div>Stateless Component</div>
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              background: "grey",
              color: "white",
              margin: "20px 0",
            }}
          >
            <div>nama: {item.nama}</div>
            <div>nik: {item.nik}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatelessComponent;
