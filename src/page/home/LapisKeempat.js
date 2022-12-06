import React, { useContext } from "react";
import { MainContext } from ".";

export default function LapisKeempat(props) {
  const LapisKeempatContext = useContext(MainContext);

  return (
    <div>
      <div>LapisKeempat & Terakhir</div>
      <div className="count">{LapisKeempatContext.state.data}</div>
    </div>
  );
}
