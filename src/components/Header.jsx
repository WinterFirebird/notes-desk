import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const AppHeader = styled.div`
  padding-top: 25px; /*margin collapsing fix*/
  padding: 25px;
  h1 {
    color: #000;
  }
  h3 {
    color: #808080;
  }
`;

function Header() {
  return (
    <AppHeader>
      <header>
        <h1>
          <Icon name="sticky note" />
          NotesDesk
        </h1>
        <h3>Simple sticky notes app created with react.js</h3>
      </header>
    </AppHeader>
  );
}

export default Header;
