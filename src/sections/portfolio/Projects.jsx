import React from 'react'
import Project from './Project'

const Projects = ({projects}) => {
  return (
    <div className='portfolio__projects'>
        {
            projects.map(pro => (
                <Project key={pro.id} project={pro} />
            ))
        }
    </div>
  )
}

export default Projects