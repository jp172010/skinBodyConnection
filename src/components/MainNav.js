import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 

export function MainNav() {
  let scrollToTop = () => {
    scroller.scrollTo('topElement', {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }
  let scrollToAbout = () => {
    scroller.scrollTo('aboutElement', {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }
  let scrollToServices = () => {
    scroller.scrollTo('servicesElement', {
      duration: 1500,
      delay: 100,
      smooth: true,
       
    })
  }
  let scrollToVC = () => {
    scroller.scrollTo('VCElement', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50, 
    })
  }

return(
    <Navbar collapseOnSelect bg="light" expand="lg" sticky="top" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 nav-justified">
            <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
            <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
            <Nav.Link onClick={scrollToServices}>Services</Nav.Link>
            <Nav.Link onClick={scrollToVC}>Virtual Consult</Nav.Link>
            <Nav.Link href="#home">Schedule</Nav.Link>
            <Nav.Link href="#home">Store</Nav.Link>
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
)
}