import React from "react";
import DrawerAppBar from "../component/DrawerAppBar";
import YoutubeComponent from "../component/YoutubeComponent";

export default function withTemplateWrapper(WrappedComponent) {
  const data = [
    { nama: "wahyu", nik: "122344" },
    { nama: "khalil", nik: "12387" },
    { nama: "bayu", nik: "222299" },
  ];

  const sumData = (a, b) => {
    return a * b;
  };

  return (props) => {
    return (
      <div>
        <DrawerAppBar />
        <YoutubeComponent />
        <WrappedComponent {...props} data={data} sumData={sumData} />
      </div>
    );
  };
}
