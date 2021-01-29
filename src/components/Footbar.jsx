import React from "react";
import { MDBCol, MDBContainer, MDBFooter, MDBIcon } from "mdbreact";

const Footbar = () => {
    return (
        <MDBFooter color="rgb(26,26,26)" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid className='footbar'>
                    <MDBCol md='12' className='d-flex justify-content-center'>

                        <a href='mailto:devansh.srivastav@student.amity.edu' className='px-2 fa-lg tw-ic'>
                            <MDBIcon far icon='envelope' className='foot-icon'></MDBIcon>
                        </a>

                        <a href='mailto:devansh.srivastav@ieee.org' className='px-2 fa-lg tw-ic'>
                            <MDBIcon far icon='envelope' className='foot-icon'></MDBIcon>
                        </a>

                        <a href='https://www.linkedin.com/in/devanshsrivastav/' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in' className='foot-icon'></MDBIcon>
                        </a>

                        <a href='https://twitter.com/devanshsriv' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter' className='foot-icon'></MDBIcon>
                        </a>

                        <a href='https://www.instagram.com/devansh.srivastav1/' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='instagram' className='foot-icon'></MDBIcon>
                        </a>

                        <a href='https://www.facebook.com/devansh.srivastav' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f' className='foot-icon'></MDBIcon>
                        </a>
                        <a href='https://github.com/devansh-srivastav' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='github' className='foot-icon'></MDBIcon>
                        </a>
                    </MDBCol>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.devanshsrivastav.com"> Devansh Srivastav </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footbar;