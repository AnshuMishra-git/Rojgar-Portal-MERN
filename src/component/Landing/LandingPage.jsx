import React, { useState } from 'react'
import Navigation from './Navigation'
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import "./Landing.css"
import job1 from "../../assets/image/Job1.jpg"
import job2 from "../../assets/image/Job2.webp"
import job3 from "../../assets/image/Job3.jpg"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export default function LandingPage() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Navigation />

            <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect} slide={false} fade={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={job1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Apply Now</h3>
                        <p>Apply For Job in Our Portal </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={job2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Free Service</h3>
                        <p>Free, For Applying Any Positions of Jobs </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={job3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore More...</h3>
                        <p>
                            Get Touch with your recruiter
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-3">
                <Jumbotron>
                    <h1>We Are Here <LocationOnOutlinedIcon /></h1>
                    <p>
                        Sanskriti Homes, C-282, behind Preeti Sharma Hospital, C Block, Pocket C, Sector 19, Noida, Uttar Pradesh 201301
                    </p>
                    <p>
                        <Button variant="primary">Contact Us</Button>
                    </p>
                </Jumbotron>
            </div>
        </>
    )
}
