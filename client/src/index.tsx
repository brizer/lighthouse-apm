import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import 'antd/dist/antd.css';
import App from "./components/App";

const GlobalStyle = createGlobalStyle`
 ${normalize}
 .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme="dark"] .site-layout .site-layout-background {
    background: white;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
