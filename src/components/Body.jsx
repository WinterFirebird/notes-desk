import React from 'react';
import Main from './Main';
import styled from 'styled-components';

const AppBody = styled.div`
    padding: 40px 10px;
`;

const Body = (props) => {
  return (
    <AppBody>
      <Main />
    </AppBody>
  );
}

export default Body;
