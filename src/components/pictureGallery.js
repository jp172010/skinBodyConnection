import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SecondaryNav } from "./secondaryNav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../css/Gallery.css";

function PictureGallery() {
  return (
    <Container fluid>
      <SecondaryNav />
      <Container id="galleryContent">
        <Container id="content">
          <Jumbotron id="galleryJumbo">
            <Row className="justify-content-center">
                <h1>Before/After Pictures</h1>
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto">
                <a href="images/pic2.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic2.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <a href="images/pic5.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic5.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <a href="images/pic3.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic3.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <a href="images/pic4.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic4.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <a href="images/pic1.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic1.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <a href="images/pic6.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic6.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
                <a href="images/pic7.jpg">
                  <Image
                    className="galleryImage"
                    src="images/pic7.jpg"
                    rounded
                    height="200vh"
                    width="300vw"
                  />
                </a>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </Container>
    </Container>
  );
}

export default PictureGallery;
