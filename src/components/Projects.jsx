import React from "react";
import Section from "./Section";
import Card from "./Card"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { projects } from "../projects"


function showCard(project){
    return(
        <Card key={project.id} name={project.name} desc={project.desc} />
    );
}

function Projects() {
    return (
        <div className='projects'>
            <Section name='Projects' />

            {/* <div className="row">
                <div className="col-md-6 mb-4">
                    <li className="list-group-item"><h5 className='category'>Patents</h5></li>
                </div>
                <div className="col-md-6 mb-4">
                    <li className="list-group-item"><h5 className='category'>Publications</h5></li>
                </div>
            </div> */}
            <MDBContainer fluid>
                <MDBRow>
                    {projects.map(showCard)}
                </MDBRow>
            </MDBContainer>
            


        </div>
    )
}

export default Projects;