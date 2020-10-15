import React from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ReactMarkdown from 'react-markdown';

import {
  ProjectInfoContent,
  LinkButton,
  ButtonsBox,
} from '../../styles/components/project-hoc';

import withApollo from '../../lib/apollo';

import {
  NeueLightMiniText,
  NeueUBoldMediumSmallText,
} from '../../styles/typography';

import Page from '../../layouts/page/page';

const GET_MAIN_PROJECT = gql`
  query project($id: String!) {
    projects(where: { appKey: $id }) {
      projectUrl
      longDescription
      githubUrl
      title
      id
    }
  }
`;

const GET_AFTER_PROJECT = gql`
  query Project($id: String!) {
    projects(first: 1, after: $id, where: { archived: false }) {
      title
      appKey
    }
  }
`;

const ProjectHOC = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    loading: mainProjectLoading,
    error: mainProjectError,
    data: mainproject,
  } = useQuery(GET_MAIN_PROJECT, {
    variables: { id },
  });

  const {
    loading: afterProjectLoading,
    error: afterProjectError,
    data: afterproject,
  } = useQuery(GET_AFTER_PROJECT, {
    skip: !id,
    variables: { id: mainproject?.projects[0]?.id },
  });

  if (mainProjectLoading)
    return (
      <NeueUBoldMediumSmallText>loading ....... </NeueUBoldMediumSmallText>
    );
  if (mainProjectError)
    return (
      <NeueUBoldMediumSmallText>Error! not found </NeueUBoldMediumSmallText>
    );

  /* -----------------------  */

  if (afterProjectLoading)
    return (
      <NeueUBoldMediumSmallText>loading ....... </NeueUBoldMediumSmallText>
    );
  if (afterProjectError)
    return (
      <NeueUBoldMediumSmallText>Error! not found </NeueUBoldMediumSmallText>
    );

  /* -----------------------  */
  const {
    projectUrl,
    longDescription,
    githubUrl,
    title,
  } = mainproject.projects[0];

  const { title: afterProjectTitle, appKey: afterProjectAppKey } = afterproject
    .projects[0] || {
    title: '',
    appKey: '/projects',
  };

  return (
    <Page
      id={id}
      title={title}
      metaName="projects denosaurabh"
      metaDes="projects made by denosaurabh in web development"
      nextPageLink={afterProjectAppKey}
      nextPageTitle={afterProjectTitle}
      previousPageLink="/projects"
      className="page"
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
