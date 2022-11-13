import "./App.css";
import ClassComponent from "./component/ClassComponent";
import HooksComponent from "./component/HooksComponent";
import YoutubeComponent from "./component/YoutubeComponent";

function App() {
  return (
    <>
      <YoutubeComponent />
      <div className="App">
        <div
          style={{
            fontSize: "25px",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            padding: "15px",
          }}
        >
          Belajar - Ngoding Sangat Ringkas & Simple with React Hooks (Functional
          Component)
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
        <ClassComponent />
        <div>VS</div>
        <HooksComponent />
      </div>
    </>
  );
}

export default App;
