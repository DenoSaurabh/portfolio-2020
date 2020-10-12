import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import withApollo from '../lib/apollo';
import { GET_BLOGS } from '../apollo/blogs.queries'

import {
  ProjectIMG,
  InlineStyle,
  SmallProjectsContent,
  ProjectBox,
} from '../styles/pages/blogs';

import { NeueTertiaryHeading, NeueLightMiniText } from '../styles/typography';

import Page from '../layouts/page/page';

const BlogsPage = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (error) return <h1>Error! ${error.message}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Page
      id="blogs"
      title="Blogs"
      metaName="denosaurabh blogs"
      metaDes="denosaurabh portfolio medium blogs"
    >
      <SmallProjectsContent>
        {data.blogs.map((el, i) => (
          <Link href={el.blogUrl} key={i}>
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

export default withApollo({ ssr: true })(BlogsPage);