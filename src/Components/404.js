import { Link } from 'react-router-dom';
import FuzzyText from './FuzzyText';
import ShinyText from './ShinyText';

const hoverIntensity = 0.7;
const enableHover = true;
  
const Err404 = () => {
    return(
        <div className="err404-ctn">
            <div className="err404-inner">
                <FuzzyText 
                baseIntensity={0.2} 
                hoverIntensity={hoverIntensity} 
                enableHover={enableHover}
                style={{textAlign: "center"}}
                >
                404 🫩
                </FuzzyText>
                <FuzzyText 
                baseIntensity={0.2} 
                hoverIntensity={hoverIntensity} 
                enableHover={enableHover}
                style={{textAlign: "center"}}
                >
                Not Found
                </FuzzyText>
                <br/>
                <Link to="/">
                    <ShinyText
                        text="Go Home >>>" 
                        disabled={false} speed={3} 
                        className='custom-class'
                        color='black'
                        button={true}
                    />
                </Link>
            </div>
        </div>
    );
}
export default Err404;