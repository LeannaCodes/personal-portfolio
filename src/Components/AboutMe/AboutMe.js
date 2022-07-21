import { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h2 className="about-title">ABOUT ME</h2>
        <p className="about">
          A <strong>Full Stack Software Developer</strong> with a passion for{" "}
          <strong>web design</strong>
          and producing solid, unique and creative user experiences and
          solutions, looking for a new opportunity in Web Development.
        </p>

        <p className="about">
          A bright, bubbly and personable presence with a{" "}
          <strong>knack for working in a team</strong> and a real people person
          with a focus on compassion, humility and understanding.
        </p>

        <p className="about">
          {" "}
          A massive advocate for education and growth mindset. A self-proclaimed
          philomath with a <strong>love of learning</strong>
          new things and adding different skills to my toolbox on a daily basis.
        </p>
      </div>
    );
  }
}

export default AboutMe;
