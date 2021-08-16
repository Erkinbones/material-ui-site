import React, { Component } from 'react';
import { Card, Container,Button,CardDeck, Row} from 'react-bootstrap';
import CarouselBox from '../../CarouselBox';

class Home extends Component {
    render() {
        return (
            <div>
               <CarouselBox/>
               <Container>
                  <h2 className ="text-center m-4">Our team</h2>  
                <Row className="justify-content-md-center">
                    <Card style={{ width: '18rem' }} bg ="warning">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} bg ="dark">
                    <Card.Img variant="bottom" src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>  

                    <Card style={{ width: '18rem' }} bg ="success">
                    <Card.Img height ="174px" variant="top" src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>  

                    <Card style={{ width: '18rem' }} bg ="secondary">
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                </Row> 
               </Container>
            </div>
        );
    }
}

export default Home;