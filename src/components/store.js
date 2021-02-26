import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SecondaryNav } from "./secondaryNav";

function Store() {
    return(
        <Container fluid>
            <SecondaryNav />
            <Row className="justify-content-center">
                <h1>
                    Store
                </h1>
            </Row>
        </Container>
    )
}
export default Store;