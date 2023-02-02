import { useState } from "react";

export default function Home(props) {
  const [topBubble, setTop] = useState("no-anim");
  const [midBubble, setMid] = useState("no-anim");
  const [bottomBubble, setBottom] = useState("no-anim");

  return (
    <div className="center-wrapper">
      <div id="intro-layout">
        <div
          className="intro-block"
          onMouseEnter={(evt) => {
            setTop("anim-in");
          }}
          onMouseLeave={(evt) => {
            setTop("anim-out no-anim");
          }}
        >
          <h2>Who Am I?</h2>
          <p className={topBubble}>
            I am Robert Russell Stauss, but please call me Bob. I'm a full stack
            web developer, artist, jack of all trades, and lover of life. Born
            and raised on a small farm in Vermont I still call this state my
            home. My career history is a bit eclectic, with stints as a lighting
            tech, jewelry maker, private investigator, and a fair amount of
            restaurant work. I now build websites as my main profession.
          </p>
        </div>

        <div
          className="intro-block right"
          onMouseEnter={(evt) => {
            setMid("anim-in");
          }}
          onMouseLeave={(evt) => {
            setMid("anim-out no-anim");
          }}
        >
          <h2>What Am I Doing Here?</h2>
          <p className={midBubble}>
            This is my little corner of the internet where I can showcase some
            of my work, play around with new design concepts, and technologies,
            and generally mess around with things without the pressure of
            building for someone else. Since I lack the ability to leave well
            enough alone you might find these pages changing from one visit to
            the next as I'm constantly messing around in here trying to{" "}
            <em>improve</em> things. If you notice a section of this site is
            down it's probably because my improvements broke it, and it should
            be back up within a day or two. That's why we test them here!
          </p>
        </div>

        <div
          className="intro-block"
          onMouseEnter={(evt) => {
            setBottom("anim-in");
          }}
          onMouseLeave={(evt) => {
            setBottom("anim-out no-anim");
          }}
        >
          <h2>
            What is the Answer to the Ultimate Question of Life the Universe,
            and Everything?
          </h2>
          <p className={bottomBubble}>42</p>
        </div>
      </div>
    </div>
  );
}
