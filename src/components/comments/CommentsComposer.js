import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { store } from '../../store';

@observer
export const CommentsComposer = (Comments) => class extends Component {

  render() {
    const { comments } = store;

    if (!comments) {
      return null;
    }

    const props = { comments };

    return <Comments { ...props } />
  }

  componentDidMount() {
    store.getComments();
  }
};
