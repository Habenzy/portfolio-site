import { useState } from "react";

export default function Projects(props) {
  const [allProjects, setProjects] = useState([
    {img: "", title: "Phantom Theater", desc: "", link: ""},
    {img: "", title: "The Granville Corner School", desc: "", link: ""},
    {img: "", title: "Abodea Time Tracker", desc: "A Chrome extension for tracking time spent on support tickets. Designed to work with Hubspot it will track time on the first ticket open and ignore other tickets that are opened while a ticket is currently being tracked. Once the tracked tab is closed a note is made on the ticket with the time stamp, and email of the support person. Other features include the icon changing based on whether the currently tracked tab is in focus, and the ability to refocus on the tracked tab, and get a time check by clicking the extension icon. This was the first project I worked on at Impulse Creative. It was initially started by one of the project managers/designers however after months of delays, and issues I was brought into the company and took over this project. While there was a good base to work from the original developer didn't actually know JavaScript, and had hacked it together through tutorials and code examples. After an initial quick start got bogged down in errors I decided to completely rebuild the app from scratch. Please note that as this was made during my tenure at Impulse Creative so they own this code, not me.", link: "https://github.com/Habenzy/Abodea_Time_Tracker"},
    {img: "", title: "The Cohortium Installer", desc: "", link: ""},
    {img: "", title: "Misc. Impulse Creative Projects", desc: "While at Impulse Creative I also worked on the front end of several sites, as well as several backend integrations. The highlights were a Hubspot to AWS S3 integration with upload, and download capability, as well as separate user data sets, authentication, and securely partitioned data (end users cannot see other end users' data, only their own, though admins can see all the data); Several Hubspot to Stripe integrations including one with custom discount logic (they needed discounts applied in a very specific order, it was a PItA), implementation of two of Impulse Creative's HubLMS product (very jenky, do not recommend); And far more front end work than I was expecting from a backend developer position.", link: "https://impulsecreative.com/"},
    {img: "", title: "Burlington Code Academy Curriculum", desc: "", link: ""},
    {img: "", title: "Burlington Code Academy LMS", desc: "", link: ""}
  ]);
  return (
    <div id="project-list" className="center-wrapper">
      {allProjects.map((proj, index) => (
        <ProjectDetail img={proj.img} title={proj.title} desc={proj.desc} key={index} link={proj.link}/>
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
        <a href={props.link}>Check out the site or code!</a>
      </div>
    </div>
  );
}
