import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

import {
  ProjectIMG,
  InlineStyle,
  SmallProjectsContent,
  ProjectBox,
} from '../styles/pages/blogs';

import { NeueLightMiniText } from '../styles/typography';

import Page from '../components/page-hoc/page-hoc';

const BlogsPage = ({ blogs }) => (
  <Page
    id="blogs"
    title="Blogs"
    metaName="denosaurabh blogs"
    metaDe="denosaurabh portfolio medium blogs"
  >
    <SmallProjectsContent>
      {blogs.map((el) => (
        <Link href={el.blogUrl}>
          <ProjectBox key={el.id}>
            <ProjectIMG src={el.img.url} alt={el.img.fileName} />
            <InlineStyle>
              <NeueTertiaryHeading>{el.title}</NeueTertiaryHeading>
              <NeueLightMiniText>{el.smallDescription} </NeueLightMiniText>
            </InlineStyle>
          </ProjectBox>
        </Link>
      ))}
    </SmallProjectsContent>
  </Page>
);

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckdb531gn4tu501z8cx2788ol/master'
  );

  const { blogs } = await graphcms.request(`
      { 
        blogs {
            blogUrl
            smallDescription
            title
            id
            img {
              fileName
              url
            }
          }
        }
      }
  `);

  return {
    props: {
      blogs,
    },
  };
}

export default BlogsPage;
