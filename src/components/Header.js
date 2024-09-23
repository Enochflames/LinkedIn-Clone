import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <NavBar>
        <Logo href="/">
          <img src="/images/login-logo.svg" alt="LinkedIn" />
        </Logo>
        <Search>
          <input type="text" placeholder="Search" />
          <SearchIcon>
            <img src="/images/linkedin.png" alt="Search" />
          </SearchIcon>
        </Search>
        <NavMenu>
          <NavItem>
            <img src="/images/nav-home.svg" alt="Home" />
            <span>Home</span>
          </NavItem>
          <NavItem>
            <img src="/images/nav-network.svg" alt="Network" />
            <span>My Network</span>
          </NavItem>
          {/* Add more navigation items as needed */}
        </NavMenu>
      </NavBar>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 0 24px;
`;

const NavBar = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
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

export default Header;