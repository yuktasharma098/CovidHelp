import React from 'react'
import { NavLink } from "react-router-dom"
function Contact() {
    return (
        <div>

            <div className="container mt-5 text-dark bg-light">
                <h1 className=" mb-5 border-bottom font-weight-bold contactus text-center ">CONTACT US</h1>
                <div className="row text-dark mb-5">
                    <p className="mx-auto mb-5">Do you have any questions? Please do not hesitate to contact.I will come back to you within a matter of hours to help you.</p>
                    <div className="col-sm-9 mb-5">
                        <form action="">
                            <div className="form-group col-md-6">
                                <label className="inputName">Your Name</label>
                                <input type="text" name="" className="form-control" id="inputName" />

                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputEmail">Your Email</label>
                                <input type="text" name="" className="form-control" id="inputEmail" />

                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputSubject">Your Subject</label>
                                <input type="text" name="" className="form-control" id="inputName" />

                            </div>
                            <div className="mb-3">
                                <label for="inputTextArea"> Your Message</label>
                                <textarea className="form-control" id="inputTextarea" required></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">Send</button>

                        </form>
                    </div>
                    <div className="col-sm-3 text-center">
                        <ul className="list-unstyled">
                            <li className="contactlist">
                                <i className="fas fa-map-marker-alt fa-3x i-colo"></i>
                                <p>New Delhi,India</p>
                            </li>
                            <li className="contactlist">
                                <i className="fas fa-phone mt-4 fa-3x i-colo"></i>
                                <p>+91 7229948751</p>
                            </li>
                            <li className="contactlist">
                                <i className="fas fa-envelope mt-4 fa-3x i-c
                                olo"></i>
                                <p>shivankpandey23@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-1">
                    <NavLink to="/" target="black"><i className="fab fa-twitter fa-2x i-colo mr-3"></i></NavLink>
                    <NavLink to="/" target="black"><i className="fab fa-facebook-f fa-2x  i-colo mr-3 "></i></NavLink>
                    <NavLink to="/" target="black"><i className="fab fa-instagram  fa-2x i-colo mr-3"></i></NavLink>
                    <NavLink to="/" target="black"><i className="fab fa-dribbble fa-2x i-colo mr-3"></i></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contact
