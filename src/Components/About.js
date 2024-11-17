import React, { useState, useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import anime from 'animejs/lib/anime.es.js';
import './CSS/Home.css';
import MyProfile from '../images/ppz.jpg';

const TextAnimation = ({ actualText, duration = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    // const [isAnimating, setIsAnimating] = useState(true);
  
    useEffect(() => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:",.<>?/`~';
      const textLength = actualText.length;
      const intervalDuration = duration / textLength;
      let currentText = Array(textLength).fill('');
      let currentIndex = 0;
  
      const animationTimer = setInterval(() => {
        if (currentIndex < textLength) {
          currentText[currentIndex] = actualText[currentIndex];
          currentIndex++;
        }
  
        for (let i = currentIndex; i < textLength; i++) {
          if (actualText[i] === ' ') {
            currentText[i] = ' '; // Preserve spaces
          } else {
            currentText[i] = characters.charAt(Math.floor(Math.random() * characters.length));
          }
        }
  
        setDisplayedText(currentText.join(''));
  
        if (currentIndex === textLength) {
          clearInterval(animationTimer);
          // setIsAnimating(false);
        }
      }, intervalDuration);
  
      return () => clearInterval(animationTimer);
    }, [actualText, duration]);
  
    return (
      <>{displayedText}</>
    );
};
  

const About = () => {
    useEffect(() => {
        anime({
            targets: '.profileimage',
            translateX: 250,
            direction: 'reverse',
            loop: 1,
            easing: 'easeInOutSine',
        });

        anime({
            targets: '.about-ctn',
            translateX: 50,
            loop: 1,
            direction: 'alternate',
            easing: 'easeInOutSine',
        });
    }, []);

    return(
        <div className="container-fluid">
            <Row className="mt-3 p-3 pb-0">
                <Col sm={1}>
                </Col>
                <Col sm={10}>
                    <div className='row profileintro'>
                      <div className='col-sm-8 about-ctn'>
                          <h5 className="home"><TextAnimation actualText={'Phyo Pyae Zaw is a passionate Web Developer based in Yangon, Myanmar, with a keen interest in creating, maintaining, and designing websites. While rooted in Yangon, is also open to remote work opportunities, bringing flexibility and adaptability to collaborate with teams and clients worldwide. '}/></h5>
                          <p className="home line-1 anim-typewriter"><TextAnimation actualText={'With a strong focus on learning, creativity, and problem-solving, constantly explores the art and science of web development, aiming to deliver efficient and visually engaging web solutions.'}/></p>
                          {/* <p className="home"><strong><TextAnimation actualText={'HTML/CSS | Javascript | React | PHP | Laravel | MySQL/PostgreSQL'}/></strong></p> */}
                      </div>
                      <div className='col-sm-4'>
                        <div className="profile-container profileimage">
                          <div className="profile-placeholder">?</div>
                          <img
                          src={MyProfile}
                          alt="Profile"
                          className="profile-image"
                          />
                        </div>
                      </div>
                    </div>
                    <br/>
                </Col>
                <Col sm={1}>
                </Col>
            </Row>
            <br/>
        </div>
    );
};

export default About;