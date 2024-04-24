import { IconButton } from '@material-ui/core';
import React from 'react'
import { Element } from 'react-scroll';
import {  Instagram, LinkedIn, GitHub } from '@material-ui/icons'
import './Contact.css'
const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact_container'>
                <p>
                    Email: <span>barathkumarr1710@gmail.com</span>
                </p>
                <p>
                    Github userName: <span>@Barathkumar1710</span>
                </p>
                <div className='contact_icons'>
                    <a href='https://www.linkedin.com/feed/'>
                        <IconButton>
                            <LinkedIn></LinkedIn>
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <IconButton>
                            <Instagram></Instagram>
                        </IconButton>
                    </a>
                    <a href='https://github.com/'>
                        <IconButton>
                            <GitHub></GitHub>
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact