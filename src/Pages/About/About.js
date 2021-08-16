import React, { Component } from 'react';
import {Tab , Col, Container, Nav, Row } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
           <Container>
               <Tab.Container id="left-tabs-example" defaultActiveKey ="first">
                    <Row>
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column mt-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Proggraming </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fouth">Frameworks </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm ={8}>
                            <Tab.Content className ="mt-3">
                                <Tab.Pane eventKey ="first">
                                    <img src ="https://www.cnet.com/a/img/KhWoFnIS6NiHxgQL9ZmTkRNhpy8=/940x0/2019/10/21/0b8fbcc3-50fd-4561-8135-f9e6a1e2ed9d/figma-editor.jpg"></img>
                                    <p>Lorem10</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="second">
                                    <img src ="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"></img>
                                    <p>Lorem10</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="third">
                                    <img width="800" src ="https://s3-alpha.figma.com/hub/file/314494079/976a59d3-cf17-4dcc-a3d8-6651da344ee4-cover"></img>
                                    <p>Lorem10</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="fouth">
                                    <img width="800" src ="https://s3-alpha.figma.com/hub/file/560780545/1a8b36f1-6e12-4f2b-9571-3e63ddb9888f-cover.png"></img>
                                    <p>Lorem10</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="fifth">
                                    <img width="800" src ="https://www.uidownload.com/files/367/668/983/lopper-free-figma-templatediscover-the-world%E2%80%99s-top-designers-creatives.png"></img>
                                    <p>Lorem10</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        );
    }
}

export default About;