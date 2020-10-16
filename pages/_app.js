import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

import { useAlert } from '../state/alert.recoil';

import Alert from '../components/alert/alert';

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <Alert />
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default App;
