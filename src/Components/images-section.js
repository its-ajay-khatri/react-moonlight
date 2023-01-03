import React from "react";
import StarImg from '../images/stars.png';
import MoonImg from '../images/moon.png';
import MountainBack from '../images/mountains_behind.png'
import MountainFront from '../images/mountains_front.png'
import { Link } from 'react-router-dom';
import '../App.css';

const ImgSection = () => {
    return(
        <>
            <section>
                <img id="stars" src={StarImg} />
                <img id="moon" src={MoonImg} />
                <img id="mountain_back" src={MountainBack} />
                <h2 id="text">Moon Light</h2>
                {/* <Link to ="#sec" className="btn">Explore</Link> */}
                <a href="#sec" id="btn" className="btn">Explore</a>
                <img id="mountain_front" src={MountainFront} />
            </section>
            
        </>
    )
}

export default ImgSection;