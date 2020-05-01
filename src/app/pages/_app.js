// import App from 'next/app'
import {
  StyledApp
} from '../pagesStyle';
import GlobalStyles from '../global.css';
import Header from '../components/header';
import Provider from '../redux/store';
import { AuthProvider } from '../contexts/auth';
import { DestinationProvider } from '../contexts/destination';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <DestinationProvider>
        <AuthProvider>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </AuthProvider>
      </DestinationProvider>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp