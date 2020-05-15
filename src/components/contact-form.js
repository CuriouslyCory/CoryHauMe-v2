import React from 'react';
import {Button, Container, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

function ContactForm() {

    return(
        <Container className="contact-form">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Your Name</InputGroup.Text>
                </InputGroup.Prepend> 
                <FormControl 
                    placeholder="Name"
                    aria-label="Your Name"
                    aria-describedby="your-name"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Your Email</InputGroup.Text>
                </InputGroup.Prepend> 
                <FormControl 
                    placeholder="Email"
                    aria-label="Your Email"
                    aria-describedby="your-email"
                />
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="Message" />
            </InputGroup>
            <Container >
                <Col>
                    <Row className="justify-content-end">
                        <Button className="mt-3" variant="primary">Send</Button>
                    </Row>
                </Col>
            </Container>
        </Container>
    )
}

export default ContactForm;