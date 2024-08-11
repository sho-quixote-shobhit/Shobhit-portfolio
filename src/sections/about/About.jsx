import './about.css'
import AboutImg from '../../assests/about3.png'
import CV from '../../assests/finalResume.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card/Card'

const handleLink = (link) => {
    window.open(link)
}

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className='about__card' onClick={() => {handleLink(item.link)}}>
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Building real world projects have always been my passion. I'm doing web development for over 2 years now and I'm always motivated to do more!
                    </p>
                    <p>
                        Hi, my name is Shobhit Singh from Gurgoan, Haryana. I'm a full stack web developer with a Bachelors degree in Computer Science and Engineering from YMCA, Faridabad. My top priority is to give you top level industry level design and all the functionality that you need to operate smoothly online. Get in touch today with the details of your project and let's get started!!
                    </p>
                    <a href={CV} download={true} className='btn primary'>Download CV <HiDownload /> </a>
                </div>
            </div>
        </section>
    )
}

export default About