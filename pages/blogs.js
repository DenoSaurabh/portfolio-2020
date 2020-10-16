import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import withApollo from '../lib/apollo';
import { GET_BLOGS } from '../apollo/blogs.queries';

import Grid from '../components/grid/grid';
import ContentBox from '../components/content-box/content-box';
import Page from '../layouts/page/page';

import { NeueSecondaryHeading } from '../styles/typography';

import { useCursor } from '../state/cursor.recoil';

import Story from '../components/story/story';

const ShortStoriesBlock = styled.div`
  margin: 5rem 10rem;

  @media only screen and (max-width: 700px) {
    margin: 5rem;
  }
`;

const StoriesContainer = styled.div`
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
`;

const BlogsPage = () => {
  // const [storyVisible, storyInvisible] =
  const { updateCursorStatus } = useCursor();

  const { loading, error, data } = useQuery(GET_BLOGS);

  if (error) return <h1>Error! ${error.message}</h1>;
  if (loading) return <h1>Loading...</h1>;

  const { blogs, shortStories } = data;

  return (
    <Page
      id="blogs"
      title="Blogs"
      metaName="denosaurabh blogs"
      metaDes="denosaurabh portfolio medium blogs"
    >
      <Grid>
        {blogs.map(({ blogUrl, id, img, title, smallDescription }) => (
          <ContentBox
            key={id}
            title={title}
            imgName={img.fileName}
            imgUrl={img.url}
            url={blogUrl}
          >
            {smallDescription}
          </ContentBox>
        ))}
      </Grid>
      <ShortStoriesBlock>
        <NeueSecondaryHeading
          onHoverStart={() =>
            updateCursorStatus({ text: 'Exclusive on Portfolio' })
          }
          onHoverEnd={() => updateCursorStatus(null)}
        >
          Short Stories
        </NeueSecondaryHeading>
        <StoriesContainer>
          {shortStories.map(({ id, title, date, description }) => (
            <Story key={id} title={title} date={date}>
              {description.html}
            </Story>
          ))}
        </StoriesContainer>
      </ShortStoriesBlock>
    </Page>
  );
};

export default withApollo({ ssr: true })(BlogsPage);
