import withTemplateWrapper from "../../hoc/withTemplateWrapper";

function About(props) {
  console.log("props about", props);

  return (
    <div className="App">
      <div className="title-youtube">Halaman About</div>
    </div>
  );
}

export default withTemplateWrapper(About);
