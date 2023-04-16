import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Principal } from "@dfinity/principal";

const CURRENT_USER_ID = Principal.fromText("dy2st-ehajo-fqya4-5iuq5-n2r2p-gg6rr-5ug3e-g2nug-recz5-smv5k-bqe");
export default CURRENT_USER_ID;

const init = async () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

init();
