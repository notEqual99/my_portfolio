import { Link } from 'react-router-dom';
import './CSS/Home.css';
// import SplashCursor from './SplashCursor';
import ShinyText from './ShinyText';
import MatrixRain from './MatrixRain';
import MyProfile from '../images/ppz.jpg';

const Home = () => {
    const skills = [
        'JavaScript', 'React', 'Node.js', 'Express', 'PHP', 'Laravel',  'Git',
        'Responsive Design', 'RESTful APIs', 'MongoDB', 'MySQL', 'PostgreSQL', 'Linux', 'Docker'
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Phyo Pyae Zaw</h1>
                    <h2 className="hero-subtitle">Web Developer</h2>
                    <p className="hero-description">
                        I craft exceptional digital experiences with clean, efficient code and modern web technologies.
                    </p>
                    <div className="cta-buttons">
                        <a href="#contact" className="btn btn-primary">Let's Chat</a>
                        {/* <a href="#projects" className="btn btn-primary">View My Work</a> */}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-container">
                    <div className="profile-container profileimage">
                        <img
                        src={MyProfile}
                        alt="Profile"
                        className="profile-picture"
                        />
                    </div>
                </div>
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>Hi, I'm Phyo Pyae Zaw, a passionate web developer based from Yangon, Myanmar. I specialize in creating beautiful, responsive, and user-friendly websites and web applications.</p>
                            <p>Want to bring your business online or upgrade your existing presence? Let's work together. And as a team, we will work together to create magical things and solve your problems together to reach your goals.</p>
                        </div>
                        <div className="skills-container">
                            <h3>Skills & Technologies</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="project-section">
                        <Link to="/projects">
                            <ShinyText 
                                text="See Projects >>>" 
                                disabled={false} speed={3} 
                                className='custom-class'
                                color='black'
                                button={true}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* encrypt text container*/}
            <section id="encrypt" className="encrypt-section">
                <MatrixRain/>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll get back to you as soon as possible!
                    </p>
                    <a href="mailto:phyopyae.za94@gmail.com" className="btn btn-contact">
                        Say Hello
                    </a>
                </div>
            </section>

            {/* <SplashCursor /> */}
        </div>
    );
};

export default Home;