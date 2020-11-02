import './App.css';
import MyStepper from './MyStepper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <MyStepper/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
