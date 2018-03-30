import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import "./style.css";
import registerServiceWorker from "./registerServiceWorker";

render(<App />, document.getElementById("root"));
registerServiceWorker();
