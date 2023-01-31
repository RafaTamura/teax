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
            <div className='nome'>
              Hey, {Nome}
            </div>
            <div className='bar'>
            </div>
            <div className='barralateral'>
              
              <a href='App.js'> Perfil</a>
              <a href='App.js'> Rotina</a>
              <a href='App.js'> Atividades</a>
              <a href='App.js'> Amigos</a>
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
