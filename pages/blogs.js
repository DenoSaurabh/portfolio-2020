import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import withApollo from '../lib/apollo';
import { GET_BLOGS } from '../apollo/blogs.queries';

import Grid from '../components/grid/grid';
import ContentBox from '../components/content-box/content-box';
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
      <Grid>
        {data.blogs.map(({ blogUrl, id, img, title, smallDescription }, i) => (
          <ContentBox
            url={blogUrl}
            key={id}
            title={title}
            imgName={img.fileName}
            imgUrl={img.url}
          >
            {smallDescription}
          </ContentBox>
        ))}
      </Grid>
    </Page>
  );
};

export default withApollo({ ssr: true })(BlogsPage);
