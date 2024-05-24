import React from 'react'
import { Footer } from '../components/GlobalComponent/Footer'
import { NeomaProjects } from '../components/AboutMeComponent/AboutMeSub/Neoma'

import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoLinkedinSquare } from 'react-icons/bi'

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

type Props = {}

function NeomaPage({}: Props) {
  return (
    <div>
      <NeomaProjects
        heading="Projects at NEOMA"
        image={{
          src: '/images/neomaproject.jpg',
          alt: 'Placeholder image',
        }}
      >
        <h3>Website Development for a Fictitious B&B</h3>
        <p>
          As part of a web development course during my first year at NEOMA
          Business School, I embarked on a project to develop a booking website
          for a fictional bed and breakfast (B&B). This project was designed to
          introduce students to the practical applications of web development in
          a business context.
        </p>
        <ul>
          <li>
            <strong>Create a Functional Website:</strong> Develop a
            user-friendly website that allows customers to book rooms online.
          </li>
          <li>
            <strong>Enhance User Experience:</strong> Ensure the site is
            visually appealing and easy to navigate.
          </li>
          <li>
            <strong>Implement Basic Features:</strong> Include essential
            functionalities such as room descriptions, booking forms, and
            contact information.
          </li>
        </ul>
        <p>
          <strong>Technologies Used:</strong> HTML, CSS, JavaScript, Figma
        </p>
        <p>
          <strong>Challenges & Solutions:</strong> Ensuring the website was
          accessible on all devices was solved by using responsive web design
          techniques and testing across various screen sizes. Balancing
          aesthetics with functionality was achieved through iterative design
          and feedback from peers.
        </p>
        <p>
          <strong>Outcomes:</strong> Successfully developed a fully functional,
          visually appealing booking website and gained practical experience in
          web development and project management.
        </p>
        <h3>Digital Marketing Campaign for Vivo</h3>
        <p>
          In a digital marketing course, my team and I were tasked with creating
          a mock digital marketing strategy for the smartphone brand Vivo. This
          project aimed to apply theoretical knowledge to a real-world brand,
          focusing on innovative marketing techniques and building an effective
          online presence.
        </p>
        <ul>
          <li>
            <strong>Market Analysis:</strong> Conduct thorough research on
            Vivo’s target audience and competitors.
          </li>
          <li>
            <strong>Strategy Development:</strong> Create a comprehensive
            digital marketing strategy encompassing various online platforms.
          </li>
          <li>
            <strong>Campaign Execution:</strong> Design mock campaigns and
            materials that could be used in a real marketing scenario.
          </li>
        </ul>
        <p>
          <strong>Technologies Used:</strong> Google Analytics, Canva, Mailchimp
        </p>
        <p>
          <strong>Challenges & Solutions:</strong> Ensuring our campaign
          accurately reflected Vivo’s brand values and messaging was addressed
          by extensive research and aligning our ideas with Vivo’s existing
          campaigns. Creating engaging content was achieved through
          brainstorming sessions and feedback loops.
        </p>
        <p>
          <strong>Outcomes:</strong> Developed a detailed, actionable digital
          marketing strategy and enhanced my understanding of digital marketing
          principles and their practical applications.
        </p>
      </NeomaProjects>
      <Footer
        image={{ src: 'logo.png', alt: 'Logo' }}
        footerText="© 2024 Alexandre Jacquemard. All rights reserved."
        columnLinks={footerColumnLinks}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  )
}

export default NeomaPage
