import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const AppHeader = styled.div`
  padding-top:25px; /*margin collapsing fix*/
  padding:25px;
`;

const AppHeaderH1 = styled.h1`
  color: #000;
`;

const AppHeaderH3 = styled.h3`
  color:gray;
`;

function Header() {
  return (
    <AppHeader>
      <header>
        <AppHeaderH1>
          <Icon name="sticky note" />
          NotesDesk
        </AppHeaderH1>
        <AppHeaderH3>Simple sticky notes app created with React.js</AppHeaderH3>
      </header>
    </AppHeader>
  );
}

export default Header;
