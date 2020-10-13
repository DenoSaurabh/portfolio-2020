import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ReactMarkdown from 'react-markdown';

import {
  ProjectInfoContent,
  ProjectIMG,
  LinkButton,
  ButtonsBox,
} from '../../styles/components/project-hoc';

import withApollo from '../../lib/apollo';

import { NeueLightMiniText } from '../../styles/typography';

import Page from '../../layouts/page/page';

const ProjectHOC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const GET_PROJECT = gql`
    {
      project(where: { appKey: "${id}" }) {
        projectUrl
        longDescription
        githubUrl
        title
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PROJECT);
  console.log(data, error);

  if (loading) return <h1>loading</h1>;
  if (error || !data.project) return <h1>Error! not found</h1>;

  const { projectUrl, longDescription, githubUrl, title } = data.project;
  console.log(data);

  return (
    <Page
      id={id}
      title={title}
      metaName="projects denosaurabh"
      metaDes="projects made by denosaurabh in web development"
      nextPageLink={`/projects`}
      nextPageTitle={'Projects'}
      previousPageLink="/projects"
    >
      <ProjectInfoContent>
        <ButtonsBox>
          <a href={projectUrl}>
            <LinkButton>
              <NeueLightMiniText>Project Link</NeueLightMiniText>
            </LinkButton>
          </a>
          <a href={githubUrl}>
            <LinkButton>
              <NeueLightMiniText>Github</NeueLightMiniText>
            </LinkButton>
          </a>
        </ButtonsBox>
        <NeueLightMiniText>
          <ReactMarkdown source={longDescription} />
        </NeueLightMiniText>
      </ProjectInfoContent>
    </Page>
  );
};

export default withApollo({ ssr: true })(ProjectHOC);
