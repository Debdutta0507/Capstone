import React from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
export default function About() {
    return (
        <>
            <div className='container-fluid'>
                <Carousel interval={4000} keyboard={false} pause={'hover'}>
                    <Carousel.Item style={{ 'height': "100%" }}  >
                        <img style={{ 'height': "557px" }}
                            className="d-block w-100"
                            src={'assets/img/about1.jpg'} alt="..." />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "100%" }}>
                        <img style={{ 'height': "557px" }}
                            className="d-block w-100"
                            src={'assets/img/about2.jpg'} alt="..." />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "100%" }}>
                        <img style={{ 'height': "557px" }}
                            className="d-block w-100"
                            src={'assets/img/about3.jpg'} alt="..." />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="contact-left">
                                <h3>Product Inventory Application</h3>
                                <p>We Believe in <strong>Simple</strong>,<strong>Clean</strong> and <strong>Modern</strong> Design standards with responsive approach.Browse the amazing work of our company</p>
                                <div id="contact-info">
                                    <address>
                                        <strong>Headquaters:</strong>
                                        <p>Railpar K.T Road Jahangiri Mohalla Asansol-2 West-Bengal India</p>

                                    </address>
                                    <div id="phone-fax-email">
                                        <p><strong>Phone:</strong><span>+91-7908310264</span><br />
                                            <strong>Fax:</strong><span>+91-7908310264</span><br />
                                            <strong>E-mail:</strong><span>mansoor.ali4@wipro.com</span>
                                        </p>
                                    </div>

                                </div>
                                <ul className="social-list">

                                    <li key={123}><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-twitter"></i></li>
                                    <li><i className="fa fa-google-plus"></i></li>
                                    <li><i className="fa fa-youtube-play"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="contact-right">
                                <h3>Contact-Us</h3>
                                <form>
                                    <input type="text" name="full name" placeholder="full name" className="form-control" />
                                    <input type="text" name="email" placeholder="Email Address" className="form-control" />
                                    <textarea rows="5" name="message" placeholder="Message..." className="form-control"></textarea>
                                    <div id="send-btn">
                                        <button className="btn btn-lg btn-general btn-primary" disabled={true}>SEND</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div><br/><br/><br/>
        </>
    )
}