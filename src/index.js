import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { muiTheme } from './resources/theme';
import App from './components/App';

injectTapEventPlugin();

const mountNode = document.getElementById('root');

const Index = () => (
  <MuiThemeProvider muiTheme={ muiTheme }>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(<Index />, mountNode);

