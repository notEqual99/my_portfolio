import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './CSS/App.css';
import Loading from './Loading';

import Home from './Home';
import Portfolio from './Portfolio';
// import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Err404 from './404';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
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
                                <Route path="/portfolio" element={<Portfolio/>}/>
                                {/* <Route path="/about" element={<About/>}/> */}
                                <Route path="/blogs" element={<Blog/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="*" element={<Err404/>}/>
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