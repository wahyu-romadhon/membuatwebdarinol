import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { route } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
