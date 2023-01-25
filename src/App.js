import './App.css';
import { Col, Container, Row } from 'reactstrap';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className='cabeca'>
          head
        </div>
        <Container fluid>
          <Row>
            <Col xs="2" className="esqlateral">
            primeira parte
            </Col>
            <Col xs="8" className='conteudo'>
              conteudo
            </Col>
            <Col xs="2" className='dirlateral'>
              lembretes 
            </Col>
            </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
