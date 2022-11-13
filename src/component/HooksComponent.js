import React, { useEffect, useState } from "react";

export default function HooksComponent() {
  const [name, setname] = useState("");
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = name;
    setcount(count + 1);
  }, []);

  useEffect(() => {
    if (name) {
      document.title = name;
    }

    if (count) {
      updateCount();
    }

    return () => clearCount();
  }, [name, count]);

  const updateCount = () => {
    setTimeout(() => {
      setcount(count + 1);
    }, 2000);
  };

  const clearCount = () => {
    clearTimeout(0);
  };

  const handleInput = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <div className="App">
        <div style={{ margin: "10px 0" }}>Hooks (Functional Component)</div>
        <input
          name={name}
          value={name}
          onChange={(e) => handleInput(e)}
          className="input"
          placeholder="silahkan ketik title tab anda disini ..."
        />
        <div className="count">{count}</div>
      </div>
    </>
  );
}
