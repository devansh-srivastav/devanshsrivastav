import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const Card = (props) => {
    return (
            <MDBCol md='3'>
                <MDBCard cascade>
                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>{props.name}</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                            {props.desc}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
    )
}

export default Card;