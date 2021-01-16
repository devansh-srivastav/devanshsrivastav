import {MDBContainer, MDBMask, MDBView } from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';

function Cover(){
    return(
        <div>
            {/* <MDBView src=""> */}
                <MDBMask className="flex-center flex-column text-white text-center">
                    <div className='header'>
                        <p class='i-m'>I'm</p>
                        <h1 className='name'>Devansh Srivastav</h1>
                        <p class='info'>Machine Learning Student Researcher, Cloud Practitioner, Frontend Developer</p>
                        <div class='cv'>
                            <button type="button" class="btn btn-outline-light btn-lg">Download CV</button>
                        </div>
                    </div>
                </MDBMask>
            {/* </MDBView> */}
        </div>
    );
}

export default Cover;