import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer () {

  return (
    <Container fluid >    
      <Row>
        <Col className='my-3 d-flex justify-content-center'> 
        <span> 2023@ EpiBooks</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;