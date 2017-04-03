import React, { Component } from 'react';
import Styled from 'styled-components';
import { AppBar } from 'material-ui';

import { COLORS } from '../resources/theme';
import { CommentsWidget } from './comments/CommentsWidget';

class App extends Component {
  render() {

    const Wrapper = Styled.div`
      height: 100%; 
      padding: 10% 20%;
      backgroundColor: ${ COLORS.appBackground };
      color: ${ COLORS.text };
    `;

    const Container = Styled.div`
      margin: 0 auto;
    `;

    return (
      <div style={{ height: '100%' }}>
        <AppBar title="Ron Cohen" />
        <Wrapper>
          <AppBar title="List of Comments"/>
          <Container>
            <CommentsWidget />
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;
