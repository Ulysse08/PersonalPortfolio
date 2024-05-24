// components/About.tsx
import React, { Suspense } from 'react';
import 'tailwindcss/tailwind.css';

import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi';

import { aboutMeHeaders } from '../components/AboutMeComponent/LongContentBio';
import { academicBackgroundHeaders } from '../components/AboutMeComponent/AcademicBackground';
import Footer from '../components/GlobalComponent/Footer';

const HeaderAbout = React.lazy(() => import('../components/AboutMeComponent/HeaderAbout'));
const AboutMeLongContent = React.lazy(() => import('../components/AboutMeComponent/LongContentBio'));
const AcademicBackground = React.lazy(() => import('../components/AboutMeComponent/AcademicBackground'));
const ExperiencesCards = React.lazy(() => import('../components/AboutMeComponent/ExperiencesCards'));
const ProjectsCards = React.lazy(() => import('../components/AboutMeComponent/ProjectsCards'));
const TableOfContents = React.lazy(() => import('../components/AboutMeComponent/TableOfContents'));

const mainSections = [
  ...aboutMeHeaders,
  { id: 'section5', title: 'My Experiences' },
  { id: 'section8', title: 'My Academic Projects' },
  ...academicBackgroundHeaders,

];

const footerColumnLinks = [
  {
    links: [
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact' },
    ],
  },
];

const socialMediaLinks = [
  { url: 'https://twitter.com', icon: <FaXTwitter /> },
  { url: 'https://facebook.com', icon: <BiLogoFacebookCircle /> },
  { url: 'https://instagram.com', icon: <BiLogoInstagram /> },
  { url: 'https://linkedin.com', icon: <BiLogoLinkedinSquare /> },
  { url: 'https://youtube.com', icon: <BiLogoYoutube /> },
];

const About: React.FC = () => {
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderAbout
          heading="About Me"
          description="Hello! I'm Alexandre Jacquemard, a student with a big passion for web development, digital marketing, and project management. Explore my journey and learn more informations about me."
        />
        <div className="flex flex-row container justify-between py-12 md:py-16 lg:py-20">
          <div className="blog-content w-4/6">
            <div id="about-me" className="mb-24 lg:mb-32">
              <AboutMeLongContent />
            </div>
            <div id="section5" className="mb-24 lg:mb-32">
              <ExperiencesCards
                heading="My Experiences"
                description="Here are some highlights of my professional journey."
                blogPosts={[
                  {
                    url: '/about/digital-korner-internship',
                    image: { src: '/images/wpconnect.png', alt: 'Image 1' },
                    readTime: '(May 2022 - November 2022)',
                    title: 'Digital Marketing Intern - DIGITAL KORNER, Nantes',
                    description: 'Click on this card to learn more about the missions and projects i completed for Digital Korner during my internship',
                  },
                  {
                    url: '/about/valeo-internship',
                    image: { src: '/images/ValeoOfficeImage.jpg', alt: 'Image 2' },
                    readTime: '(April 2022 - July 2022)',
                    title: 'Digitalization Process Intern - VALEO FRANCE',
                    description: 'Click on this card to learn more about the missions and projects i completed for Valeo France during my internship',
                  },
                ]}
              />
            </div>
            <div id="section8" className="mb-24 lg:mb-32">
              <ProjectsCards
                heading="My Academic Projects"
                description="Click on each cards to see more details about my academic projects"
                blogPost2s={[
                  {
                    url: '/about/neoma-projects',
                    image: { src: '/images/neoma.jpg', alt: 'Image 1' },
                    title: 'My Academic Projects at NEOMA',
                    description: 'Click on this card to learn more about the academic projects i completed for NEOMA Business School',
                  },
                  {
                    url: '/about/epitech-projects',
                    image: { src: '/images/epitech.jpg', alt: 'Image 2' },
                    title: 'My Academic Projects at EPITECH',
                    description: 'Click on this card to learn more about the academic projects i completed for NEOMA Business School',
                  },
                ]}
              />
            </div>
            <div id="academic-background" className="mb-24 lg:mb-32">
              <AcademicBackground />
            </div>
          </div>
          <TableOfContents sections={mainSections} />
        </div>
        <Footer
          image={{ src: 'logo.png', alt: 'Logo' }}
          footerText="© 2024 Alexandre Jacquemard. All rights reserved."
          columnLinks={footerColumnLinks}
          socialMediaLinks={socialMediaLinks}
        />
      </Suspense>
    </div>
  );
};

export default About;
