import "./App.css";
import StateFullComponent from "./component/StateFullComponent";

function App() {
  return (
    <>
      <div className="App">
        <div style={{ textDecoration: "underline", fontSize: "30px" }}>
          Belajar - Macam2 Class Component.
        </div>
        <br />
        <div>1. StateFull Component</div>
        <div>2. Pure Component</div>
        <div>3. Stateless Component</div>
      </div>
      <hr />

      <StateFullComponent />
    </>
  );
}

export default App;
