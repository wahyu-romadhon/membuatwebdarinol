import React, { useEffect, useLayoutEffect, useState } from "react";

export default function BelajarEffects(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ke-1, count: ", count);
  }, [count]);

  useEffect(() => {
    console.log("useEffect ke-2, count: ", count);
  }, [count]);

  useEffect(() => {
    console.log("useEffect ke-3, count: ", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect ke-1, count: ", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect ke-2, count: ", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect ke-3, count: ", count);
  }, [count]);

  console.log(
    `---- ${
      count === 0
        ? `start pertama kali, count:${count}`
        : `trigger hasil klik, count:${count}`
    } ----`
  );
  return (
    <div className="App">
      {console.log("console dalam return, count:", count)}
      <button onClick={() => setCount(count + 1)}>click me!</button>
      <div className="count">{count}</div>
    </div>
  );
}
