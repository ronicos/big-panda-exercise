import React from 'react';
import { IconButton } from 'material-ui';

import { COLORS } from '../../resources/theme';

export const CommentAction = ({ children }) =>
  <div style={{ padding: '0 2px', display: 'inline-block' }}>
    <IconButton style={{ padding: 0, width: 'inherit', height: 'inherit' }}
                iconStyle={{ color: COLORS.lightText }}>
      { children }
    </IconButton>
  </div>;
