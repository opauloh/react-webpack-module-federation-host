import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Modal from "./Modal";

const App = () => (
  <div>
    <div>Hi there, I'm the host of the {`Modal`} Component.</div>
    <Modal>WoooT</Modal>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
