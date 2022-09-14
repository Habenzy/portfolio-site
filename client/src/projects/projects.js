import { useState } from "react";

export default function Projects(props) {
  const [allProjects, setProjects] = useState([]);
  return (
    <div id="project-list">
      {allProjects.map((proj) => (
        <ProjectDetail img={proj.img} title={proj.title} desc={proj.desc} />
      ))}
    </div>
  );
}

function ProjectDetail(props) {
  return (
    <div class="project-disp">
      <h2 class="proj-title">{props.title}</h2>
      <div class="proj-details">
        <img src={props.img} alt={props.title} />
        <p class="blurb">{props.desc}</p>
      </div>
    </div>
  );
}
