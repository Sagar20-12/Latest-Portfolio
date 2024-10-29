import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sagar Singh Raghav </span>
            from <span className="purple"> Haryana, India.</span>
            <br />I am a 4th year undergraduate at VIT-AP.
            <br />
            <br />
            Some of my competitive programming achievements are:
          </p>
          <ul>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 1394* (Pupil) on <a className="purple" style={{ "textDecoration": "none" }} href="https://codeforces.com/profile/SAGAR_2012" target={"_blank"}>Codeforces</a>
            </li>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 1750* on <a className="purple" style={{ "textDecoration": "none" }} href="https://leetcode.com/Binary_Blaze/" target={"_blank"}>LeetCode</a>
            </li>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 1755* and 3* Star on <a className="purple" style={{ "textDecoration": "none" }} href="https://www.codechef.com/users/binary_blaze" target={"_blank"}>Codechef</a>
            </li>
            <li className="about-activity">
              <FaStar /> Ranked 2nd Position in CodeBid coding competition among 150+ students. <a className="purple" style={{ "textDecoration": "none" }} href="" target={"_blank"}>Codebid 2.0</a>
            </li>
            <li className="about-activity">
              <FaStar /> Ranked AIR 119 in Coderush by <a className="purple" style={{ "textDecoration": "none" }} href="" target={"_blank"}> Newton School.</a>
            </li>
            <li className="about-activity">
              <FaStar /> Ranked 3rd in College CodeKaze by <a className="purple" style={{ "textDecoration": "none" }} href="" target={"_blank"}> Coding Ninjas </a>
            </li>
            <li className="about-activity">
              <FaStar /> Ranked AIR 282 Founder Invitation Challenge by <a className="purple" style={{ "textDecoration": "none" }} href="" target={"_blank"}> Coding Ninja.</a>
            </li>
            
          </ul>
        </blockquote>
        <br/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Coming to my work Experience, I have <span className="purple"> Interned </span>
            at
          </p>
          <ul>
            <li className="about-activity">
              <FaStar /> Indian Space Research Organisation <a className="purple" style={{ "textDecoration": "none" }} href="" target={"_blank"}>ISRO</a>
            </li>
            <li className="about-activity">
              <FaStar /> Simpplr as <a className="purple" style={{ "textDecoration": "none" }} href="" target={"_blank"}> Full Stack Developer Intern</a>
            </li>
            
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
