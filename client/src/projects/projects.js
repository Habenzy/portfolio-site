import { useState } from "react";

export default function Projects(props) {
  const [allProjects, setProjects] = useState([
    {img: "", title: "Phantom Theater", desc: "The website for Phantom theater was originally built by a group of my students as their capstone project at BCA. It's got a front end built with React, and a back end hooked up to Firebase. The current show, next show, and season page are all dynamically drawn from the list of approved shows based on date. The students did marvelous work, and I can't claim credit for any of the design work on this site. However with only 4 weeks to work on it, and 3 months of experience with coding there were some rough spots in the site's functionality, especially around the backend connections, and the auto populated lists. As the technical director of Phantom I'm in charge of maintaining and improving the site, so I debugged, and improved the back end functionality which now runs without issue.", link: "https://www.phantomtheater.org/", linkText: "Visit the site!"},

    {img: "", title: "The Granville Corner School", desc: "The website for the CSRC of Granville was one of my first professional web dev projects. The front end is built in react, and ties into several backend resources, mainly Firebase and Soundcloud, to provide access to all the information the board of directors have unearthed (sometimes literally). On the admin side of things there is a protected secret portal that ties into a Firebase backend, and uses Google auth for security. This allows the board of directors to directly add images to the galleries, and information to the home page with no coding experience necessary. While this was initially built several years ago I continue to maintain and improve it as a donation to the organization. The next round of improvements are going to expand the functionality of the galleries, and expand the admin interface for ease of use.", link: "http://www.cornerschoolvt.org/", linkText: "Check it out!"},

    {img: "", title: "Abodea Time Tracker", desc: "A Chrome extension for tracking time spent on support tickets. Designed to work with Hubspot it will track time on the first ticket open and ignore other tickets that are opened while a ticket is currently being tracked. Once the tracked tab is closed a note is made on the ticket with the time stamp, and email of the support person. Other features include the icon changing based on whether the currently tracked tab is in focus, and the ability to refocus on the tracked tab, and get a time check by clicking the extension icon. This was the first project I worked on at Impulse Creative. It was initially started by one of the project managers/designers however after months of delays, and issues I was brought into the company and took over this project. While there was a good base to work from the original person assigned to this task wasn't a programmer, and had hacked it together through tutorials and code examples. They did give me a good base to build from, but after an initial quick start got bogged down in errors I decided to completely rebuild the app from scratch. Please note that as this was made during my tenure at Impulse Creative so they own this code, not me.", link: "https://github.com/Habenzy/Abodea_Time_Tracker", linkText: "Check out the source code on Github"},

    {img: "", title: "The Cohortium Installer", desc: "An absolute bear of an application This is designed to read a Github repo and duplicate its contents in hubspot as a fully functional framework for Impulse Creative's new Cohortium Chat plugin for Hubspot. When shown to the Hubspot team they said \"I didn't even think that was possible!\" This application is fully secured using Hubspot's Oauth, and uses that identification to target the end user's account for the installation and setup of all the necessary templates, modules, custom objects, and HubDB Tables that make Cohortium run. It even deploys a test page under their account so they can see the plugin in action! I also worked with the application team to implement full CRUD ability to the user accounts, and messages on the boards for admins, and the OP (while disallowing edits to content not your own).", link: "https://cohortium.io/", linkText: "Unfortunately it's behind a paywall, but if you're really curious you could probably get a demo here."},

    {img: "", title: "Burlington Code Academy Curriculum", desc: "BCA is a 12 week intensive fullstack bootcamp-style course focused on web development. While the original curriculum was designed by Josh Burke (the director of education) during my tenure as lead instructor I optimized the curriculum, modified it for use in an online format, kept it up to date and adjusted it to focus class time on subjects students traditionally struggled with. By the time I left BCA there wasn't a single portion of the curriculum I hadn't taken ownership of. I'm sure the current instructors have continued to modify the curriculum to match their teaching styles, and new tech trends, so you might have to dig back through the commit history to find the version I wrote (I'm Habenzy on Github).", link: "https://github.com/BurlingtonCodeAcademy/sdb-summer-2021-curriculum", linkText: "Check out the full curriculum here (in markdown format)"},

    {img: "", title: "Burlington Code Academy LMS", desc: "The BCA LMS was my first major software project. I worked on it in conjunction with our head of development (also Josh Burke), and in house software developer Nick. I was responsible for the student progress tracking, and slide deck integration portions of the system.", link: "https://burlingtoncodeacademy.com/", linkText: "Talk to the folks at BCA for more info!"},

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
        {/* <img src={props.img} alt={props.title} /> */}
        <p class="blurb">{props.desc}</p>
        <a href={props.link}>{props.linkText}</a>
      </div>
    </div>
  );
}
