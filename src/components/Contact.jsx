import React from "react";
import Section from "./Section";
import Form from "./Form";
import { MDBContainer } from "mdbreact";

function Contact(){
    return(
        <div className='contact'>
            <Section name='Contact' />
            <MDBContainer>
                <Form />
            </MDBContainer>
            
        </div>
    );
}

export default Contact;