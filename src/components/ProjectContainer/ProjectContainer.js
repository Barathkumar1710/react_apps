import React from 'react'
import { Element } from 'react-scroll'
import Projects from '../Projects/Projects'
import './ProjectContainer.css';

const ProjectContainer = () => {
    const client_projects = [
        {
            images: `https://educloud.app/lms/src/erp/smp_i3.png`,
            title: "Esense",
            description: 'Navneet Top Tech Private Limited eSense, a widely used school management application, is commonly employed by schools',
            link: 'https://crescent.dev.topschool.co.in/'
        },
        {
            images: 'https://appinventiv.com/wp-content/uploads/2020/09/Mobile-app-development-guide-for-the-insurance-industry-01.webp',
            title: "TATAAIA Life Insurance",
            description: "API development / DB integration is with SQL for data handling.• Identifying and implementing performance optimizations for both API endpoints and database queries to ensure efficient system operation.",
            link: 'https://siddhipreprod.tataaia.com/'
        },
        {
            images: "https://www.shutterstock.com/image-vector/tourism-booking-app-concept-vector-260nw-1239450058.jpg",
            title: "Natours Tour Application",
            description: 'The Natours Tour Application using NodeJS, express, Bootcamp',
            link: 'https://www.natours.dev/'
        },
        {
            images: "https://img.freepik.com/free-vector/intellectual-property-concept_23-2148702638.jpg?w=740&t=st=1713830172~exp=1713830772~hmac=7bda0a0c77e6c8911ad0af9207da3f4ab2d9bdfa3a130d716e5de9ec34803730",
            title: "Natours Tour Application",
            description: 'The Natours Tour Application using NodeJS, express, Bootcamp',
            link: 'https://www.natours.dev/'
        },
        {
            images: "https://img.freepik.com/free-vector/idea-concept-illustration_98292-1742.jpg?w=740&t=st=1713830082~exp=1713830682~hmac=de83e80123b2ef09178887cd2835f4f71cc771a97428d2c9beaced11f0aeccfd",
            title: "Natours Tour Application",
            description: 'The Natours Tour Application using NodeJS, express, Bootcamp',
            link: 'https://www.natours.dev/'
        },
        {
            images: "https://img.freepik.com/premium-vector/light-bulb-pencil-doodles-idea-conceptual_41793-842.jpg?w=740",
            title: "Natours Tour Application",
            description: 'The Natours Tour Application using NodeJS, express, Bootcamp',
            link: 'https://www.natours.dev/'
        }
    ]
    return (
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <p>
                Here are several projects I've been involved with
            </p>
            <div className='projectContainer_projects'>
                {
                    client_projects.map((project, index) => {
                        return (
                            <Projects
                                key={index}
                                img={project.images}
                                title={project.title}
                                desc={project.description}
                                link={project.link}></Projects>
                        )
                    })
                }
            </div>
        </Element>
    )
}

export default ProjectContainer