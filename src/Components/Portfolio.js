// import React from 'react';
import {Col,Row} from 'react-bootstrap';
import Honestrades from '../images/honestrades.jpg';
import Phglobal from '../images/phglobal.jpg';
import './CSS/Portfolio.css';

const Portfolio = () => {
    return(
        <div className="container-fluid">
            <Row className="portfolio mt-3 p-3">
                <Col sm={3}></Col>
                <Col sm={6}>
                    <h2><u>Portfolio</u></h2><br/>
                {/* 2019 - 2021*/}
                    <h4>Honestrades Myanmar</h4>
                    <input className="portfolio-image" type="image" img="true" src={Honestrades} width={"250px"} height={"400px"} alt={"honestrades"}/>
                    <br/><br/>
                    <h5>2019 - 2021</h5>
                    <p>- Honestrades is a World's first and only agriculture-specific platform for direct sellers and buyers to trade anytime and anywhere on mobile application for Myanmar. ( Investment by Singapore's government ).<br/>
                    - At Honestrades I worked as a backend developer, helping and discuss business flow, server management and maintain and  API development for web app.   </p>
                    <p>Visit the <a className="portfo-link" href="https://honestrades.com">website</a> and download for app <a className="portfo-link" href="https://play.google.com/store/apps/details?id=com.honestholding.honestrades.mainapp">here</a>.</p>
                    <p className="text-danger">!!! Unfotunately Singapore's Government stopped to inverst due to state of emergency of myanmar. !!!</p>
                    <hr/>
                {/* 2018 - 2019 */}
                    <h4>PH Global Co., Ltd</h4>
                    <input className="portfolio-image" type="image" img="true" src={Phglobal} width={"250px"} height={"400px"} alt={"phGlobal-logo"}/>
                    <br/><br/>
                    <h5>2018 - 2019</h5>
                    <p>Before Web Developer job, I worked as a Site Engineer at MyatMingalar Condomium project and 68 Residence project a year with PH Global Co., Ltd. After that I changed my career and work as a developer.</p>
                    <p>Visit PH Global <a className="portfo-link" href="https://www.facebook.com/PH-Global-Trading-Co-Ltd-880147878715006/">facebook</a> page.</p>
                </Col>
                <Col sm={3}></Col>
            </Row>
            <hr/>

        </div>
    );
};

export default Portfolio;