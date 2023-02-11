import withTemplateWrapper from "../../hoc/withTemplateWrapper";

function Contact(props) {
  console.log("props contact", props);

  return (
    <div className="App">
      <div className="title-youtube">Halaman Contact</div>
    </div>
  );
}

export default withTemplateWrapper(Contact);
