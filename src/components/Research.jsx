import React from "react";
import Section from "./Section";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Research(){
    return(
        <div>
            <Section name='Research' />
            <MDBContainer fluid>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <li className="list-group-item"><h5 className='category'>Patents</h5></li>
                    </div>
                    <div className="col-md-6 mb-4">
                        <li className="list-group-item"><h5 className='category'>Publications</h5></li>
                    </div>
                </div>
            </MDBContainer>
            
            



        </div>
    )
}

export default Research;