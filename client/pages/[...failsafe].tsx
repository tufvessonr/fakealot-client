import Router from 'next/router';
import React, { Component } from 'react';

import { Route } from '../constants';

class FailSafe extends Component {
  componentDidMount(): void {
    Router.push(Route.Root);
  }
  render(): JSX.Element {
    return <></>;
  }
}

export default FailSafe;
