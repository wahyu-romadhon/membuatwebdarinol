// import withTemplateWrapper from "../../hoc/withTemplateWrapper";

import { useEffect, useState } from "react";
import TokopediaDashboard from "./TokopediaDashboard";

function Homepage(props) {
  const [harga, setHarga] = useState(0);
  const [kembalian, setkembalian] = useState(0);
  const [satu, setsatu] = useState(0);
  const [lima, setlima] = useState(0);
  const [sepuluh, setsepuluh] = useState(0);
  const [duaPuluh, setduaPuluh] = useState(0);
  const [limaPuluh, setlimaPuluh] = useState(0);
  const [seratus, setseratus] = useState(0);
  const [fanta, setfanta] = useState(false);
  const [pepsi, setpepsi] = useState(false);

  if (kembalian?.toString().length > 0 && kembalian > 0) {
    if (kembalian?.toString().length >= 3) {
      setseratus(seratus + 1);
      setkembalian(kembalian - 100);
    }
    if (kembalian?.toString().length === 2) {
      if (kembalian >= 50) {
        setlimaPuluh(limaPuluh + 1);
        setkembalian(kembalian - 50);
      } else if (kembalian >= 20) {
        setduaPuluh(duaPuluh + 1);
        setkembalian(kembalian - 20);
      } else {
        setsepuluh(sepuluh + 1);
        setkembalian(kembalian - 10);
      }
    }
    if (kembalian?.toString().length === 1) {
      if (kembalian >= 5) {
        setlima(lima + 1);
        setkembalian(kembalian - 5);
      } else {
        setsatu(satu + 1);
        setkembalian(kembalian - 1);
      }
    }
  }

  console.log(kembalian);

  return (
    <>
      {/* <div className="App">
        <div className="title-youtube">Halaman Home</div>
      </div> */}
      {/* <TokopediaDashboard /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div>Mata uang Saat ini, Rp 1, Rp 5, Rp 10, Rp 20, Rp. 50, Rp. 100</div>
        <br />
        <div>
          <input
            type="checkbox"
            checked={fanta}
            onClick={() => setfanta(!fanta)}
          />{" "}
          harga fanta: Rp 10
        </div>
        <div>
          <input
            type="checkbox"
            value={pepsi}
            checked={pepsi}
            onClick={() => {
              setpepsi(true);
              setkembalian(harga - 15);
            }}
          />{" "}
          harga Pepsi: Rp 15
        </div>
        <br />
        <div>
          Uang yg saya bayar{" "}
          <input value={harga} onChange={(e) => setHarga(e.target.value)} />
        </div>
        <br />
        {/* <div>
          Kembalian saya harusnya <input value={kembalian} />
        </div>
        <br /> */}
        <div>Jadi kembalian saya bila dipecah adalah:</div>
        {harga && (
          <>
            <br />
            <div>{satu} x 1 Rp</div>
            <div>{lima} x 5 Rp</div>
            <div>{sepuluh} x 10 Rp</div>
            <div>{duaPuluh} x 20 Rp</div>
            <div>{limaPuluh} x 50 Rp</div>
            <div>{seratus} x 100 Rp</div>
          </>
        )}
      </div>
    </>
  );
}

// export default withTemplateWrapper(Homepage);
export default Homepage;
