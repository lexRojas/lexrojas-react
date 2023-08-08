import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Tabla() {
  return (
    <Card>
      <Card.Body>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Tarifa</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Tabla;
