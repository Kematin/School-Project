// imgs
import project1 from "./../img/projects/01.jpg";
import project1Big from "./../img/projects/01-big.jpg";

// projects list
import projects from "./projectsList";

const noDetailsProject = {
  id: 0,
  title: "Undefined",
  skills: "Undefined",
  img: project1,
  imgBig: project1Big,
};

function retrieveSingleProject(id) {
  for (const project of projects) {
    if (project.id == id) {
      return project;
    }
  }

  return noDetailsProject;
}

export default retrieveSingleProject;
