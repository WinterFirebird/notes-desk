import React from 'react';
import styled from 'styled-components';
import Main from './Main';

const AppBody = styled.div`
    padding:40px 10px;
`;

function Body() {
  return (
    <AppBody>
      <Main />
    </AppBody>
  );
}

export default Body;
