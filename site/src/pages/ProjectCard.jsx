// libs
import { useParams } from "react-router-dom";

// utils
import retrieveSingleProject from "../helpers/project";

// components
import ProjectCardSection from "../components/ProjectCardSection/ProjectCardSection";

function ProjectCard() {
  const { id } = useParams();
  const project = retrieveSingleProject(id);
  return (
    <div>
      <ProjectCardSection projectDetails={project} />
    </div>
  );
}

export default ProjectCard;
