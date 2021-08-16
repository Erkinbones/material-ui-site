import React, { Component } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Photo1 from '../src/Assets/Photo/p1.jpg'
import Photo2 from './Assets/Photo/p2.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <CarouselItem>
                        <img
                            className="d-block w-100"
                            src = {Photo1 }
                            alt="picture"
                        ></img>
                        <Carousel.Caption>
                            <h3>Water Image</h3>
                            <p>lorem ipsum</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img
                            className="d-block w-100"
                            src = {Photo2 }
                            alt="picture"
                        ></img>
                        <Carousel.Caption>
                            <h3>Water Image</h3>
                            <p>lorem ipsum</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </div>
        );
    }
}

export default CarouselBox;