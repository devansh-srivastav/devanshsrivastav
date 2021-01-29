import React from "react";
import {MDBContainer} from 'mdbreact';
function Section(props){
    return(
        // <h2 className='section-title'>{props.name}</h2>
        <MDBContainer fluid className="text-center my-5">
            <h2 className='section-title animate__animated animate__bounce'>{props.name}</h2>
        </MDBContainer>
    );
}

export default Section;