import React from "react";
import Section from "./Section";
import Form from "./Form";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Contact(){
    return(
        <div>
            <Section name='Contact' />
            {/* <Form /> */}
            <MDBContainer fluid>
                <form className='contact-form'>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form_group">
                                <input type="text" class="form_control" placeholder="Name" name="name" required />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form_group">
                                <input type="email" class="form_control" placeholder="E-mail" name="email" required />
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form_group">
                                <textarea class="form_control" placeholder="Your Message" name="message" required></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form_button text-center">
                                <button type="submit" class="shamko_btn form_btn">MESSAGE ME</button>
                            </div>
                        </div>
                    </div>
                </form>
            </MDBContainer>
            
        </div>
    );
}

export default Contact;