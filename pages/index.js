import Head from 'next/head';
import { motion } from 'framer-motion';

import { HomePageS, ContentS } from '../styles/pages/home';
import { AquirePrimaryHeading, NeueLightSmallText } from '../styles/typography';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CustomCursor from '../components/cursor/CustomCursor';

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title> denosaurabh </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="denosaurabh"
          content="denosaurabh portfolio, developer and designer."
        />
      </Head>
      <CustomCursor />
      <HomePageS>
        <Header />
        <ContentS
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.img
            initial={{ width: '50px', zIndex: 1000, opacity: 0 }}
            animate={{ width: '70%', zIndex: -1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
            src="/assets/img/black-hole.png"
            alt="black-hole"
            className="black-hole"
          />
          <AquirePrimaryHeading>Saurabh</AquirePrimaryHeading>
          <NeueLightSmallText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            Full Stack Developer and Designer
          </NeueLightSmallText>
        </ContentS>
        <Footer />
      </HomePageS>
    </div>
  );
}

/*

----------------------------------------------------
PROJECT BOX INVISIBLE HOVER EFFECT
----------------------------------------------

*/
