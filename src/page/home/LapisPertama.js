import React, { useContext } from "react";
import { MainContext } from ".";
import LapisKedua from "./LapisKedua";

export default function LapisPertama(props) {
  const LapisPertamaContext = useContext(MainContext);
  const state = LapisPertamaContext.state; //untuk meringkas

  return (
    <div>
      <div>
        <button
          className="btn"
          onClick={() =>
            LapisPertamaContext.dispatch({
              type: "ACTION_TAMBAH",
              payload: state.data + 1, //saat kita kirim payload ini
            })
          }
        >
          tambah (+)
        </button>
        <button
          className="btn"
          onClick={() =>
            LapisPertamaContext.dispatch({
              type: "ACTION_KURANG",
              payload: state.data - 1, //saat kita kirim payload yg ini
            })
          }
        >
          kurang (-)
        </button>
      </div>
      <div>LapisPertama</div>
      <div className="count">{state.data}</div>
      <LapisKedua />
    </div>
  );
}
