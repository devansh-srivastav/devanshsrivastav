import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Section from "./Section";

import AboutImage from "../img/lib.jpg";

import { achievements } from "../achievements"

function showCard(skill) {
    return (
        <MDBCol md='6' sm='6' key={skill.id}>
            <div className='ach-btn' >
                <div className='btn btn-dark skillButton'>
                    <p className="mb-0">{skill.name}</p>
                </div>
            </div>
        </MDBCol>
        
    );
}

function About(){
    return(
        <div className ='about' id='about'>
            <Section name='About' />
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="8">
                        <p className='about-content'>
                            Currently pursuing the third year of the Bachelor of Technology in Computer Science and Engineering program on
                            scholarship at Amity University, (Noida), India. My profound interest in artificial intelligence, machine learning,
                            cloud computing, data science, human-computer interaction, Internet of Things and computer vision keeps me motivated to be up to date with the various
                            research directions across the world. The ever-growing number of technological innovations ignites my curiosity and
                            pushes me to explore the world beyond courses and textbooks.
                            <br /><br />
                            Being a firm believer of open and collaborative science, I take all opportunities to share my passion with other
                            like-minded people. For this reason, I founded my school’s IT club during my high school years to encourage and support
                            students to pursue technology and innovate. I continue to do so as the Tech Lead of my university’s chapter of Google
                            Developer Student Clubs.
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <img className='about-img' src={AboutImage} alt=""></img>
                    </MDBCol>
                </MDBRow>
                <div className='container'>
                    <h5 className='category'>Achievements</h5>
                    {/* <MDBContainer fluid className='ach-btn'> */}
                    <MDBRow>
                        {achievements.map(showCard)}
                    </MDBRow>
                    {/* </MDBContainer> */}
                </div>
            </MDBContainer>
        </div>
    );
}

export default About;