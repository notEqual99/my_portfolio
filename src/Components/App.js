import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './CSS/App.css';
import Loading from './Loading';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return(
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="app">
                    <main>
                        <Router>
                            <Navigation/>
                            <Routes>
                                <Route path="/" exact element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/blogs" element={<Blog/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                            </Routes>
                        </Router>
                        <Footer/>
                    </main>
                </div>
            )}
        </div>
    );
};

export default App;