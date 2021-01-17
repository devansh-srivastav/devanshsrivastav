import React from "react";

import { languages, machineLearning, webDev, cloud, database, tools } from "../skillVar"
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";




import Section from "./Section";

function showSkill(skill){
    return <img className='icon' key={skill.id} src={skill.img} alt={skill.name} />;
}

function Skills() {
    return(
        <div>
            <Section name='Skills' />

            {languages.map(showSkill)}
            {machineLearning.map(showSkill)}
            {webDev.map(showSkill)}
            {cloud.map(showSkill)}
            {database.map(showSkill)}
            {tools.map(showSkill)}


            {/* <img src ={python} alt='Python' />
            <img src={java} alt='Python' />
            <img src={cpp} alt='Python' />
            <img src={javascript} alt='Python' />
            <img src={c} alt='Python' /> */}
            
        </div>
    );
}

export default Skills;