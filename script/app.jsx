import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './appcontainer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>,
  document.getElementById("react-entry"));
