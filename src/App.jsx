import Header from './components/HeaderEnhanced.jsx';
import About from './components/About';
import Projects from './components/ProjectsFromRESTAPI.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {SayHi, SayHello} from "./components/01HelloWorld.jsx";

function Greet(){
    return (
        <>
            <SayHello/>
            <SayHi/>
        </>
    )
}

function App() {
    return (
        <div>
            {/*<Header />
            <About />
            <Projects />
            <Contact />
            <Footer />*/}
            <div>
                <Header />
                <div id="about">
                    <About />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
