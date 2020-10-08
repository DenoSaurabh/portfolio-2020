import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {
  ProjectIMG,
  InlineStyle,
  SmallProjectsContent,
  ProjectBox,
} from '../styles/pages/blogs';

import { NeueLightMiniText } from '../styles/typography';

import Page from '../components/page-hoc/page-hoc';

const BlogsPage = () => {
  const GET_BLOGS = gql`
    query GetBlogs {
      blogs {
        title
      }
    }
  `;

  const { loading, error, blogs } = useQuery(GET_BLOGS);

  console.log(loading, error, blogs);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(loading, error, blogs);

  return <h1>{blogs}</h1>;
};

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

export default BlogsPage;
