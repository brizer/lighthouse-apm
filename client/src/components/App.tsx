import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import Home from "./Home";
const { Header, Footer, Content } = Layout;

const HeaderDiv = styled.div`
  text-align:center;
`;

export default function App() {
  return (
    <React.Fragment>
      <Layout className="site-layout">
        <HeaderDiv>
          <Header className="site-layout-background" style={{ padding: 0 }}>Lighthouse-APM</Header>
        </HeaderDiv>
        <Content>
          <Router>
            <Route exact path="/" component={Home} />
          </Router>
        </Content>
        <Footer>Lighthouse APM</Footer>
      </Layout>
    </React.Fragment>
  );
}
