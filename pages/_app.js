import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default MyApp;
