import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const Card = (props) => {
    return (
            <MDBCol md='3'>
                <MDBCard cascade>
                    <MDBView cascade>
                        {/* <MDBCardImage
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                            alt='Card cap'
                        /> */}
                    </MDBView>

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title'>
                            <strong>{props.name}</strong>
                        </MDBCardTitle>

                        {/* <p className='font-weight-bold blue-text'>Photographer</p> */}

                        <MDBCardText>
                            {props.desc}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                            <a href='!#' className='px-2 fa-lg li-ic'>
                                <MDBIcon fab icon='linkedin-in'></MDBIcon>
                            </a>

                            <a href='!#' className='px-2 fa-lg tw-ic'>
                                <MDBIcon fab icon='twitter'></MDBIcon>
                            </a>

                            <a href='!#' className='px-2 fa-lg fb-ic'>
                                <MDBIcon fab icon='facebook-f'></MDBIcon>
                            </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
    )
}

export default Card;