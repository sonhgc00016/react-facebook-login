'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from '../src/facebook';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <FacebookLogin
      appId="1735294546758743"
      autoLoad={true}
      callback={responseFacebook}
      icon="fa-facebook"
    />
  </MuiThemeProvider>,
  document.getElementById('demo')
);
