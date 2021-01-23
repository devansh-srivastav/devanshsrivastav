import React from "react";

import { languages, machineLearning, webDev, cloud, database, tools } from "../skillVar"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";




import Section from "./Section";

function showSkill(skill) {
    return (
        <li className="list-group-item">
            <p className="mb-0"><img className='icon' key={skill.id} src={skill.img} alt={skill.name} title={skill.name} />{skill.name}</p>
        </li>
    );
}

function Skills() {
    return (
        <div className='skills'>
            <Section name='Skills' />
            <MDBContainer fluid>
                <MDBRow className="row">
                    <MDBCol className="col-lg-2 col-sm-4 mb-4 skillCol">
                        <li className="list-group-item"><h5 className='category'>Languages</h5></li>
                        <ul className="list-group-flush">
                            {languages.map(showSkill)}
                        </ul>
                    </MDBCol>
                    <MDBCol className="col-lg-2 col-sm-4 mb-4 skillCol">
                        <li className="list-group-item"><h5 className='category'>Machine Learning</h5></li>
                        <ul className="list-group-flush">
                            {machineLearning.map(showSkill)}
                        </ul>
                    </MDBCol>
                    <MDBCol className="col-lg-2 col-sm-4 mb-4 skillCol">
                        <li className="list-group-item"><h5 className='category'>Web</h5></li>
                        <ul className="list-group-flush">
                            {webDev.map(showSkill)}
                        </ul>
                    </MDBCol>
                    <MDBCol className="col-lg-2 col-sm-4 mb-4 skillCol">
                        <li className="list-group-item"><h5 className='category'>Cloud</h5></li>
                        <ul className="list-group-flush">
                            {cloud.map(showSkill)}
                        </ul>
                    </MDBCol>
                    <MDBCol className="col-lg-2 col-sm-4 mb-4 skillCol">
                        <li className="list-group-item"><h5 className='category'>Database</h5></li>
                        <ul className="list-group-flush">
                            {database.map(showSkill)}
                        </ul>
                    </MDBCol>
                    <MDBCol className="col-lg-2 col-sm-4 mb-4 skillCol">
                        <li className="list-group-item"><h5 className='category'>Tools</h5></li>
                        <ul className="list-group-flush">
                            {tools.map(showSkill)}
                        </ul>
                    </MDBCol>
                
                </MDBRow>
            </MDBContainer>

            {/* {languages.map(showSkill)}
            {machineLearning.map(showSkill)}
            {webDev.map(showSkill)}
            {cloud.map(showSkill)}
            {database.map(showSkill)}
            {tools.map(showSkill)} */}


            {/* <img src ={python} alt='Python' />
            <img src={java} alt='Python' />
            <img src={cpp} alt='Python' />
            <img src={javascript} alt='Python' />
            <img src={c} alt='Python' /> */}

        </div>
    );
}

export default Skills;