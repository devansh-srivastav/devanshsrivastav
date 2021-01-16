import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import Particles from 'react-particles-js';

import Logo from '../img/logo.png';




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
    render(){
        return(
            <Router>
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
                <MDBNavbar className='nav-style' color="black" fixed="top" dark expand="md" scrolling transparent>
                    <MDBNavbarBrand href="/">
                        <img class='logo d-inline-block align-top' src={Logo} width="30" height="30" alt=""
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
        )
    }
}

export default Navbar;