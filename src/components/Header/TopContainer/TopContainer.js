import React from 'react'
import { Element } from 'react-scroll';
import './TopContainer.css'
import TopContent from '../TopContent/topContent';

const TopContainer = () => {
  return (
    <Element name ='about' className='topContainer'>
        <TopContent></TopContent>
    </Element>
  )
}

export default TopContainer 