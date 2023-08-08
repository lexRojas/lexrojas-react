import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "./Menu";
import FormCard from "./FormCard";
import Tabla from "./Tabla";


function Marco() {
  return (
    <Container>
      <Menu />
      <Row className="mt-2">
        <Col >
          <FormCard />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col >
          <Tabla/>
        </Col>
      </Row>
    </Container>
  );
}

export default Marco;
