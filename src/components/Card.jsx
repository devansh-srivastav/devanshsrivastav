import React from 'react';
import { MDBCol } from 'mdbreact';

const Card = (props) => {
    return (
            <MDBCol md='3' sm='6'>
            <div>
                <button className='btn btn-dark projectButton'>
                    <h6>{props.name}</h6>
                    <p>{props.desc}</p>
                </button>
                </div>
                
            </MDBCol>
    )
}

export default Card;