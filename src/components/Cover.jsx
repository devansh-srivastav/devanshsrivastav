import React from "react";
import {MDBMask} from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';

function Cover(){
    return(
            <MDBMask className="flex-center flex-column text-white text-center">
                <div className='header'>
                    <p className='i-m'>I'm</p>
                    <h1 className='name'>Devansh Srivastav</h1>
                    <p className='info'>Machine Learning Student Researcher, Cloud Practitioner, Frontend Developer</p>
                    <div className='cv'>
                    <button type="button" className="btn btn-outline-light btn-lg"><a href='http://bit.ly/devansh-srivastav-cv' target="_blank" rel="noopener noreferrer" className='linkButton' download='cv.pdf'>Download CV</a></button>
                    </div>
                </div>
            </MDBMask>
    );
}

export default Cover;