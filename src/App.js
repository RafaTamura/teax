import './App.css';
import { Col, Container, Row } from 'reactstrap';

function Nome(nome) {
  nome = prompt("Digite o seu nome");
}

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <div className='cabeca'>
          </div>
        <Container fluid>
          <Row>
            <Col xs="2" className="esqlateral">
            <div className='perfil'>
            </div>
            <div>
              Hey, {Nome}
            </div>
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
