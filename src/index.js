import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "store";
import { initailState, postReducer } from "store/postReducer";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initailState} reducer={postReducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
