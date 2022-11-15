import "../../App.css";
import YoutubeComponent from "../../component/YoutubeComponent";

function Homepage() {
  return (
    <>
      <YoutubeComponent />
      <div className="App">
        <div className="title-youtube">
          Belajar - Perbedaaan UseEffect & UseLayoutEffect
        </div>
      </div>
    </>
  );
}

export default Homepage;
