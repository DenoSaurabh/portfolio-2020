import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import withApollo from '../lib/apollo'

import {
  ProjectIMG,
  InlineStyle,
  SmallProjectsContent,
  ProjectBox,
} from '../styles/pages/blogs';

import { NeueTertiaryHeading, NeueLightMiniText } from '../styles/typography';

import Page from '../components/page-hoc/page-hoc';

const GET_BLOGS = gql`
  {
  blogs(stage: PUBLISHED, locales: en) {
    id
    title
    blogUrl
    smallDescription
    img {
      url
      fileName
    }
  }
}
`;

const BlogsPage = () => {
  const {loading, error, data} = useQuery(GET_BLOGS);

  console.log(loading, error, data);

  if (error) return <h1>Error! ${error.message}</h1>;
  if (loading) return <h1>Loading...</h1>;

  console.log(loading, error, data);

  return (
    <Page
      id="blogs"
      title="Blogs"
      metaName="denosaurabh blogs"
      metaDes="denosaurabh portfolio medium blogs"
    >
      <SmallProjectsContent>
        {data.blogs.map((el, i) => (
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
};


export default withApollo({ssr: true})(BlogsPage);


/*


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

*/