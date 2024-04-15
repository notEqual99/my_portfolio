import React, { useEffect } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import anime from 'animejs/lib/anime.es.js';
import './CSS/Home.css';
import MyProfile from '../images/ppz.jpg';

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
                    <div className='row'>
                        <div className='col-sm-8 about-ctn'>
                            <h5 className="home">Phyo Pyae Zaw is a Web Developer from Yangon Myanmar, working on making independently design and developing website. </h5>
                            <p className="home line-1 anim-typewriter">And learning, thinking and coding about web development, how to create, how to maintain and how to design with the following skills.</p>
                            <p className="home"><strong>HTML/CSS | Javascript | React | PHP | Laravel | MySQL/PostgreSQL</strong></p>
                        </div>
                        <div className='col-sm-4'>
                            <Card className="profileimage" border="secondary">
                                <input type="image" img="true" src={MyProfile} alt={"myProfileFoto"} className="img-responsive"/>
                            </Card>
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