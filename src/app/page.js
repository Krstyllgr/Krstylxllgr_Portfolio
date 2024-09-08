import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import "/styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
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
      <Container className="container-main">
        <div className="div-image">
          <img
            className="me-img"
            src="https://media.giphy.com/media/HHJdQcn8NMLsFWQQmP/giphy.gif"
            alt="GIF"
          />
        </div>
        <div className="div-name">
          <p>Information Technology</p>
          <h1>Hello, I'm</h1>
          <h1 className="typewriter">Kristyl Axlee Alegre</h1>
          <p>Cybersecurity Specialist</p>
          <p>Virtual Assistant</p>
          <p>Graphic Designer</p>

          <div className="socials">
            <Link
              href="https://www.facebook.com/kristylalegre"
              className="icon-link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kristyl-axlee-alegre-9722a8285/"
              className="icon-link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </Link>
            <Link
              href="https://github.com/Krstyllgr"
              className="icon-link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
