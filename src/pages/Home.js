import React, { useState } from "react";
import Header from "../components/Header";
import Leftside from "../components/Leftside";
import Main from "../components/Main";
import Rightside from "../components/Rightside";
import styled from "styled-components";

function Home({ username }) {
  return (
    <>
      <Header />
      <Container>
        <Layout>
          <Leftside username={username} />
          <Main username={username} />
          <Rightside />
        </Layout>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Home;
