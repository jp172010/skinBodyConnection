import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SecondaryNav } from "./secondaryNav";
import Button from "react-bootstrap/Button";
import "../css/VirCon.css"


function VirCon() {
  return (
    <Container fluid id="mainDiv">
      <SecondaryNav />
      <Row className="justify-content-center">
        <h1>Virtual Consult</h1>
      </Row>
      <Row className="justify-content-center">
        <Jumbotron>
          A Virtual Consult is a 30min conversation with Jennifer regarding your
          skin health and personal needs.
          <br />
          <br />
          Virtual Consultaions can be conducted through a phone call or
          preferably through a zoom call.
          <br />
          <br />
          Schedule your 30min Virtual Consult now!
        </Jumbotron>
      </Row>
      <Row className="justify-content-center">
          <Button href="/schedule">Schedule VC Now!</Button>
      </Row>
    </Container>
  );
}
export default VirCon;
