import './index';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'twin.macro';
import QtApp from './qt/QtApp';

ReactDOM.render(
  <>
    <GlobalStyles />
    <QtApp />
  </>,
  document.querySelector('#root'),
);
