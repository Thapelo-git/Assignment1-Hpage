import React from 'react';
import FirstSection from '../components/FirstSection';
import newkidSticks from "../assets/newkidSticks.jpg";
import { Link } from 'react-router-dom';
import AboutImages from '../components/AboutImages';
import books from '../assets/about/books.jpg'
import guy from '../assets/about/guy.jpg'
import lady from '../assets/about/lady.jpg'
import posters from '../assets/about/posters.jpg'
const About = () => {
    return (
        <div>
            <FirstSection text1="ABOUT" bgImg={newkidSticks} button={<Link to="/shop"
             className="bg-teal-400 h-15 hover:bg-teal-300  text-center text-l 
              text-white rounded-4xl w-60">SHOP</Link>}/>
              <AboutImages image1={books} image2={posters} image3={guy} image4={lady}/>

        </div>
    );
};

export default About;