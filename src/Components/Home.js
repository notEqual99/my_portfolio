import { Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import './CSS/Home.css';
import JobCareer from './JobCareer';
import Skill from './Skill';

const Home = () => {
    return (
        <div className="container-fluid">
            <Row className="mt-3 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Card className="profile-ctn">Profile</Card>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row className="mt-1 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="first-history">
                        <div className="card">
                            <div className="card-header profile-info">
                                Career
                            </div>
                            <div className="card-body">
                                <p className="card-text">Web Developer</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header profile-info">
                                Engineering History
                            </div>
                            <div className="card-body">
                                <p className="card-text">Over <strong>4</strong> years</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header profile-info">
                                Activity Area
                            </div>
                            <div className="card-body">
                                <p className="card-text">Bangkok</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row className="mt-1 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="second-history">
                        <div className="card">
                            <div className="card-header profile-info">
                                Language Good At
                            </div>
                            <div className="card-body">
                                <p className="card-text">PHP ( Laravel )</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header profile-info">
                                OS Can Be Used 
                            </div>
                            <div className="card-body">
                                <p className="card-text">Linux ( Debian, Arch ), Windows</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row className="mt-3 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Card className="profile-ctn">Career History</Card>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <JobCareer/>
            <Skill/>
            <Col sm={1}></Col>
            <br />
        </div>
    );
};

export default Home;