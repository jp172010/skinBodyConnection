import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SecondaryNav } from "./secondaryNav";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../css/Gallery.css";

function VideoGallery() {
  return (
    <Container fluid >
      <SecondaryNav />
      <Container id="galleryContent">
        <Container id="content">
          <Jumbotron id="galleryJumbo">
            <Row className="justify-content-md-center">
              <h1>Videos</h1>
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie1.MP4"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie2.MP4"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie3.MP4"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie4.MOV"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie5.MP4"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie6.MP4"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
            <Row className="video">
              <ReactPlayer
                url="images/movie7.MP4"
                height="60vh"
                controls={true}
                volume="0"
                muted={true}
              />
            </Row>
          </Jumbotron>
        </Container>
      </Container>
    </Container>
  );
}

export default VideoGallery;
