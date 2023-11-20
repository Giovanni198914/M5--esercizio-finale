import { Col, Row } from 'react-bootstrap'

const NotFound = () => (
  <Row className="justify-content-center my-4">
    <Col xs={12} md={6}>
      <div className="text-center text-danger">
        <h1>Errore 404! Pagina non trovata!</h1>
      </div>
    </Col>
  </Row>
)

export default NotFound
