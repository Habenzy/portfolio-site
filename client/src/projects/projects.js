import { useState } from "react";

export default function Projects(props) {
  const [allProjects, setProjects] = useState([]);
  return (
    <div id="project-list" className="center-wrapper">
      Coming soon...
      {allProjects.map((proj, index) => (
        <ProjectDetail img={proj.img} title={proj.title} desc={proj.desc} key={index}/>
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
        <a href={props.link}>Check out the site!</a>
      </div>
    </div>
  );
}
