import React from "react";

import { languages, machineLearning, webDev, cloud, database, tools } from "../skillVar"
import { MDBContainer } from "mdbreact";




import Section from "./Section";

function showSkill(skill) {
    return (
        <button className='btn btn-dark skillButton' key={skill.id}>
            <p className="mb-0"><img className='icon' src={skill.img} alt={skill.name} title={skill.name} />{skill.name}</p>
        </button>
    );
}

function Skills() {
    return (
        <div className='skills'>
            <Section name='Skills' />
            <MDBContainer fluid>
                <h5 className='category'>Languages</h5>
                {languages.map(showSkill)}
                <h5 className='category'>Machine Learning</h5>
                {machineLearning.map(showSkill)}
                <h5 className='category'>Web</h5>
                {webDev.map(showSkill)}
                <h5 className='category'>Cloud</h5>
                {cloud.map(showSkill)}
                <h5 className='category'>Database</h5>
                {database.map(showSkill)}
                <h5 className='category'>Tools</h5>
                {tools.map(showSkill)}
            </MDBContainer>
        </div>
    );
}

export default Skills;