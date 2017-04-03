import React, { Component } from 'react';
import { Card, CardText } from 'material-ui';
import Styled from 'styled-components';

import { COLORS } from '../../resources/theme';
import { RemoveComment } from './RemoveComment';
import { EditComment } from './EditComment';
import { observer } from 'mobx-react';

@observer
export class Comment extends Component {

  render() {

    const Title = Styled.b`
    color: ${COLORS.text};
    display: block;
    margin-bottom: 4px;
 `;

    const Content = Styled.div`
    color: ${COLORS.lightText};
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    width: 80%;
  `;

    const Actions = Styled.div`
    display: inline-block;
    width: 20%;
    text-align: right;
  `;

    const { email, comment, id } = this.props;

    return <Card zDepth={ 1 }>
      <CardText>
        <Content>
          <Title>
            { email }
          </Title>
          { comment }
        </Content>
        <Actions>
          <EditComment comment={ this.props }>
          </EditComment>
          <RemoveComment id={ id }>
          </RemoveComment>
        </Actions>
      </CardText>
    </Card>;
  }
}
