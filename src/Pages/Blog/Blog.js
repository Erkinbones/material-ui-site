import React, { Component } from "react";
import { Container, Row, Col, ListGroup,Card } from "react-bootstrap";

class Blog extends Component {
  render() {
    return (
      <Container>
        <Row >
          <Col md={9} className="d-flex">
            <div>
              <img
                height="150"
                width="150"
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              ></img>
            </div>
            <div className ="mt-5 ">
              <h5>Blog post!</h5>
              <p> lorem10</p>
            </div>
          </Col>

          <Col md={3}>
              <h5 className="text-center mb">Categories</h5>
              <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>HTML/CSS</ListGroup.Item>
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                    <ListGroup.Item>Python</ListGroup.Item>
                    <ListGroup.Item>C++</ListGroup.Item>
                  </ListGroup>
              </Card>
          </Col>
          
          <Col md={9} className="d-flex mt-5">
            <div>
              <img
                height="150"
                width="150"
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              ></img>
            </div>
            <div className ="mt-5">
              <h5>Blog post!</h5>
              <p> lorem10</p>
            </div>
          </Col>

          <Col md={9} className="d-flex mt-5 ">
            <div>
              <img
                height="150"
                width="150"
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              ></img>
            </div>
            <div className ="mt-5">
              <h5>Blog post!</h5>
              <p> lorem10</p>
            </div>
          </Col>

          <Col md={3}>
          <Card bg="light">
            <Card.Body>
                <Card.Title className="text-center" >Side Widget</Card.Title>
                <Card.Text>
                    jfkjkvjkfmvkfvjaklfjaunciuauifiufimajxfja;l,Jclkjmxfjjd,gfjkhgjkfhsgjksjgshkjvnnfvndfvkn
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>    
          
        </Row>
      </Container>
    );
  }
}

export default Blog;
