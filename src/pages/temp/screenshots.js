import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Screenshots() {
  return (
    <Container lg>
      <h1 className="m-4 text-center">Another Page</h1>
      <Row>
        <Col xs={4} className="m-0 p-0">
          <div className="rounded p-2 m-2 bg-middle">
            <h3>An Example of</h3>
            <ul>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
            </ul>
          </div>
        </Col>
        <Col xs={8} className="m-0 p-0">
          <div className="rounded p-2 m-2 bg-middle">
            <h3>Some Multicolumn Displays</h3>
            <ul>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
              <li>for styling preview purposes</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="m-0 p-0">
          <div className="rounded p-2 m-2 bg-middle d-flex flex-column align-items-center">
            <h3>With Content Boxes</h3>
            <div className="rounded p-2 bg-top w-50 d-flex flex-column align-items-center">
              <h4>And Top Level Displays</h4>
              <img src="./images/sample.jpg" style={{height: '12em'}} />
              <small>here is an image</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
