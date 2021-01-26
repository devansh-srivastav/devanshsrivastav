import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const Card = (props) => {
    return (
            // <MDBCol md='3'>
            //     <MDBCard cascade>
            //         <MDBCardBody cascade className='text-center'>
            //             <MDBCardTitle className='card-title'>
            //                 <strong>{props.name}</strong>
            //             </MDBCardTitle>
            //             <MDBCardText>
            //                 {props.desc}
            //             </MDBCardText>
            //         </MDBCardBody>
            //     </MDBCard>
            // </MDBCol>
            <MDBCol md='3'>
                <button className='btn btn-dark projectButton'>
                <h6>{props.name}</h6>
                <p>{props.desc}</p>
            </button>
            </MDBCol>
    )
}

export default Card;