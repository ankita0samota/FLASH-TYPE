import React from "react";
import "./Landing.css";
import flash from "./../../assests/hero.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        {/* <h1 className="landing-header">Can You type...</h1> */}
        <h1 className="landing-header">Can You Beat the Clock?</h1>
        <div className="typewrite-container">
          <Typewriter
            options={{
              // strings: ["Fast?", "Correct","Quick"],
              strings: [
                "Faster Than Light?",
                "Like a Ninja?",
                "While Having Fun?",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div data-aos="fade-left" class="landing-right">
        <img src={flash} alt="Flash" className="flash-image" srcset="" />
      </div>
    </div>
  );
};

export default Landing;
