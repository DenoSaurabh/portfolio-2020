import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import ReactHtmlParser from 'react-html-parser';

import withApollo from '../lib/apollo';

import {
  AboutContent,
  LeftContent,
  RightContent,
  ChatsBox,
  SocialBox,
} from '../styles/pages/about';

import {
  NeueUBoldMediumSmallText,
  NeueLightMiniText,
  NeueLightSmallText,
  NeueSecondaryHeading,
} from '../styles/typography';

import { GET_ABOUT } from '../apollo/about.queries';

import Page from '../layouts/page/page';

import { useCursor } from '../state/cursor.recoil';

const AboutPage = () => {
  const { updateCursorStatus } = useCursor();

  const { loading, error, data: about } = useQuery(GET_ABOUT);

  if (loading) return <h1>Loading</h1>;

  return (
    <Page
      id="about"
      title="About"
      metaName="about denosaurabh"
      metaDes="how denosaurabh solve problem, denosaurabh contact"
      nextPageTitle="blogs"
      nextPageLink="/blogs"
    >
      <AboutContent>
        <LeftContent>
          {about.abouts.map(({ title, description }, i) => (
            <div key={i}>
              <NeueUBoldMediumSmallText>{title}</NeueUBoldMediumSmallText>
              <br />
              <NeueLightMiniText>
                {ReactHtmlParser(description.html)}
              </NeueLightMiniText>
              <br />
              <br />
            </div>
          ))}
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
              some great ideas! If the idea is great I can even research more on
              it as well throw some tips to you for free :D
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
                    'denosaurabh 🎃 #5404. I am most active on discord, chatting daily with other developer communities.',
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
    </Page>
  );
};

export default withApollo({ ssr: true })(AboutPage);
