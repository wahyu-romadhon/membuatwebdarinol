import { createContext, useReducer } from "react";
import withTemplateWrapper from "../../hoc/withTemplateWrapper";
import { reducer } from "../../reducer/reducer";
import LapisPertama from "./LapisPertama";

const globalState = {
  data: 0,
};

export const MainContext = createContext();

function Homepage(props) {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="title-youtube">Masih Perlukah Redux???</div>
        <LapisPertama />
      </div>
    </MainContext.Provider>
  );
}

export default withTemplateWrapper(Homepage);
