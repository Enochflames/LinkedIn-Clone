import React from "react";
import Header from "../components/Header"; // Your header component
import Leftside from "../components/Leftside"; // Your left-side content
import Main from "../components/Main"; // Main content that dynamically changes
import Rightside from "../components/Rightside"; // Rightside only for the home route
import Network from "../pages/Network"; // Network content
import Jobs from "../pages/Jobs"; // Jobs content
import Notifications from "../pages/Notifications"; // Notifications content
import styled from "styled-components";

function Home({ username, showRightside, content }) {
  let MainContent;

  // Conditionally render the main content based on the route
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
      <Header /> {/* Include the header here */}
      <Container>
        <Layout>
          <Leftside /> {/* Left side stays constant */}
          <MainContentWrapper>
            {MainContent}
          </MainContentWrapper>
          {showRightside && <Rightside />} {/* Rightside is shown only on the home page */}
        </Layout>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 52px; /* Adjust for fixed header */
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export default Home;
