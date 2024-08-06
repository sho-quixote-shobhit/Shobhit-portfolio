import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact-container">
                <h2>Get In Touch</h2>
                <p>Let's get to know each other!!</p>
                <div className="contact__icons">
                    <a href="mailto:vipershob01@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail /> 
                    </a>
                    <a href="https://wa.me/7011709764" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> 
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
