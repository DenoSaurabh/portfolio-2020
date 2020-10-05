import { RecoilRoot } from 'recoil';

import '../styles/globals.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
