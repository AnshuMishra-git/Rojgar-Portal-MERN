import React from 'react'
import Navigation from './Navigation'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
import { MDBIcon } from "mdbreact";
import Footer from './Footer';

export default function Contact() {
    return (
        <>
            <Navigation />
            <section className="my-2">
                <h2 className="h1-responsive font-weight-bold text-center my-2">
                    Contact us
      </h2>
                <p className="text-center w-responsive mx-auto pb-2">
                    Rojgar Portal - Online Solution for FullTime/PartTime Job
      </p>
                <ul className="list-inline text-center list-unstyled m-3">
                    <li className="list-inline-item">
                        <a target="_blank" href="https://twitter.com/anshumi18320914" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="twitter" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank" href="https://www.linkedin.com/in/anshu-mishra-54a983179/" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="linkedin-in" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank" href="https://instagram.com/it_communityyt?igshid=192rc8m6ru4at" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="instagram" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank"
                            href="https://www.youtube.com/channel/UCf3DgSd8bHYm1AKk0KqGvuw" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="youtube" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank"
                            href="https://www.facebook.com/itcommunityyt" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="facebook" />
                        </a>
                    </li>

                </ul>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header blue accent-1">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope" /> Ask to Me:
                </h3>
                                </div>
                                <p className="dark-grey-text">
                                    I Can asure you, Here you will get best services.
              </p>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Your name"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Your email"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Subject"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Query"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="light-blue">Submit</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Noida%20+(Anshu%20Mishra%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                            />
                        </div>
                        <br />
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating={"true"} color="blue" className="accent-1">
                                    <MDBIcon icon="map-marker-alt" />
                                </MDBBtn>
                                <p>Noida, 201301</p>
                                <p className="mb-md-0">Uttar Pradesh</p>
                                <p className="mb-md-1">INDIA</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating={"true"} color="blue" className="accent-1">
                                    <MDBIcon icon="phone" />
                                </MDBBtn>
                                <p>+ 91 8839 3490 33</p>
                                <p className="mb-md-0">Mon - Fri, 10:00-20:00</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating={"true"} color="blue" className="accent-1">
                                    <MDBIcon icon="envelope" />
                                </MDBBtn>
                                <p className="mb-md-0">2202.anshu@gmail.com</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>
            <Footer />
        </>
    )
}
