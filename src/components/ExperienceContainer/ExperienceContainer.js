import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'
const ExperienceContainer = () => {
    return (
        <Element className='experienceContainer' id='exp'>
            <h1>Experience</h1>
            <div className='experienceContainer_info'>
                <Experience number="+10" title='Clients' ></Experience>
                <Experience number="+3" title='Projects' style={{ backgroundColor: '#f64c08' }}></Experience>
                <Experience number="+2" title='experience'></Experience>
                <Experience number="+2" title='Courses Cmpleted'></Experience>
            </div>
        </Element>
    )
}

export default ExperienceContainer