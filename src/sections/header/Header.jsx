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
                    Hi, do you know who i am. I am a Good Boy and WWW stands for World Wide WHandsome.
                    I am a Software developer , so send me the details of your project to build a modern, highly responsice application today!!
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