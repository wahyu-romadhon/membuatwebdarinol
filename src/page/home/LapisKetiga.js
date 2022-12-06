import React, { useContext } from "react";
import { MainContext } from ".";
import LapisKeempat from "./LapisKeempat";

export default function LapisKetiga(props) {
  const LapisKetigaContext = useContext(MainContext);

  return (
    <div>
      <div>LapisKetiga</div>
      <div className="count">{LapisKetigaContext.state.data}</div>
      <LapisKeempat />
    </div>
  );
}
