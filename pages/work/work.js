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

export default function Work() {
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
    </main>
  );
}
