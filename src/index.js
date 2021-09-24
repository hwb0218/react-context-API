import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "store";
import { initailState, postReducer } from "store/postReducer";
import GlobalStyles from "styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <StoreProvider initialState={initailState} reducer={postReducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
