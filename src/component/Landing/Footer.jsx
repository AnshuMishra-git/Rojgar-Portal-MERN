import React, { Fragment } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBBtn } from "mdbreact";

export default function Footer() {
    return (
        <>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="5">
                            <h5 className="title">Address</h5>
                            <p>
                                Rojpar Portal <br>
                                </br>
                                Sector 19 Noida, India
            </p>
                            <MDBCol md="4" style={{ margin: "-11px 0px 0px -23px" }}>
                                <MDBBtn tag="a" floating={"false"} color="info" className="accent-1">
                                    <MDBIcon icon="envelope" />
                                </MDBBtn>
                                <p className="mb-md-0">anshu@gmail.com</p>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol md="5">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Home</a>
                                </li>

                                <li className="list-unstyled">
                                    <a href="#!">Login</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Sign Up</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Conact Us</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">About Us</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="2">
                            <h5 className="title">Social Links</h5>
                            <ul className="list-inline text-center list-unstyled">
                                <li className="list-inline-item">
                                    <a href="#!" className="p-2 fa-lg w-ic">
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="p-2 fa-lg w-ic">
                                        <MDBIcon fab icon="linkedin-in" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="p-2 fa-lg w-ic">
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()}: Copyright &#38; All Right Reserved By : <a target="_blank" href="https://www.linkedin.com/in/anshu-mishra-54a983179/">Anshu Mishra  </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </>
    )
}
