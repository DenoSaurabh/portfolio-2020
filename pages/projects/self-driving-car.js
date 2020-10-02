import ProjectHOC from '../../components/project-hoc/project-hoc';

const SelfDrivingCar = () => (
  <ProjectHOC
    title="Self Driving Car"
    imgName="self-driving-car"
    githubLink="https://github.com/DenoSaurabh/self-driving-car-webapp"
    projectLink="https://self-driving-car-webapp.netlify.app/"
  >
    This is a amazing project that I made with my AI Enginner brother Shubham
    (https://github.com/shubhamai). With collaboration, we made a application
    where you can control a RC car remotely and check its every status, when
    it’s in AI mode.
    <br />
    <br />
    The project was for the science/tech exibution, so I can’t show you much
    more about this.
    <br />
    <br />
    If you want to know all about how it works, check out my github repo.{' '}
  </ProjectHOC>
);

export default SelfDrivingCar;
