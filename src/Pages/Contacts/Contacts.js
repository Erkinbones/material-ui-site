import React, { Component } from 'react';
import { Form, Container,Button } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <div>
               <Container style={{width:'500px'}}>
                   <h1 className="text-center">Contact us</h1>
                   <Form.Group controlId="formBasicEmail">
                       <Form.Label>
                            Email Adress
                       </Form.Label>
                       <Form.Control type="email" placeholder ="Enter email"></Form.Control>
                       <Form.Text> We'll never share your email with anyone else</Form.Text>
                   </Form.Group>

                   <Form.Group controlId="formBasicPassword">
                       <Form.Label>Example textarea</Form.Label>
                       <Form.Control as="textarea" rows="3"></Form.Control>
                   </Form.Group>

                   <Form.Group controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out"></Form.Check>
                   </Form.Group>
                   <Button variant="primary" type="submit">Submit</Button>
               </Container>
            </div>
        );
    }
}

export default Contacts;