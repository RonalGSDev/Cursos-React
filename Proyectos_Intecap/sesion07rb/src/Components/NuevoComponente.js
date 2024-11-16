import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const NuevoComponente =() =>{

    return(
        <Container className="mt-5">
            <h1 className="text-center mb-4">Componente con React-Bootstrap</h1>

            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 1</Card.Title>
                            <Card.Text>Este es ujn ejemplo de la tarjeta usando React Bootstrap</Card.Text>
                            <Button className="btn btn-primary float-end">Leer más</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 2</Card.Title>
                            <Card.Text>Este es ujn ejemplo de la tarjeta usando React Bootstrap</Card.Text>
                            <Button className="btn btn-primary float-end">Leer más</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 3</Card.Title>
                            <Card.Text>Este es ujn ejemplo de la tarjeta usando React Bootstrap</Card.Text>
                            <Button className="btn btn-primary float-end">Leer más</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tarjeta 4</Card.Title>
                            <Card.Text>Este es ujn ejemplo de la tarjeta usando React Bootstrap</Card.Text>
                            <Button className="btn btn-primary float-end">Leer más</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );

}

export default NuevoComponente;