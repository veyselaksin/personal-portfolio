import './App.css'
import CustomNavbar from './components/CustomNavbar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className='App'>
            <CustomNavbar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
