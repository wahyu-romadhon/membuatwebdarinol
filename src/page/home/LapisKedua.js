import React, { useContext } from "react";
import { MainContext } from ".";
import LapisKetiga from "./LapisKetiga";

export default function LapisKedua(props) {
  const LapisKeduaContext = useContext(MainContext);

  return (
    <div>
      <div>LapisKedua</div>
      <div className="count">{LapisKeduaContext.state.data}</div>
      <LapisKetiga />
    </div>
  );
}
