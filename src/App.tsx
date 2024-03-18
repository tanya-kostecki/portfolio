import './App.css';
import { Particle } from './components/particle/Particle';
import { useGetWindowWidth } from './hooks/useWindowWidth';
import { Footer } from './layout/footer/Footer';
import { TabletMobileFooter } from './layout/footer/tablet-mobile-footer/TabletMobileFooter';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contact } from './layout/sections/contact/Contact';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';


function App() {
    const screen = useGetWindowWidth()
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            {screen.width > 768 ? <Footer/> : <TabletMobileFooter/>}
        </div>
    );
}

export default App;

