import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cf from "../../Assets/Projects/cf.png";
import pv from "../../Assets/Projects/pv.png"
import sell from "../../Assets/Projects/sell.png";
import gb from '../../Assets/Projects/gb.jpeg'
import blog from "../../Assets/Projects/blog.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import ttt from "../../Assets/Projects/ttt.jpg";
import di from "../../Assets/Projects/di.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={di}
              isBlog={false}
              title="Dandelions"
              description="Developed a website where you can download icons to customise your desktop icons in HD Quality in different colors."
              ghLink="https://github.com/Sagar20-12/Dandelions"
              demoLink="https://dandelionsicons.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cf}
              isBlog={false}
              title="CodeForces statistics"
              description="Community driven, highly customizable, no-code tool to stress test Codeforces user profiles. Capable of generating the comparison between user profiles and their ratings , with 100% accuracy. Techstack consisted of HTML, Tailwind CSS, JavaScript, React.js, MongoDB."
              ghLink="https://github.com/Sagar20-12/CodeForces-Visualiser"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pv}
              isBlog={false}
              title="Path Visualiser"
              description="Developed a high-performing coding website, enabling users to find the path from source to destination using different searching algorithms. Leveraged A* Algorithm and Dijsktra Algorithm for finding the optimal path. Frontend is built in ReactJS and Material UI, Backend in Node.js, Express.js and DataBase is MongoDB."
              ghLink="https://github.com/Sagar20-12/Path-Visualizer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gb}
              isBlog={false}
              title="Git-Fit"
              description="A platform where u can store your code snippets anywhere on the go! Frontend is built using React, TailWind CSS and Bootstrap and Backend using Nodejs, and passport.js including JWT Authentication."
              ghLink="https://github.com/Sagar20-12/Git-Fit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sell}
              isBlog={false}
              title="vOLX"
              description="Developed a secured well-versed platform to buy and sell used items with NodeJS, Express and MongoDB. Used EJS template engine to generate HTML markup with plain JavaScript and passportjs for authentication. Implemented CRUD operations on database using the Mongoose and used SendGrid API to send mails."
              ghLink="https://github.com/Sagar20-12/VIT-OLX"
              // demoLink="https://the-book-station.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="Built Blog website with secure authenticated admin pannel where admin can perform CRUD operation. Used Passport.js, Express-session for authentication and bcrypt library to hash and salt passwords securely. Backend is built in Node.js, Express.js, DataBase is MongoDB and Frontend using HTML, CSS and JavaScript."
              ghLink="https://github.com/shivam-bhadani/Blog-Website"
              // demoLink="https://shivamblogwebsite.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Realtime Chatbot"
              description="Developed Realtime Chatbot that performs client queries and integrated Socket-io in chat server. Performed authentication for admin using passport.js, express-session and bcrypt enabling the authoritative privileges to perform CRUD operations on selective segments. It was a freelancing project and I procured positive feedback from Client and also received 5 stars contingent to on-time delivery of the product."
              ghLink="https://github.com/shivam-bhadani/Chatbot"
              // demoLink="https://shivamchatbotwebsite.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Developed a Tic Tac Toe Game while I was Learning HTML, CSS, JavaScript."
              ghLink="https://github.com/Sagar20-12/TIC-TAC-TOE"
              // demoLink = "https://sagar20-12.github.io/TIC-TAC-TOE/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
