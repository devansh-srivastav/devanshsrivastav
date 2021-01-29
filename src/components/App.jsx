/* eslint-disable */

import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollToTopBtn from "./ScrollToTop";
import About from "./About"
import Skills from "./Skills"
import Research from "./Research"
import Projects from "./Projects"
import Contact from "./Contact"
import Footbar from "./Footbar"

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBView } from 'mdbreact';

import Particles from "../img/particles.gif";

import Logo from '../img/logo.png';
import Cover from "./Cover"


class App extends React.Component {
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
      <div id='home'>
        <header>
          <Router>
            <MDBNavbar className='nav-style' color="black" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/" >
                <AnchorLink offset="100" href="#home" style={{ color: "white" }} className="pl-3" >
                <img className='logo d-inline-block align-top' src={Logo} width="30" height="30" alt=""
                  loading="lazy" />
                                Devansh Srivastav
                                </AnchorLink>
                            </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to='#'>
                      <AnchorLink offset="100" href="#about" style={{ color: "white" }} className="pl-3" >About</AnchorLink>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <AnchorLink offset="100" href="#skills" style={{ color: "white" }} className="pl-3" >Skills</AnchorLink>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <AnchorLink offset="100" href="#research" style={{ color: "white" }} className="pl-3" >Research</AnchorLink>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <AnchorLink offset="100" href="#projects" style={{ color: "white" }} className="pl-3" >Projects</AnchorLink>
                    </MDBNavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    <MDBNavLink to="#">Blogs</MDBNavLink>
                  </MDBNavItem> */}
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <AnchorLink offset="100" href="#contact" style={{ color: "white" }} className="pl-3" >Contact</AnchorLink>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={Particles}>

            <Cover />
          </MDBView>
        </header>

        <main>
          <ScrollToTopBtn />
          <About />
          <Skills />
          <Research />
          <Projects />
          {/* <Blogs /> */}
          <Contact />
          <Footbar />
          
        </main>
      </div>
    );
  }
}

export default App;

