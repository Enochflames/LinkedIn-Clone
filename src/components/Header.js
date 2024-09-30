import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <NavBar>
        <Logo href="/">
          <img src="/images/LI-Logo.png" alt="LinkedIn" />
        </Logo>
        <Search>
          <input type="text" placeholder="Search" />
          <SearchIcon>
            <img src="/images/linkedin.png" alt="Search" />
          </SearchIcon>
        </Search>
        <NavMenu>
          <NavIconsWrapper>
            <NavLinkWrapper to="/home">
              <NavItem>
                <img src="/images/nav-home.svg" alt="Home" />
                <span>Home</span>
              </NavItem>
            </NavLinkWrapper>
            <NavLinkWrapper to="/network">
              <NavItem>
                <img src="/images/nav-network.svg" alt="Network" />
                <span>My Network</span>
              </NavItem>
            </NavLinkWrapper>
            <NavLinkWrapper to="/jobs">
              <NavItem>
                <img src="/images/nav-jobs.svg" alt="Jobs" />
                <span>Jobs</span>
              </NavItem>
            </NavLinkWrapper>
            <NavLinkWrapper to="/notifications">
              <NavItem>
                <img src="/images/nav-notifications.svg" alt="Notifications" />
                <span>Notifications</span>
              </NavItem>
            </NavLinkWrapper>
          </NavIconsWrapper>
        </NavMenu>
      </NavBar>
    </Nav>
  );
}

// Styled components for styling
const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const NavBar = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.a`
  img {
    width: 90px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #eef3f8;
  padding: 0 10px;
  border-radius: 5px;

  input {
    background: none;
    border: none;
    outline: none;
    padding: 8px;
    font-size: 14px;
    color: #000;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const SearchIcon = styled.div`
  img {
    width: 20px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 12px;
  }

  img {
    width: 20px;
  }
`;

const NavIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const NavLinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 12px;
`;

export default Header;
