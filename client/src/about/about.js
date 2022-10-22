export default function About(props) {
  return (
    <div className="center-wrapper">
      <div id="intro" className="text-block">
        <img src="" alt="Bob's face" />
        <p>
          Hello, and welcome to my little corner of the internet. You might be
          wondering "just who the heck is this guy?" or maybe you just want a
          little more context about what makes me such an awesome person. Well
          you've come to the right place! I'm Bob and as the header hints at I'm
          a professional full-stack web developer. This wasn't always the case
          though...
        </p>
        <p>
          If you don't want to read through my life story{" "}
          <a href="#programming-blurb">click here to jump to the section</a>{" "}
          where I talk about becoming a programmer, or if you want something
          even more cut and dry you can{" "}
          <a href="/current-stauss-resume.pdf" download>
            click here to download my resume.
          </a>
        </p>
      </div>

      <div id="about" className="text-block">
        <p>
          Born and raised in central Vermont, I grew up on the family farm, and
          was always interested in mythology and art. I spent my childhood out
          in the woods, exploring, playing, and building little forts. Despite
          the blood feuds with a couple of the redneck families in the area it
          was a good childhood, and I can boast that I went to the longest
          continuously running one-room schoolhouse in the country (which has
          sadly shut down now). I also started running lights and sound for a
          little local theater called{" "}
          <a href="https://www.phantomtheater.org/" target="_blank">
            Phantom
          </a>
          , which I am now the technical director of more than 15 years later.
        </p>
      </div>
      <div className="text-block">
        <p>
          In college I studied mythology and art. I got really good at research,
          and decently competent at painting, drawing, and sculpting, and then I
          realized that I'd need another 5-10 years of school before I could
          actually do anything with my degrees. So I took a hard pivot, put my
          research skills to good use, and landed an internship at a private
          investigators office. Unfortunately it was an <em>unpaid</em>{" "}
          internship so I had to find something to put food on the table. Thus
          began my foray into restaurant work. It was challenging, stressful,
          and thoroughly unpleasant, but I grew as a person, and learned many
          soft skills, such as how to work as part of a larger team, how to
          batch and prioritize tasks, customer service skills, and how to make a
          really good sandwich. In the middle of my restaurant days I moved out
          to Utah for 1. cheap rent, and 2. great skiing. These were the dark
          days, but lead me to where I am now.
        </p>
        <p>
          In Utah I continued with the restaurant work, but I also picked up a
          job as a ski instructor. I could work a job I didn't hate! This was a
          revelation for me. The days were long, and the work wasn't always
          engaging (you can only ski the bunny slope so many times before it
          gets a little old) but the work felt meaningful, and during breaks I
          could ski wherever I wanted. I was still barely making enough to
          scrape by, but I was happier than I'd been in a good long while. When
          I moved back to Vermont that spring (Utah summers are too hot, I was
          there for one, and couldn't do another) I knew I couldn't go back to
          working in restaurants so I started to look for something that would
          not only feed my body, but also my soul, and this is how I stumbled
          upon the Burlington Code Academy.
        </p>
      </div>
      <div className="text-block">
        <p id="programming-blurb" className="text-block">
          The Burlington Code Academy, aka BCA, is a for-profit coding bootcamp,
          originally based out of Burlington, VT, and is now a subsidiary of
          Upright ED. I was a member of Cohort 1 (the second ever cohort,
          numbers in JS are 0 indexed so cohort 0 was the first). Over the
          9am-5pm, 12 week intensive course I leaned the basics of CSS, HTML,
          and JavaScript, and then some not so basics when we dove into React,
          Express, Server side programming with database integration,
          encryption, and authentication. There was a bit of integration testing
          with Cypress throughout the course, however that was more of an
          afterthought, and often cut for the sake of time. I also learned how
          to work in a team using Agile methodology (mostly XP based) and manage
          a project. For the last 3 weeks of the course we built proof of
          concept projects for real clients in the community.
        </p>
        <p>
          I freelanced for a few months but apparently the folks at BCA liked
          having me around, as I was asked to come back as a TA for the next
          cohort, and then fast tracked into an instructor role. I developed the
          curriculum for, and ran our first part time course, and as the main
          (read: only) instructor for BCAs Web dev bootcamp class I helped our
          director of education build our custom LMS, improved the curriculum by
          creating new content and exercises, expanded the capstone projects to
          4 weeks by consolidating lessons students were picking up quickly
          (mostly the CSS and HTML), and expanded on topics students often
          struggled with.
        </p>
        <p>
          Halfway through the first full course I was teaching (Cohort 3, when I
          say they fast tracked my to instructor, I mean they pretty much just
          threw me right in) Covid hit, and as an in person class we had to
          pivot fast. As a web dev course we were uniquely suited to go remote,
          but even so that weekend was a little hectic as the Director of
          Education and I scrambled to get everything set up. Even while going
          remote we wanted to maintain the in-person feel of our course, and we
          pulled it off so successfully that the company has decided to remain
          remote to this day. On the downside our curriculum was definitely not
          made for an online class, and the pace (as well as the 40hr/week on
          Zoom) was difficult for students. I wrote many supplementary sources,
          and created exercises to help students with concepts that are
          difficult to teach when you're not in the same space, such as
          debugging, and pair programming.
        </p>
        <p>
          I loved my time at BCA, but after 3 years, 8 cohorts, and rewriting
          the entire curriculum a couple of times I was beginning to get a bit
          burnt out. The 50-60hr weeks (with 45 of that being spent teaching a
          class through Zoom) and lack of vacation time certainly didn't help.
          So when the CEO of BCA bought the company out with his new company
          (Upright ED) I decided to go my own way.
        </p>
        <p>
          Within a week of leaving BCA I got a job offer at Impulse Creative as
          their backend developer, and I jumped on it. I've always enjoyed
          backend programming more than front end (even though I'm probably
          better at front end) because, oddly enough, it feels more creative to
          me. Accepting this job turned out to be a mistake. The folks at
          Impulse Creative are great people, but they had a different idea of
          what a backend developer is than I do. They're a Hubspot based design and
          marketing company with a very heavy focus on the marketing aspects,
          and very little knowledge of web development. I learned a whole lot
          about Hubspot, but their idea of "backend programming" was pretty much
          anything JavaScript. It was a good learning experience, but it wasn't
          really what I was looking to be doing, and so due to mismatched
          expectations I decided to leave them after 6 months.
        </p>
      </div>
    </div>
  );
}
