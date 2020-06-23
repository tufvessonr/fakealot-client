import { curry, memoize } from 'lodash';
import Router from 'next/router';

import { Route } from '../constants';

export const AppRoute = memoize(curry((path: Route) => Router.push(path)));

export const AppEventRoute = memoize(
  curry((path: Route, e: React.BaseSyntheticEvent) => {
    e; // Just here to green light typescript

    Router.push(path);
  })
);
