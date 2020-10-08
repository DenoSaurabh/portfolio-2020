import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { getDataFromTree } from '@apollo/react-ssr';
import fetch from 'isomorphic-unfetch';

import '../styles/globals.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

const link = createHttpLink({
  uri:
    'https://api-eu-central-1.graphcms.com/v2/ckdb531gn4tu501z8cx2788ol/master',
  fetch,
});

const apollo = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo}>
      <RecoilRoot>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </RecoilRoot>
    </ApolloProvider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const apolloState = { data: {} };
  const { AppTree } = ctx;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (typeof window === 'undefined') {
    if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
      return pageProps;
    }

    try {
      const props = { ...pageProps, apolloState, apollo };
      const appTreeProps = 'Component' in ctx ? props : { pageProps: props };
      await getDataFromTree(<AppTree {...appTreeProps} />);
    } catch (error) {
      console.error('GraphQL error occurred [getDataFromTree]', error);
    }

    Head.rewind();

    apolloState.data = apollo.cache.extract();
  }

  return { pageProps };
};

export default App;
