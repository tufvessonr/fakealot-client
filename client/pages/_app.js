import '../styles/main.scss';

import { StylesProvider } from '@material-ui/styles';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { Main } from '../components/_base/main.component';
import { persistor, store } from '../redux/store';
import { theme } from '../styles/theme';

import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../apollo/apollo';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const StoreApp = ({ Component, componentProps }) => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <PersistGate persistor={persistor}>
            <ApolloProvider client={client}>
              <Main>
                <Component {...componentProps} />
              </Main>
            </ApolloProvider>
          </PersistGate>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default StoreApp;
