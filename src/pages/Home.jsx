import React from 'react';
import { Footer } from '../components/GlobalComponent/Footer';
import { HomeHeader } from '../components/HomeComponent/HeaderHome';
import { HomeAboutMe } from '../components/HomeComponent/HomeAboutMe';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div className=''>
      <HomeHeader />
      <HomeAboutMe />
      <Footer />
    </div>
  )
}

export default Home