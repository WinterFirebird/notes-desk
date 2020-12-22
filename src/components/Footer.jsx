import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.div`
  padding: 20px;
  background-color: black;
  color: white;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

function Footer() {
  return (
    <AppFooter>
      <footer>
        <h4>
          Created by
          <A href="https://github.com/WinterFirebird" target="_blank">Arman Grigoryan</A>
        </h4>
      </footer>
    </AppFooter>
  );
}

export default Footer;
