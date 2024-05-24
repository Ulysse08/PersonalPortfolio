import React from 'react';
import { ContactForm } from '../components/ContactComponent/ContactForm';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { Footer } from '../components/GlobalComponent/Footer'; // Assuming you have a Footer component

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
  { url: 'https://linkedin.com', icon: <BiLogoLinkedinSquare /> },
];

const contactFormProps = {
  tagline: "Get in Touch",
  heading: "Contact Me",
  description: "I'd love to hear from you! Fill out the form to get in touch.",
  email: "alexandrejacquemard0@gmail.com",
  phone: "+33 7 68 69 46 92",
  address: "30 route des folies siffait, 44850, Le Cellier, France",
  button: { title: "Submit" }
};

function Contact() {
  return (
    <div>
      <ContactForm {...contactFormProps} />
      <Footer
        image={{ src: 'logo.png', alt: 'Logo' }}
        footerText="© 2024 Alexandre Jacquemard. All rights reserved."
        columnLinks={footerColumnLinks}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  );
}

export default Contact;
