import React, { Component } from 'react';

import { Comment } from './Comment';
import { List } from '../../decorators/list-decorator';
import { CommentsComposer } from './CommentsComposer';
import { observer } from 'mobx-react';

@CommentsComposer
export class CommentsWidget extends Component {

  render() {
    const Cards = observer(List(this.props.comments)(Comment));

    return <Cards />;
  }
}
