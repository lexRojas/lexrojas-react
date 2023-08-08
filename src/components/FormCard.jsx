import { Form, Card, Button } from "react-bootstrap";
import GetRegistros from "./GetRegistros";
import GetActos from "./GetActos";

function FormCard() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="datos">
            <Form.Label>Registro</Form.Label>
            <Form.Select aria-label="Default select example">
              <GetRegistros />
            </Form.Select>

            <Form.Label>Actos</Form.Label>
            <Form.Select aria-label="Default select example">
              <GetActos idActo = "4" />
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Monto</Form.Label>
            <Form.Control type="number" placeholder="Digite el Monto" />
            <hr></hr>
            <div className="d-grid gap-2">
              <Button variant="info" size="lg">
                Calcular
              </Button>{" "}
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormCard;
