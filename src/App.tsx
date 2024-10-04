import { useState } from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { CV } from './components/cv/cv';

function App() {
    // const location = useLocation();
    // const CVmode = location.pathname === '/cv';
    return (
        <Router>
            <div className={styles.App}>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/cv" element={<CV />} />
                    </Routes>
                    {/* <About />
                    <Projects /> */}
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
