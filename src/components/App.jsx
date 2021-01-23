import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";
import About from "./About"
import Skills from "./Skills"
import Research from "./Research"
import Projects from "./Projects"
import Blogs from "./Blogs"
import Contact from "./Contact"
import Footbar from "./Footbar"

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
// import Particles from 'react-particles-js';

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
      <div>
        <header>
          <Router>
            <MDBNavbar className='nav-style' color="black" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <img className='logo d-inline-block align-top' src={Logo} width="30" height="30" alt=""
                  loading="lazy" />
                                Devansh Srivastav
                            </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#about">About</MDBNavLink>
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

          <MDBView src={Particles}>

            <Cover />
          </MDBView>
        </header>

        <main>
          <About id='about' />
          <Skills />
          <Research />
          <Projects />
          <Blogs />
          <Contact />
          <Footbar />
        </main>
      </div>
    );
  }
}


// function App() {
//   return(
//     <div>
//       <Router>
//         <Navbar />
//       </Router>
//       <Navbar />
//       <About />
//       {/* <Skills /> */}
//       {/* <Research /> */}
//       <Projects />
//       <Blogs />
//       {/* <Contact /> */}
//       <Footbar />
//     </div>
//   );
// }

export default App;

