// components/AcademicBackground.tsx
// components/AcademicBackground.tsx
import React, { Suspense } from 'react';
import 'tailwindcss/tailwind.css';

interface Section {
    id: string;
    title: string;
    paragraphs?: string[];
    subHeadings?: string[];
    bulletPoints?: string[];
  }

const sections: Section[] = [
        { 
          id: 'section6', 
          title: 'Academic Background', 
          paragraphs: [
            "My academic background is anchored in comprehensive programs that have equipped me with a robust foundation in both business and technology.",
          ],
          subHeadings: [
            "Formation"
          ]
        },
        { 
          id: 'section7', 
          title: 'Formation', 
          paragraphs: [
            "I have been fortunate to pursue rigorous academic programs that align with my career goals. Here are the key institutions and programs that have shaped my education:",
          ],
          bulletPoints: [
            "<strong>NEOMA Business School</strong> (2021 - 2026): Major in Innovation, Marketing, Digital & Digital Management.",
            "<strong>EPITECH</strong> (2021 - 2026): Web development program focused on front-end technologies and frameworks."
          ]
        },
        { 
          id: 'section9', 
          title: 'Detailed Skills', 
          paragraphs: [
            "Throughout my academic and professional journey, I have developed a diverse skill set that spans technical expertise and soft skills. Below is a detailed breakdown of my skills."
          ],
          subHeadings: [
            "Technical Skills",
            "Soft Skills",
            "Language Proficiency"
          ],
          bulletPoints: [
            "<strong>Web Development:</strong> HTML, CSS, JavaScript, PHP. Frameworks: Vue, Laravel, React, React Native. CMS: WordPress, WordPress CLI with custom coding.",
            "<strong>Marketing:</strong> Email marketing, Social media marketing, Content creation.",
            "<strong>Video Editing:</strong> Tools: Shotcut, After Effects, OBS.",
            "<strong>Automation:</strong> Google Script, Spreadsheet automation.",
            "<strong>Project Management:</strong> Backlog management, Customer support, Microsoft Project.",
            "<strong>Innovation:</strong> Continuously finding new tools and methods to solve problems.",
            "<strong>Adaptability:</strong> Quickly learning new skills and adapting to changing environments.",
            "<strong>Problem-solving:</strong> Effectively addressing and resolving challenges in both individual and team settings.",
            "<strong>English:</strong> IELTS score: 6 (B2 level). Proficient in professional and academic settings, including presenting, writing reports, and interacting with international teams.",
            "<strong>French:</strong> Native speaker."
          ]
        },
        { 
          id: 'section10', 
          title: 'Project Examples', 
          paragraphs: [
            "Here are some examples of projects I have worked on, showcasing my technical and management skills."
          ],
          bulletPoints: [
            "<strong>Internal Tool for Valeo:</strong> Used HTML, CSS, and Google Script to automate corporate card request processes.",
            "<strong>E-commerce Website at EPITECH:</strong> Utilized React, TailwindCSS, and JavaScript to develop a responsive online store.",
            "<strong>Mobile Application Development:</strong> Created a mobile app using React Native and Figma for design.",
            "<strong>Customer Support and Backlog Management at Digital Korner:</strong> Managed customer queries and prioritized tasks for the development team.",
            "<strong>Video Editing and Digital Marketing:</strong> Created tutorial videos and managed digital marketing campaigns to increase brand visibility and customer engagement."
          ]
        },
        { 
          id: 'section10', 
          title: 'Certifications and Awards', 
          bulletPoints: [
            "<strong>IELTS Certification:</strong> Score of 6/9.",
            "<strong>Web Development Certification:</strong> Web integration, web development, and mobile application development from EPITECH."
          ]
        },
        { 
          id: 'section11', 
          title: 'Hobbies and Interests', 
          paragraphs: [
            "Outside of my professional and academic pursuits, I have a range of hobbies and interests that enrich my life and complement my skills."
          ],
          bulletPoints: [
            "<strong>Music:</strong> Passionate about discovering new music and DJing in my free time.",
            "<strong>Cooking:</strong> Enjoy experimenting with new recipes and culinary techniques.",
            "<strong>Traveling:</strong> Love exploring new cultures and cuisines, which broadens my perspective and enhances my creativity."
          ]
        }
      ];


      export const academicBackgroundHeaders = sections.map(section => ({
        id: section.id,
        title: section.title,
      }));
      
      const AcademicBackground: React.FC = () => {
        return (
          <div className="container">
            <Suspense fallback={<div>Loading...</div>}>
              <div className="w-full blog-content">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-24 lg:mb-32">
                    <h1 className="text-3xl font-bold mb-6 lg:mb-8">{section.title}</h1>
                    {section.paragraphs && section.paragraphs.map((paragraph, index) => (
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
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        );
      };
      
      export default AcademicBackground;