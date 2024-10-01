import React from "react";
import Header from "../components/Header";
import Leftside from "../components/Leftside";
import Main from "../components/Main";
import Rightside from "../components/Rightside"; 
import styled from "styled-components";
import Network  from "../pages/Network";
import Jobs from "../pages/Jobs";
import Notifications from "../pages/Notifications";

function Home({ username, showRightside, content }) {
  let MainContent;

  switch (content) {
    case "network":
      MainContent = <Network />;
      break;
    case "jobs":
      MainContent = <Jobs />;
      break;
    case "notifications":
      MainContent = <Notifications />;
      break;
    default:
      MainContent = <Main username={username} />;
      break;
  }

  return (
    <> 
    <Header />
    <Container>
      <Layout>
        <Leftside /> 
        <MainContentWrapper>
          {MainContent}
        </MainContentWrapper>
        {showRightside && <Rightside />}
      </Layout>
    </Container>
    </>

  );
}

const Container = styled.div`
  padding-top: 52px;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 0 20px;
  
`;

export default Home;
