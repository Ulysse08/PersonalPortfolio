import React from 'react';
import { Footer } from '../components/GlobalComponent/Footer';
import { HomeHeader } from '../components/HomeComponent/HeaderHome';
import { HomeAboutMe } from '../components/HomeComponent/HomeAboutMe';
import { FaXTwitter } from 'react-icons/fa6'
import {
  BiLogoLinkedinSquare,
} from 'react-icons/bi'

const footerColumnLinks = [
  {
    links: [
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact' },
    ],
  },
]

const socialMediaLinks = [
  { url: 'https://twitter.com', icon: <FaXTwitter /> },
  { url: 'https://linkedin.com', icon: <BiLogoLinkedinSquare /> },
]

function Home() {
  return (
    <div className=''>
      <HomeHeader />
      <HomeAboutMe />
      <Footer
        image={{ src: 'logo.png', alt: 'Logo' }}
        footerText="© 2024 Alexandre Jacquemard. All rights reserved."
        columnLinks={footerColumnLinks}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  )
}

export default Home