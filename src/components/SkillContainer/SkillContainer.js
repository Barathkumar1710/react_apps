import React from 'react';
import { Element } from 'react-scroll';
import skillImg from '../../../src/assets/4263854_2246605.jpg';
import LinearProgress from '@material-ui/core/LinearProgress'
import './SkillContainer.css'

const SkillContainer = () => {
    return (
        <Element className='skillContainer' id='skills'>
            <div className='skillContainer_image'>
                <img src={skillImg} alt=''></img>
            </div>
            <div className='skillContainer_text'>
                <h2>SKILLSET</h2>
                <div className='skillContainer_skillSet'>
                    <h5>Node JS</h5>
                    <div className='skillContainer_slider skillContainer_slider1'>
                        <LinearProgress variant='determinate' value={69}></LinearProgress>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>ExpressJS</h5>
                    <div className='skillContainer_slider skillContainer_slider2'>
                        <LinearProgress variant='determinate' value={56}></LinearProgress>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>TypeScript</h5>
                    <div className='skillContainer_slider skillContainer_slider3'>
                        <LinearProgress variant='determinate' value={65}></LinearProgress>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>React JS</h5>
                    <div className='skillContainer_slider skillContainer_slider4'>
                        <LinearProgress variant='determinate' value={60}></LinearProgress>
                    </div>
                </div>
                <div className='skillContainer_skillSet'>
                    <h5>SQL</h5>
                    <div className='skillContainer_slider skillContainer_slider5'>
                        <LinearProgress variant='determinate' value={65}></LinearProgress>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default SkillContainer