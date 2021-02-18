import React, { useState } from 'react'
import Navigation from './Navigation'
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import "./Landing.css"
import job1 from "../../assets/image/Job1.jpg"
import job2 from "../../assets/image/Job2.webp"
import job3 from "../../assets/image/Job3.jpg"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { useGoogleMaps } from "react-hook-google-maps";
import Footer from './Footer';
export default function LandingPage() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const mapStyles = {
        width: '100%',
        height: '100%',
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
                    <h4>
                        Sector 19, Noida, Uttar Pradesh 201301
                    </h4>
                    <p>
                        <Button variant="primary">Contact Us</Button>
                    </p>
                </Jumbotron>
                {/* <div style="width: 100%"> */}
                <iframe
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Noida%20+(Anshu%20Mishra%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://www.mapsdirections.info/en/measure-map-radius/">
                    Map radius measure</a></div>

            {/* </div> */}
            {/* <iframe
                width="100%"
                height="600"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=21064%20RED%20FIR%20COURT%2C%20CUPERTINO%20-%2095014+(Online%20Virtual%20tax)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
            >
                <a href="https://www.maps.ie/coordinates.html">find my coordinates</a>
            </iframe> */}
            <Footer />
        </>
    )
}
