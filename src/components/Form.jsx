import React from 'react';
import { MDBContainer } from "mdbreact";

export default function FormPropsTextFields() {
    return (
        <div>
            <form className='contact-form' name='contact-form'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form_group">
                            <label htmlFor="nameInput">Name <span>*</span></label>
                            <input type="text" id='nameInput' className="form_control" placeholder="Name" name="Name" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form_group">
                            <label htmlFor="emailInput">E-mail <span>*</span></label>
                            <input type="email" id='emailInput' className="form_control" placeholder="E-mail" name="Email" required />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form_group">
                            <label htmlFor="messageInput">Message <span>*</span></label>
                            <textarea className="form_control" id='messageInput' placeholder="Your Message" name="Message" required></textarea>
                        </div>
                    </div>
                    <MDBContainer>
                        <div className="col-lg-12" id='submissionCont'></div>
                    </MDBContainer>
                    <div className="col-lg-12">
                        <div className="form_button text-center">
                            <button type="submit" id='formSubmit' className="btn btn-dark" data-toggle="modal" >Message Me</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

