import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { route } from "./routes";
import "react-loading-skeleton/dist/skeleton.css"; //taruh di file paling atas
import { SkeletonTheme } from "react-loading-skeleton";

//kita pasang skeleton theme di file paling atas juga
//kita bungkus disini
//oke sudah cantik

function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="green">
      <BrowserRouter>
        <Routes>
          {route.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
