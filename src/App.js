import { useState } from "react";

function App() {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [active, setActive] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "grey",
          width: "400px",
          marginTop: "300px",
          padding: "5px",
        }}
      >
        <div style={{ display: "flex" }}>
          {data
            .filter((e, index) => index <= 10)
            .map((item, index) => {
              return (
                <div
                  style={{
                    margin: "0px 10px",
                    background: index + 1 === active && "red",
                    padding: index + 1 === active && "2px 4px",
                    borderRadius: index + 1 === active && "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => setActive(index + 1)}
                >
                  {item}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
