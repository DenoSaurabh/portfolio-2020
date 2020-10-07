import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

import {
  AboutPageS,
  AboutContent,
  LeftContent,
  RightContent,
  SmallBoldText,
  ChatsBox,
  SocialBox,
} from '../styles/pages/about';

import {
  AquireSecondaryHeading,
  NeueUBoldMediumSmallText,
  NeueLightMiniText,
  NeueLightSmallText,
  NeueSecondaryHeading,
} from '../styles/typography';

import CustomCursor from '../components/cursor/CustomCursor';

import { useCursor } from '../state/cursor.recoil';

const BlogsPage = () => {
  const { updateCursorStatus } = useCursor();

  useEffect(() => {
    return () => updateCursorStatus(null);
  }, []);

  return (
    <AboutPageS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      key="about"
    >
      <Head>
        <title>about - denosaurabh</title>
        <meta
          name="about denosaurabh"
          content="All about denosaurabh, how he think and design."
        />
      </Head>
      <CustomCursor />
      <NeueUBoldMediumSmallText
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/">denosaurabh.</Link>
        <Link href="/blogs">
          <a>
            <u>blogs</u>
          </a>
        </Link>
      </NeueUBoldMediumSmallText>
      <AquireSecondaryHeading>About</AquireSecondaryHeading>
      <AboutContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <LeftContent>
          <NeueLightMiniText style={{ marginBottom: '30px' }}>
            Hi, I am Saurabh. I’m a self taught Frontend developer, backend
            developer and UI/UX designer. I love to create amazing beautiful web
            apps & mobile apps. The goal is to create fast, scalable,
            performant, accessible web apps with outstanding UI/UX. I try to
            think out of the box for new & innovate ideas that can solve gobal
            problems with amazing knowledge and technologies. I expetise is
            around web technologies. Other then this, I love playing &nbsp;
            <motion.span
              onHoverStart={() =>
                updateCursorStatus({
                  text:
                    "shhh! let's play some Minecraft: Strizer_, super secret!",
                  alignment: 'left',
                })
              }
              onHoverEnd={() => updateCursorStatus(null)}
            >
              video games
            </motion.span>
            , making digital arts and 3D modeling.
          </NeueLightMiniText>
          <NeueUBoldMediumSmallText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onHoverStart={() =>
              updateCursorStatus({
                text:
                  'Solving Problem is my favourite part while building an app!',
                alignment: 'right',
              })
            }
            onHoverEnd={() => updateCursorStatus(null)}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Problem Solving
          </NeueUBoldMediumSmallText>
          <NeueLightMiniText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            style={{ margin: '30px 0' }}
          >
            So, How I like to solve problems ? &nbsp;
            <b>Let’s me explain by an example. </b> Some researches go to the
            seas to collect oceanic climate data. And the problem is that
            because of slow and unstable internet connectivity, they are unable
            to send real time data to servers and often lose data because of no
            internet. We have to make an app that can solve this massive
            problem.
            <SmallBoldText>1. Problem Indentification </SmallBoldText>
            <b>context:</b> send Real time & completed data to server.
            <br />
            <b>issue:</b> unstable & slow internet connectivity.
            <br />
            <b>why:</b> It can help to make better & accurate research.
            <SmallBoldText>2. Research </SmallBoldText>
            Then I go to stackoverflow to find the solution of a problem,
            because there can be already peoples who has solved that. If not,
            this is more exciting. (let’s think this is not in StackOverFlow) I
            reasrch more in this & discuss with my other peeps about this
            problem. After research I found out that this is a offline database
            & sync problem. Then my knowledge comes, I realised that MongoDB
            Realm and Firebase can solve these problems. I research more in
            these pros and cons and which can make better project. (Secret: most
            of my solutions comes at while I am going to sleep at night and in
            evening walk. )<SmallBoldText>3. Pseudocode </SmallBoldText>
            Now, it’s time to think what will be the steps to solve this
            problem, Not the final code, but just a pen and paper to think what
            will be the strategy to approach this problem.
            <SmallBoldText>4. Implementation </SmallBoldText>
            Now, it’s time to write code. I write the actual code fast as
            possible to show the working prototype and be confident and
            it’works. It’s time to rest.
            <SmallBoldText>5. Improve </SmallBoldText>
            Now, the problem has been solved with code, I improve my code
            structure as well as for performance with other goddies.
            <br />
            <br />
            PROBLEM SOLVED!
          </NeueLightMiniText>
        </LeftContent>
        &nbsp;
        <RightContent>
          <NeueSecondaryHeading>
            I love making projects on great Ideas, let's build a project
            togethor!
          </NeueSecondaryHeading>
          <br />
          <b>
            <NeueLightMiniText>
              get a cup of coffee and let's have a chit-chat, I will never miss
              some great ideas!
            </NeueLightMiniText>
          </b>
          <br />
          <NeueLightSmallText>denosaurabh@gmail.com</NeueLightSmallText>

          <ChatsBox>
            <NeueLightMiniText>
              <Link href="https://join.skype.com/invite/b0duJveFed9U">
                <a>Skype</a>
              </Link>
            </NeueLightMiniText>
            <NeueLightMiniText
              onHoverStart={() =>
                updateCursorStatus({
                  text: 'denosaurabh@gmail.com',
                  alignment: 'right',
                })
              }
              onHoverEnd={() => updateCursorStatus(null)}
            >
              <Link href="https://hangouts.google.com/">
                <a>Hangout</a>
              </Link>
            </NeueLightMiniText>
            <NeueLightMiniText>
              <Link href="https://twitter.com/messages">
                <a>Twitter</a>
              </Link>
            </NeueLightMiniText>
            <NeueLightMiniText
              onHoverStart={() =>
                updateCursorStatus({
                  text:
                    'denosaurabh #5404. I am most active on discord, chatting daily with other developer communities.',
                  alignment: 'left',
                })
              }
              onHoverEnd={() => updateCursorStatus(null)}
            >
              <Link href="https://discord.com">
                <a>Discord</a>
              </Link>
            </NeueLightMiniText>
          </ChatsBox>
          <b>
            <NeueLightMiniText>or follow me on &rarr;</NeueLightMiniText>
          </b>
          <SocialBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <NeueLightMiniText>
              <Link href="https://twitter.com/denosaurabh">
                <a>Twitter</a>
              </Link>
            </NeueLightMiniText>
            <NeueLightMiniText>
              <Link href="https://github.com/denosaurabh">
                <a>Github</a>
              </Link>
            </NeueLightMiniText>
            <NeueLightMiniText>
              <Link href="https://dribbble.com/denosaurabh">
                <a>Dribble</a>
              </Link>
            </NeueLightMiniText>
            <NeueLightMiniText>
              <Link href="https://linkedin.com/in/denosaurabh">
                <a>LinkedIn</a>
              </Link>
            </NeueLightMiniText>
          </SocialBox>
        </RightContent>
      </AboutContent>
    </AboutPageS>
  );
};

export default BlogsPage;
