import './footer.css'
import data from './data'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <div className="footer__socials">
                    {
                        data.map((item) => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                    }
                </div>
                <p>2024 Shobhit Singh &copy;All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer