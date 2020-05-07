import App from 'next/app'
// import {
//   StyledApp
// } from '../pagesStyle';
import withRedux from "next-redux-wrapper";
import GlobalStyles from '../global.css';
import Header from '../components/header';
import Provider from '../redux/store';
import { AuthProvider } from '../contexts/auth';
import { DestinationProvider } from '../contexts/destination';
import { LayoutProvider } from '../contexts/layout';
import { store } from '../redux/store';
import { Main } from '../pagesStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <DestinationProvider>
        <AuthProvider>
          <LayoutProvider>
            <GlobalStyles />
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
          </LayoutProvider>
        </AuthProvider>
      </DestinationProvider>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// Here will be the requests for initial redux state
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const pageProps = await App.getInitialProps(appContext);

  return { ...pageProps }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);