'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from '../src/facebook';

const responseFacebook = (response) => {
  console.log(response);
}

const requestDisableAnotherProcess = () => {
  console.log('requestDisableAnotherProcess');
}

ReactDOM.render(
    <FacebookLogin
      appId="1735294546758743"
      autoLoad={true}
      callback={responseFacebook}
      icon="fa-facebook"
      requestDisableAnotherProcess={requestDisableAnotherProcess}
    />,
  document.getElementById('demo')
);
