import React, { Component } from 'react';
import { StatusBar } from "react-native";

import Routes from './routes';

export default class src extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Routes />
      </>
    );
  }
}
