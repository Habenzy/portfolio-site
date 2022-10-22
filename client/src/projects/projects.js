import { useState } from "react";

export default function Projects(props) {
  const [allProjects, setProjects] = useState([
    {img: "", title: "Phantom Theater", desc: "", link: "", linkText: ""},
    
    {img: "", title: "The Granville Corner School", desc: "", link: "", linkText: ""},

    {img: "", title: "Abodea Time Tracker", desc: "A Chrome extension for tracking time spent on support tickets. Designed to work with Hubspot it will track time on the first ticket open and ignore other tickets that are opened while a ticket is currently being tracked. Once the tracked tab is closed a note is made on the ticket with the time stamp, and email of the support person. Other features include the icon changing based on whether the currently tracked tab is in focus, and the ability to refocus on the tracked tab, and get a time check by clicking the extension icon. This was the first project I worked on at Impulse Creative. It was initially started by one of the project managers/designers however after months of delays, and issues I was brought into the company and took over this project. While there was a good base to work from the original developer didn't actually know JavaScript, and had hacked it together through tutorials and code examples. After an initial quick start got bogged down in errors I decided to completely rebuild the app from scratch. Please note that as this was made during my tenure at Impulse Creative so they own this code, not me.", link: "https://github.com/Habenzy/Abodea_Time_Tracker", linkText: "Check out the source code on Github"},

    {img: "", title: "The Cohortium Installer", desc: "An absolute bear of an application This is designed to read a Github repo and duplicate its contents in hubspot as a fully functional framework for Impulse Creative's new Cohortium Chat plugin for Hubspot. When shown to the Hubspot team they said \"I didn't even think that was possible!\" This application is fully secured using Hubspot's Oauth, and uses that identification to target the end user's account for the installation and setup of all the necessary templates, modules, custom objects, and HubDB Tables that make Cohortium run. It even deploys a test page under their account so they can see the plugin in action! I also worked with the application team to implement full CRUD ability to the user accounts, and messages on the boards for admins, and the OP (while disallowing edits to content not your own).", link: "https://cohortium.io/", linkText: "Unfortunately it's behind a paywall, but if you're really curious you could probably get a demo here."},

    {img: "", title: "Burlington Code Academy Curriculum", desc: "BCA is a 12 week intensive fullstack bootcamp-style course focused on web development", link: "", linkText: ""},

    {img: "", title: "Burlington Code Academy LMS", desc: "", link: "", linkText: ""},

    {img: "", title: "Text Adventure", desc: "A little text adventure game built during my tenure as the lead instructor for BCA. Originally this was built out as an example for one of the weekly projects, but then I just kept adding to it. Will it ever be finished with a coherent story? Maybe, but I wouldn't hold my breath for it.", link: "https://github.com/Habenzy/adventure-game", linkText: "View the source code on Github. Feel free to use it for your own projects, just give me credit if you're using it in a paid application!"},

    {img: "", title: "Tic Tac Toe", desc: "Built during my time as a student at BCA it's Tic Tac Toe! The AI is pretty good, but not perfect, if you start in the upper right hand corner of the one player version you can sometimes win. Play around with some of the different modes and features to see what's in there.", link: "http://awesome-tic-tac-toe.herokuapp.com/", linkText: "Check out the hosted version here!"}
  ]);
  return (
    <div id="project-list" className="center-wrapper">
      {allProjects.map((proj, index) => (
        <ProjectDetail img={proj.img} title={proj.title} desc={proj.desc} key={index} link={proj.link} linkText={proj.linkText}/>
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
        <a href={props.link}>{props.linkText}</a>
      </div>
    </div>
  );
}
