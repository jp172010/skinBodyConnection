import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { scroller } from "react-scroll";
import "../css/MainNav.css"

export function MainNav() {
  let scrollToTop = () => {
    scroller.scrollTo("topElement", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  let scrollToAbout = () => {
    scroller.scrollTo("aboutElement", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  let scrollToServices = () => {
    scroller.scrollTo("servicesElement", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  let scrollToVC = () => {
    scroller.scrollTo("VCElement", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" id="mainNav">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 nav-justified">
          <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
          <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
          <Nav.Link onClick={scrollToServices}>Services</Nav.Link>
          <Nav.Link onClick={scrollToVC}>Virtual Consult</Nav.Link>
          <Nav.Link href="/schedule">Schedule</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
