import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default App;
