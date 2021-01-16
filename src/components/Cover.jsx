import React from "react";
import {MDBMask} from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';

function Cover(){
    return(
        <div>
            <MDBMask className="flex-center flex-column text-white text-center">
                <div className='header'>
                    <p className='i-m'>I'm</p>
                    <h1 className='name'>Devansh Srivastav</h1>
                    <p className='info'>Machine Learning Student Researcher, Cloud Practitioner, Frontend Developer</p>
                    <div className='cv'>
                        <button type="button" className="btn btn-outline-light btn-lg">Download CV</button>
                    </div>
                </div>
            </MDBMask>
        </div>
    );
}

export default Cover;