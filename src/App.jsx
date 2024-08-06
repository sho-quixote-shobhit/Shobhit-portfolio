import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'

import Contact from './sections/contact/Contact'
import Portfolio from './sections/portfolio/Portfolio'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'

const App = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <FloatingNav />
            <Footer />
            
        </main>
    )
}

export default App