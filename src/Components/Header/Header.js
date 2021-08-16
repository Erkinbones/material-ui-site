import React from 'react';
import { Navbar, NavbarBrand,Container,Nav, Form, FormControl,Button } from 'react-bootstrap';
import logo from './logo192.png'
import './Header.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Blog from '../../Pages/Blog/Blog';
import About from '../../Pages/About/About';
import Contacts from '../../Pages/Contacts/Contacts';


const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <NavbarBrand href ="/">
                    <img
                     src={logo}
                     height="30"
                     width ="30"
                     className ="d-inline-block align-top"
                     alt="Logo"
                    > 
                    </img>
                </NavbarBrand>
                <Navbar.Toggle aria-controls ="responsive-navbar-nav"/>
                <Navbar.Collapse id ="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Form className="form">
                        <FormControl
                        type="text"
                        placeholder="search"
                        className ="mr=sm-2"
                        >
                        </FormControl>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Router>
            <Switch>
                <Route exact path="/" component ={Home}/>
                <Route exact path="/about" component ={About}/>
                <Route exact path="/contacts" component ={Contacts}/>
                <Route exact path="/blog" component ={Blog}/>
            </Switch>
        </Router>
        </>
    );
};

export default Header;