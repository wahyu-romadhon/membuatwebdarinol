import withTemplateWrapper from "../../hoc/withTemplateWrapper";

function Homepage(props) {
  console.log("props home", props);

  const sumDataNih = props.sumData(8, 100);
  return (
    <div className="App">
      <div className="title-youtube">Halaman Home</div>
      <div className="count">{sumDataNih}</div>
    </div>
  );
}

export default withTemplateWrapper(Homepage);
