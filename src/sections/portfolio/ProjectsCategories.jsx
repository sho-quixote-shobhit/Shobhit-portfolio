import React from 'react'
import CategoryButton from './CategoryButton'
import {useState} from 'react'

const ProjectsCategories = ({categories , onFilter}) => {
    const [activeCategory , setActiveCategory] = useState('All');

    const filterHandler = (activeCat) => {
        setActiveCategory(activeCat)
        onFilter(activeCat)
    }

    return (
        <div className='portfolio__categories'>
            {
                categories.map(category => (
                    <CategoryButton  key = {category} category = {category} onChangeCategory = {() => filterHandler(category)} 
                    className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`} />
                ))
            }
        </div>
    )
}

export default ProjectsCategories