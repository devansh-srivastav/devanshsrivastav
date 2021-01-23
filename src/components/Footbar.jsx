import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footbar = () => {
    return (
        <MDBFooter color="rgb(26,26,26)" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid className='footbar'>
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
                        <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='github'></MDBIcon>
                        </a>
                    </MDBCol>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.devanshsrivastav.com"> Devansh Srivastav </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footbar;