import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-particles-js';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <header>
                    <Router>
                        <MDBNavbar className='nav-style' color="black" fixed="top" dark expand="md" scrolling transparent>
                            <MDBNavbarBrand href="/">
                                <img class='logo d-inline-block align-top' src="{require(../img/logo.png)}" width="30" height="30" alt=""
                                    loading="lazy" />
                                Devansh Srivastav
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">About</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Skills</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Research</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Projects</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Blogs</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Contact</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>
                    <div className='header'>
                        <Particles className='particles'
                            params={{
                                particles: {
                                    number: {
                                        value: 90,
                                        density: {
                                            enable: true,
                                            value_area: 1000,
                                        }
                                    },
                                },
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                        />
                        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
                            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                                <p class='i-m'>I'm</p>
                                <h1 className='name'>Devansh Srivastav</h1>
                                <p class='info'>Machine Learning Student Researcher, Cloud Practitioner, Frontend Developer</p>
                                <div class='cv'>
                                    <button type="button" class="btn btn-outline-light btn-lg">Download CV</button>
                                </div>
                            </MDBMask>
                        </MDBView>
                    </div>

                </header>

                {/* <main>
                    <MDBContainer className="text-center my-5">
                        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>               
                </main> */}
            </div>
        );
    }
}

export default Navbar;