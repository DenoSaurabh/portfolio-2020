import ProjectHOC from '../../components/project-hoc/project-hoc';

const NatoursAPI = () => (
  <ProjectHOC
    title="Natours API"
    nextAppName="Walkie Talkie"
    nextAppURL="walkie-talkie"
    imgName="natours-api"
    githubLink="https://github.com/DenoSaurabh/nodejs-bootcamp"
    projectLink="https://nodejs-bootcamp.herokuapp.com/"
  >
    This is a project that I made in a course to expetise and increase my
    knowledge in backend. Natours is a company for booking and managing nature
    tours. In this course I learned a whole lot about NodeJS, Express, databases
    such as MongoDB & mongoose, stripe, emails, server-side-rendering and
    deployment. Other that this, I learned about amazing code management, best
    security from attacks in APIs, best performance, with my favoutite part,
    Error Handling :D. This was a humangous project.
    <br /> <br />
    Docs url for API if you want:
    <a
      href="https://documenter.getpostman.com/view/8055041/SztJzjD1"
      target="_blank"
    >
      <u>https://documenter.getpostman.com/view/8055041/SztJzjD1</u>
    </a>
  </ProjectHOC>
);

export default NatoursAPI;
