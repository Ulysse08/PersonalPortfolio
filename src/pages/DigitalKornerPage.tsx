import React from 'react'
import {
  DigitalKorner,
  DigitalKornerDefaults,
} from '../components/AboutMeComponent/AboutMeSub/DigitalKorner'
import { Footer } from '../components/GlobalComponent/Footer'
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

function DigitalKornerPage({}: Props) {
  return (
    <div>
      <DigitalKorner {...DigitalKornerDefaults} />
      <Footer
        image={{ src: 'logo.png', alt: 'Logo' }}
        footerText="© 2024 Alexandre Jacquemard. All rights reserved."
        columnLinks={footerColumnLinks}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  )
}

export default DigitalKornerPage
