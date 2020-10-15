import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import { NeuePrimaryHeading, NeueLightSmallText } from '../styles/typography';

import withApollo from '../lib/apollo';
import { GET_PROJECTS } from '../apollo/projects.queries';

import ContentBox from '../components/content-box/content-box';
import Grid from '../components/grid/grid';

import Page from '../layouts/page/page';

const ProjectsPage = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <h1>loading</h1>;

  const { mainProjects, smallProjects, archivedProjects } = data;

  return (
    <Page
      id="projects"
      title="Projects"
      metaName="projects denosaurabh"
      metaDes="projects made by denosaurabh in web development"
      nextPageLink="/skills"
      nextPageTitle="skills"
    >
      <Grid>
        {mainProjects.map(
          ({ id, title, smallDescription, img, row, column, appKey }) => (
            <ContentBox
              key={id}
              imgUrl={img.url}
              imgName={img.fileName}
              title={title}
              column={column}
              appKey={appKey}
              row={row}
              projectId={id}
              >
              {smallDescription}
            </ContentBox>
          )
        )}
      </Grid>
      <Grid>
        {smallProjects.map(({ id, title, smallDescription, img, appKey }) => (
          <ContentBox
            key={id}
            projectId={id}
            imgUrl={img.url}
            imgName={img.fileName}
            appKey={appKey}
            title={title}
          >
            {smallDescription}
          </ContentBox>
        ))}
      </Grid>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <NeuePrimaryHeading>Archived Projects</NeuePrimaryHeading>
        &nbsp; &nbsp;
        <NeueLightSmallText
          style={{ width: '50%', minWidth: '300px', lineHeight: '26px' }}
        >
          Want to know some of my oldest projects when I was getting into
          programming, let’s check out: D
        </NeueLightSmallText>
      </div>
      <Grid>
        {archivedProjects.map(
          ({ id, title, smallDescription, img, projectUrl }) => (
            <ContentBox
              key={id}
              imgUrl={img.url}
              imgName={img.fileName}
              title={title}
              url={projectUrl}
            >
              {smallDescription}
            </ContentBox>
          )
        )}
      </Grid>
    </Page>
  );
};

export default withApollo({ ssr: true })(ProjectsPage);
