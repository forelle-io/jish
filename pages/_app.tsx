import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../store';

interface Props {
    store: any
}

export default withRedux(initializeStore, { debug: true })(
  class ForelleApp extends App<Props> {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }
    componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/workers/serviceWorker.js')
          .then(() => console.log('service worker registered.'))
          .catch(err => console.dir(err));
      }
    }
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);