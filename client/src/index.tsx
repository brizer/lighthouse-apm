import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";
import App from "./pages/App";

const GlobalStyle = createGlobalStyle`
 ${normalize}
 .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme="dark"] .site-layout .site-layout-background {
    background: white;
  }
`;

const client: ApolloClient<any> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById("root")
);
