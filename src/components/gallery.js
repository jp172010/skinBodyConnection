import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SecondaryNav } from "./secondaryNav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../css/Gallery.css";

function Gallery() {
  return (
    <Container fluid id="galleryContainer">
      <SecondaryNav />
      <Container id="galleryContent">
        <Container id="content">
          <Jumbotron id="galleryJumbo">
            <Row className="justify-content-center">
              <h1>Gallery</h1>
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto">
                <a href="./pictureGallery">
                  <Image
                    src="images/pic2.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <h3>Before/After Pictures</h3>
              </Col>
              <Col xs={2} />
              <Col xs="auto">
                <a href="./videoGallery">
                  <Image
                    src="images/pic1.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <h3>In Session Videos</h3>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </Container>
    </Container>
  );
}

export default Gallery;
