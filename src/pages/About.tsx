// components/About.tsx
import React, { Suspense } from 'react';
import 'tailwindcss/tailwind.css';

import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi';

import { aboutMeHeaders } from '../components/AboutMeComponent/LongContentBio';
import { academicBackgroundHeaders } from '../components/AboutMeComponent/AcademicBackground';
import { experiencesHeaders } from '../components/AboutMeComponent/ExperiencesCards';
import Footer from '../components/GlobalComponent/Footer';

const HeaderAbout = React.lazy(() => import('../components/AboutMeComponent/HeaderAbout'));
const AboutMeLongContent = React.lazy(() => import('../components/AboutMeComponent/LongContentBio'));
const AcademicBackground = React.lazy(() => import('../components/AboutMeComponent/AcademicBackground'));
const ExperiencesCards = React.lazy(() => import('../components/AboutMeComponent/ExperiencesCards'));
const TableOfContents = React.lazy(() => import('../components/AboutMeComponent/TableOfContents'));

const mainSections = [
  ...aboutMeHeaders,
  { id: 'section5', title: 'Experiences' },
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
          description="Hello! I'm Alexandre Jacquemard, a passionate web developer, digital marketer, and project manager. Explore my journey and achievements."
          images={[
            { src: '/path/to/your/image1.jpg', alt: 'Image 1' },
            { src: '/path/to/your/image2.jpg', alt: 'Image 2' },
          ]}
        />
        <div className="flex flex-row container py-12 md:py-16 lg:py-20">
          <div className="blog-content">
            <div id="about-me" className="mb-24 lg:mb-32">
              <AboutMeLongContent />
            </div>
            <div id="section5" className="mb-24 lg:mb-32">
              <ExperiencesCards
                heading="My Experiences"
                description="Here are some highlights of my professional journey."
                blogPosts={[
                  {
                    url: '#',
                    image: { src: 'image1.jpg', alt: 'Image 1' },
                    category: 'Category 1',
                    readTime: '5 min read',
                    title: 'Experience 1',
                    description: 'Description of experience 1',
                  },
                  {
                    url: '#',
                    image: { src: 'image2.jpg', alt: 'Image 2' },
                    category: 'Category 2',
                    readTime: '6 min read',
                    title: 'Experience 2',
                    description: 'Description of experience 2',
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
