import { Form, Card, Button } from "react-bootstrap";
import {useState, useEffect} from "react"
import GetRegistros from "./GetRegistros";
import GetActos from "./GetActos";



function FormCard() {
  const [idRegistro, setIdRegistro] = useState("-1")

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="datos">
            <Form.Label>Registro</Form.Label>
            <Form.Select id="select1" aria-label="Default select example" onChange= {(event) => setRegistro(event.target.value)}> 
              <GetRegistros />
            </Form.Select>

            <Form.Label>Actos</Form.Label>
            <Form.Select aria-label="Default select example">
              <GetActos idRegistro = {idRegistro} />
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
  function setRegistro(value){
    setIdRegistro(value)
  }
  
};







export default FormCard;


