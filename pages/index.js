import Head from 'next/head';
import { motion } from 'framer-motion';

import { HomePageS, ContentS } from '../styles/pages/Home';
import { AquirePrimaryHeading, NeueLightSmallText } from '../styles/typography';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

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
      <HomePageS>
        <Header />
        <ContentS>
          <img src="/assets/img/black-hole.png" alt="black-hole" />
          <AquirePrimaryHeading>Saurabh</AquirePrimaryHeading>
          <NeueLightSmallText>
            Full Stack Developer and Designer
          </NeueLightSmallText>
        </ContentS>
        <Footer />
      </HomePageS>
    </div>
  );
}
