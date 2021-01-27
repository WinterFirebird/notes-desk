import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.div`
  padding: 20px;
  background-color: #333;
  color: #d3d3d3;
  footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 480px) {
      flex-direction: column-reverse;
    }
    align-items: center;
    a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s ease-in;
    }
    a:hover {
      color: #fff;
    }
    h4 {
      display: inline-block;
      margin: 0;
      &:first-child {
        font-size: 0.8rem;
        opacity: 0.7;
      }
      &:last-child {
        padding: 6px;
      }
    }
  }
`;

function Footer() {
  return (
    <AppFooter>
      <footer>
        <h4>
          This web application was created for educational purposes.
          All of your data is stored in the browser local storage which is temporary. <br/>
          Don't save any sensitive information. <br/>
        </h4>
        <h4>
          Made with ❤ by
          <a href="https://github.com/armanDark" target="_blank"> Arman Grigoryan</a>
        </h4>
      </footer>
    </AppFooter>
  );
}

export default Footer;
