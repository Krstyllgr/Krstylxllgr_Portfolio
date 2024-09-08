import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import "/styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <main>
      <Navbar className="custom-navbar">
        <Container className="container-one">
          <NavbarBrand>Krstylxllgr</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="navi">
              <Link href="/" className="link-tag">
                Home
              </Link>
              <Link href="/about/about" className="link-tag">
                About
              </Link>
              <Link href="/skills/skills" className="link-tag">
                Skills
              </Link>
              <Link href="/work/work" className="link-tag">
                Work
              </Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Container className="first-container">
        <div className="div-about-img">
          <img className="aboutMe-img" />
        </div>
        <div className="div-explain">
          <h1>About Me</h1>
          <p>
            I am Kristyl Axlee Alegre. I'm a passionate IT professional who
            loves working with technologies. I thrive on building innovative and
            user-friendly solutions, continuously exploring and adapting to new
            advancements in the tech world. In my free time, I enjoy cooking,
            listening to music, reading books, watching anime, taking free
            online courses on Udemy, particularly in subjects like investments,
            web development, cybersecurity and graphic design. Playing the
            guitar is also a passion of mine, offering a pleasant break from
            work and screen time.
          </p>
        </div>
      </Container>
      <Container className="second-container">
        <div className="school">
          <h1>
            Batangas State University - The National Engineering University
          </h1>
          <h4>Bachelor of Science in Information Technology</h4>
          <h5>Major in Network Technology</h5>
        </div>
        <div className="gradPic-container">
          <div className="gradPic-img"></div>
        </div>
      </Container>
      <Container className="third-container">
        <div className="achievements-container">
          <h1 className="text-light">Certificates</h1>
          <div className="div-one">
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Civil Service Eligible - Professional Level
            </h4>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Best Capstone Project in Network Technology Major
            </h4>
            <p className="text-light">
              Batangas State University - The National Engineering University
            </p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Best Innovative Product
            </h4>
            <p className="text-light">
              Batangas State University - The National Engineering University
            </p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Dean's Lister
            </h4>
            <p className="text-light">
              Batangas State University - The National Engineering University
            </p>
          </div>
          <div className="div-two">
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Principles of Graphic Design
            </h4>
            <p className="text-light">
              University of the Philippines Open University<br></br>Massive Open
              Distance eLearning
            </p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Business Analytics Concepts and Frameworks
            </h4>
            <p className="text-light">
              University of the Philippines Open University<br></br>Massive Open
              Distance eLearning
            </p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Introduction to Technology for Teaching and Learning
            </h4>
            <p className="text-light">
              University of the Philippines Open University<br></br>Massive Open
              Distance eLearning
            </p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Gender Sensitivity Training
            </h4>
            <p className="text-light">
              University of the Philippines Open University<br></br>Massive Open
              Distance eLearning
            </p>
          </div>
          <div className="div-three">
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              AWS Academy Graduate - AWS Academy Cloud Architecting
            </h4>
            <p className="text-light">AWS Academy</p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              AWS Academy Graduate - AWS Academy Cloud Foundations
            </h4>
            <p className="text-light">AWS Academy</p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              CCNAv7: Enterprise Networking, Security, and Automation
            </h4>
            <p className="text-light">Cisco Networking Academy</p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Cybersecurity Essentials
            </h4>
            <p className="text-light">Cisco Networking Academy</p>
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="justify-content-center align-items-center me-3"
              ></FontAwesomeIcon>
              Responsive Web Design
            </h4>
            <p className="text-light">freeCodeCamp</p>
          </div>
          <div className="div-four"></div>
        </div>
      </Container>
    </main>
  );
}
