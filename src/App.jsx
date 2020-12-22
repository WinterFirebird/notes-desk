// import logo from './logo.svg';
import React from 'react';
import './App.css';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const stylingVariables = {
  bgColor: '#fffcde',
  black: '#121212',
  gray: '#545353',
  white: '#f7f7f7',
};

export const styleContext = React.createContext();

const GlobalStyle = createGlobalStyle`
  :root {
    font-size:16px;
  }

  @media screen and (max-width: 480px) {
    :root {
      font-size:14px;
    }
  }
`;

const AppWrapper = styled.div`
  text-align:center;
  /**/
  background-color: ${stylingVariables.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <styleContext.Provider value={stylingVariables}>
        <AppWrapper>
          <Header />
          <Body />
          <Footer />
        </AppWrapper>
      </styleContext.Provider>
    </>
  );
}

export default App;
