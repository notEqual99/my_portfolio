import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import './CSS/App.css';

import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Projects from './Projects';

const App = () => {

    return(
        <div className="app">
            <main>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/blogs" element={<Blog/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </Router>
                <Footer/>
            </main>
        </div>
    );
};

export default App;