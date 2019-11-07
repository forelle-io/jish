import { Provider } from 'react-redux';
import App from 'next/app';
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

    render() {
      const { Component, pageProps, store } = this.props;
      return (
          <Provider store={store}>
            <Component {...pageProps} />
            <style global jsx>{`
            font-family: 'Roboto', sans-serif;
          `}</style>
          </Provider>
      );
    }
  }
);