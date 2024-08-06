import './skills.css'
import data from './data'
import Card from '../../components/Card/Card'

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <p>I keep working on my skills on the daily basis to produce the best results possible.</p>
            <div className="container skills__container">
                {
                    data.map(item => (
                        <Card key = {data.id} className='skills light'>
                            <div className='skills__icon'>
                                {item.icon}
                            </div>
                            <div className="skills__details">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills