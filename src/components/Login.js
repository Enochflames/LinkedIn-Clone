import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Linklogo from "../images/LI-Logo.png";
import Discover from "../images/discover.png";
import People from "../images/people.png";
import Job from "../images/job.png";
import RightImg from "../images/linkein-main.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #f8f9fa;

  .link-logo img {
    width: 140px;
  }

  .nav-button {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 20px;
      display: flex;
      align-items: center;
      h6 {
        margin-left: 10px;
      }
    }

    .join, .signin {
      margin-left: 20px;
      padding: 10px 20px;
      cursor: pointer;
    }

    .join {
      background-color: #0073b1;
      color: white;
      border-radius: 20px;
    }

    .signin {
      color: #0073b1;
    }
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  .left-form {
    flex: 1;
    padding-right: 50px;

    .form {
      h3 {
        font-size: 1.8em;
      }

      input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .privacy {
        margin-top: 10px;
        font-size: 0.9em;
        color: #666;
      }

      .agree-join {
        background-color: #0073b1;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        margin-top: 20px;
        font-size: 1em;
      }

      .already-account {
        margin-top: 20px;
        font-size: 0.9em;
        color: #0073b1;
      }
    }
  }

  .right-form {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

    .left-form, .right-form {
      flex: unset;
      padding: 20px 0;
    }

    .right-form {
      justify-content: flex-start;
    }
  }

  @media (min-width: 1025px) {
    .left-form {
      flex: 0.6;
    }

    .right-form {
      flex: 0.4;
    }
  }
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;

  .footer-sec {
    display: flex;
    justify-content: space-around;
    flex: 1;

    ul {
      list-style: none;
      padding: 0;
      li {
        margin: 10px 0;
      }
    }

    .link-logo img {
      width: 140px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    .footer-sec {
      flex-direction: column;
      align-items: center;
      ul {
        margin-bottom: 20px;
      }
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <>
      <Nav>
        <div className="link-logo">
          <img src={Linklogo} alt="Linkedin Logo" />
        </div>
        <div className="nav-button">
          <div className="icon">
            <img src={Discover} alt="" />
            <h6>Discover</h6>
          </div>
          <div className="icon">
            <img src={People} alt="" />
            <h6>People</h6>
          </div>
          <div className="icon">
            <img src={Job} alt="" />
            <h6>Job</h6>
          </div>
          <div className="join">Join Now</div>
          <div className="signin">Sign in</div>
        </div>
      </Nav>

      <Main>
        <div className="left-form">
          <div className="form">
            <h3>Join the biggest professional community</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="privacy">
                By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
              </div>
              <button className="agree-join" type="submit">Agree & Join</button>
            </form>
            <div className="already-account">
              Already on LinkedIn? <span>Sign in</span>
            </div>
          </div>
        </div>
        <div className="right-form">
          <img src={RightImg} alt="LinkedIn main" height={560} />
        </div>
      </Main>

      <Footer>
        <div className="footer-sec">
          <div className="link-logo">
            <img src={Linklogo} alt="Linkedin Logo" />
          </div>
          <ul>
            <li>General</li>
            <li>Sign Up</li>
            <li>Help Center</li>
            <li>About</li>
          </ul>
          <ul>
            <li>Browse LinkedIn</li>
            <li>Learning</li>
            <li>Jobs</li>
            <li>Salary</li>
          </ul>
        </div>
      </Footer>
    </>
  );
}

export default Login;
