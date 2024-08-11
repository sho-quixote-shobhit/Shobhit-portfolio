import './header.css'
import HeaderImg from '../../assests/profile.jpeg'
import data from './data'

const Header = () => {
    return (
        <header id="header">
            <div className='container header__container'>
                <div className="header__profile">
                    <img src = {HeaderImg} alt = "Header" />
                </div>
                <h3>Shobhit Singh</h3>
                <p>
                My name is Shobhit Singh, and I have a strong passion for software development. Over the past two years, I've been actively involved in web development and competitive programming, continuously honing my skills and solving complex challenges.
                </p>
                <div className='header__cta'>
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header__socials">
                    {
                        data.map((item) => <a key={item.id} href = {item.link} target= "_blank" rel="noopener noreferrer">{item.icon}</a>)
                    }
                </div>
            </div>  
        </header>
    )
}

export default Header