import { Row,Col,Card } from 'react-bootstrap';
import './CSS/Home.css';
import MyProfile from '../images/MyProfile.jpg';

const Home = () => {
    return(
        <div className="container-fluid">
            <Row className="mt-3 p-3 pb-0">
                <Col sm={3}>
                </Col>
                <Col sm={6}>
                    <Card className="profileimage" border="secondary">
                        <input type="image" img="true" src={MyProfile} alt={"myProfileFoto"} className="img-responsive"/>
                    </Card>
                    <br/>
                    <h5 className="home">Phyo Pyae Zaw is a Web Developer from Yangon Myanmar, working on making independently design and developing website. </h5>
                    <p className="home line-1 anim-typewriter">And learning, thinking and coding about web development, how to create, how to maintain and how to design with the following skills.</p>
                    <p className="home"><strong>HTML/CSS | Javascript | React | PHP | Laravel | MySQL/PostgreSQL</strong></p>
                </Col>
            </Row>
            <br/>
        </div>
    );
};

export default Home;