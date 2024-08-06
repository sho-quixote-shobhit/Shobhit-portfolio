import './portfolio.css'
import data from './data'
import ProjectsCategories from './ProjectsCategories'
import Projects from './Projects'
import { useState } from 'react'

const Portfolio = () => {
    const [projects, setprojects] = useState(data);
    const categories = data.map(item => item.category)
    const uniqueCategories = ["All" , ...new Set(categories)]

    const filter = (category) => {
        if(category === "All"){
            setprojects(data)
            return;
        }
        const filterprojects = data.filter(project => project.category === category);
        setprojects(filterprojects)
    }

    return (
        <section id="portfolio">
            <h2>My Projects</h2>
            <p>Check out some of the projects that i have build. Use the buttons to toggle the different categories.</p>
            <div className="container protfolio__container">
                <ProjectsCategories categories = {uniqueCategories} onFilter={filter} />
                <Projects projects={projects} />

            </div>
        </section>
    )
}

export default Portfolio