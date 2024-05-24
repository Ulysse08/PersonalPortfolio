// components/AboutMeLongContent.tsx
import React, { Suspense } from 'react';
import 'tailwindcss/tailwind.css';



const sections = [
  {
    id: 'section1',
    title: 'Who Am I',
    paragraphs: [
      "Hello! I'm Alexandre Jacquemard, a third-year business student at NEOMA Business School, passionate about web development, digital marketing, and project management. What sets me apart is my proficiency in self-learning and problem-solving. Throughout my journey, I have consistently embraced challenges and opportunities to learn and innovate.",
      "From a young age, I have been fascinated by computers and technology. My interest in web development began with an introductory course at NEOMA, where I discovered the basics of HTML and CSS. This initial exposure sparked a passion that led me to pursue further education at EPITECH. There, I completed an accelerated web development program, earning a grade 2 degree in web integration, web development, and mobile application development, specializing in front-end technologies.",
      "My passion for digital marketing stems from my interest in freelance entrepreneurship and the belief that digital marketing is crucial for building a sustainable digital agency. This field allows me to combine my love for web development with strategies to find and convert leads into customers."
    ],
    subHeadings: [
      "Personal Background",
      "Early Interests",
      "Passion for Digital Marketing"
    ],
    quote: {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    }
  },
  {
    id: 'section2',
    title: 'Where I Came From',
    paragraphs: [
      "I come from Le Cellier, a small city in the west of France. My academic journey began with my choice to enroll in the TEMA program at NEOMA, a strategic decision to align with my long-term goal of freelance entrepreneurship. The curriculum's focus on innovation, management, and entrepreneurship, combined with extensive use of digital technology, provided the perfect foundation for my aspirations.",
      "Influential mentors, such as the CEO of Digital Korner and a full-stack developer colleague, significantly shaped my journey. They provided invaluable advice on digital business, tools, and concepts, inspiring me to pursue freelance work. The trust they placed in me at the end of my internship, allowing me to work as a freelance digital marketer and video editor, marked the beginning of my freelance career."
    ],
    subHeadings: [
      "Mentors and Influences"
    ]
  },
  {
    id: 'section3',
    title: 'Meanwhile',
    paragraphs: [
      "During my academic exchange in Gwangju, South Korea, I have had the opportunity to immerse myself in a different culture and expand my educational horizons. Making friends with locals introduced me to new customs and perspectives, enriching my understanding of respect and societal behavior."
    ],
    subHeadings: [
      "Academic and Cultural Experiences"
    ],
    bulletPoints: [
      "<strong>Service Marketing Course:</strong> Equipped me with advanced digital marketing concepts, crucial for my freelance and agency goals.",
      "<strong>Digital Management & ESG Course:</strong> Enhanced my skills in digital team management. Emphasized the importance of ESG principles in building a sustainable business."
    ]
  },
  {
    id: 'section4',
    title: 'My Vision',
    paragraphs: [
      "Beyond becoming an expert in digital marketing and web development, my long-term goal is to establish my own digital agency and eventually create a SaaS (Software as a Service) web application."
    ],
    subHeadings: [
      "Long-term Goals and Contributions"
    ],
    bulletPoints: [
      "<strong>Establishing a Digital Agency:</strong> Provide innovative digital marketing and web development solutions.",
      "<strong>Creating a SaaS Web Application:</strong> Foster innovation and efficiency within the field. Support businesses in optimizing their digital strategies. Contribute to sustainable practices that benefit both the community and the environment."
    ],
    quote: {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    }
  }
];

export const aboutMeHeaders = sections.map(section => ({
  id: section.id,
  title: section.title,
}));

const AboutMeLongContent: React.FC = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full blog-content">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-24 lg:mb-32">
              <h1 className="text-3xl font-bold mb-6 lg:mb-8">{section.title}</h1>
              {section.paragraphs.map((paragraph, index) => (
                <div key={index} className="mb-8 lg:mb-10">
                  {section.subHeadings && section.subHeadings[index] && <h2 id={`${section.id}-${index}`} className="text-2xl font-bold mb-4 mt-6 lg:mt-8 lg:mb-6">{section.subHeadings[index]}</h2>}
                  <p className="mb-4 lg:mb-6">{paragraph}</p>
                </div>
              ))}
              {section.bulletPoints && (
                <ul className="list-disc ml-6 mb-8 lg:ml-8 lg:mb-10">
                  {section.bulletPoints.map((bullet, index) => (
                    <li key={index} className="mb-2 lg:mb-3" dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>
              )}
              {section.quote && (
                <blockquote className="mt-6 mb-8 lg:mt-8 lg:mb-10 p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                  {`“${section.quote.text}” – ${section.quote.author}`}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AboutMeLongContent;
