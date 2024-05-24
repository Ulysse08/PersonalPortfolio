// components/AcademicBackground.tsx
import React, { Suspense, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import gsap from 'gsap';

interface Section {
    id: string;
    title: string;
    paragraphs?: string[];
    subHeadings?: string[];
    bulletPoints?: (string | { text: string, subPoints?: string[] })[];
}

const sections: Section[] = [
    {
        id: 'section6',
        title: 'Academic Background',
        paragraphs: [
          "My academic background is anchored in comprehensive programs that have equipped me with a robust foundation in both business and technology.",
            "I have been fortunate to pursue rigorous academic programs that align with my career goals. Here are the key institutions and programs that have shaped my education:",
        ],
        bulletPoints: [
            "<strong>NEOMA Business School</strong> (2021 - 2026): Major in Innovation, Marketing, Digital & Digital Management.",
            "<strong>EPITECH</strong> (2021 - 2026): Web development program focused on front-end technologies and frameworks."
        ]
    },
    {
        id: 'section7',
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
            { text: "<strong>Web Development:</strong> Proficient in HTML, CSS, JavaScript, and PHP.", subPoints: [
                "Frameworks: Vue, Laravel, React, React Native.",
                "CMS: WordPress, WordPress CLI with custom coding.",
                "Example: For a group project at EPITECH, I led the front-end development using React and TailwindCSS, creating a seamless and visually appealing e-commerce platform."
            ]},
            { text: "<strong>Marketing:</strong> Email marketing, Social media marketing, Content creation.", subPoints: [
                "Example: Created a series of automated email campaigns for Digital Korner, resulting in a 15% increase in customer engagement."
            ]},
            { text: "<strong>Video Editing:</strong> Tools: Shotcut, After Effects, OBS.", subPoints: [
                "Example: Edited tutorial videos for Digital Korner’s YouTube channel, which contributed to a reduction in customer support tickets by providing clear instructional content."
            ]},
            { text: "<strong>Automation:</strong> Google Script, Spreadsheet automation.", subPoints: [
                "Example: Created a Google Script-based tool for Valeo that automated corporate card request processes, significantly reducing administrative workload."
            ]},
            { text: "<strong>Project Management:</strong> Backlog management, Customer support, Microsoft Project.", subPoints: [
                "Example: Managed the backlog for Digital Korner’s development team, ensuring timely delivery of features and bug fixes."
            ]},
            { text: "<strong>Innovation:</strong> Continuously finding new tools and methods to solve problems.", subPoints: [
                "Example: Introduced a new project management tool to streamline team collaboration, which improved project delivery timelines."
            ]},
            { text: "<strong>Adaptability:</strong> Quickly learning new skills and adapting to changing environments.", subPoints: [
                "Example: Adapted to new technologies and methodologies during my internships, which allowed me to successfully deliver projects despite initial unfamiliarity."
            ]},
            { text: "<strong>Problem-solving:</strong> Effectively addressing and resolving challenges in both individual and team settings.", subPoints: [
                "Example: Developed a troubleshooting guide for Digital Korner’s support team, which significantly reduced the number of escalated issues."
            ]},
            { text: "<strong>Language Proficiency:</strong>", subPoints: [
                "<strong>English:</strong>",
                "IELTS score: 6 (B2 level)",
                "Proficient in professional and academic settings, including presenting, writing reports, and interacting with international teams.",
                "Example: Successfully presented a marketing strategy project in English during my exchange program in South Korea, receiving positive feedback for clarity and engagement.",
                "<strong>French:</strong> Native speaker."
            ]}
        ]
    },
    {
        id: 'section9',
        title: 'Project Examples',
        paragraphs: [
            "Here are some examples of projects I have worked on, showcasing my technical and management skills."
        ],
        bulletPoints: [
            "<strong>Internal Tool for Valeo:</strong> Used HTML, CSS, and Google Script to automate corporate card request processes, reducing administrative time and improving efficiency.",
            "<strong>E-commerce Website at EPITECH:</strong> Utilized React, TailwindCSS, and JavaScript to develop a responsive online store, ensuring an optimal user experience across devices.",
            "<strong>Mobile Application Development:</strong> Created a mobile app using React Native and Figma for design, providing a seamless and interactive user interface.",
            "<strong>Customer Support and Backlog Management at Digital Korner:</strong> Managed customer queries and prioritized tasks for the development team, enhancing customer satisfaction and streamlining development workflows.",
            "<strong>Video Editing and Digital Marketing:</strong> Created tutorial videos and managed digital marketing campaigns to increase brand visibility and customer engagement, leading to a decrease in support tickets and an increase in social media interactions."
        ]
    },
    {
        id: 'section10',
        title: 'Certifications',
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
            "<strong>Music:</strong> Passionate about discovering new music and DJing in my free time. This hobby enhances my creativity and ability to stay current with trends.",
            "<strong>Cooking:</strong> Enjoy experimenting with new recipes and culinary techniques, which fosters my creativity and attention to detail.",
            "<strong>Traveling:</strong> Love exploring new cultures and cuisines, which broadens my perspective and enhances my creativity. Traveling allows me to gain new insights and ideas that I can apply to my professional work."
        ]
    }
];

export const academicBackgroundHeaders = sections.map(section => ({
    id: section.id,
    title: section.title,
}));

const AcademicBackground: React.FC = () => {
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        sectionsRef.current.forEach((section, index) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.3,
                ease: 'power3.out'
            });
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <Suspense fallback={<div>Loading...</div>}>
                <div className="w-full blog-content">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            id={section.id}
                            ref={el => sectionsRef.current[index] = el!}
                            className="mb-24 lg:mb-32"
                        >
                            <h1 className="text-3xl font-bold mb-6 lg:mb-8">{section.title}</h1>
                            {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                                <div key={pIndex} className="mb-8 lg:mb-10">
                                    {section.subHeadings && section.subHeadings[pIndex] && (
                                        <h2
                                            id={`${section.id}-${pIndex}`}
                                            className="text-2xl font-bold mb-4 mt-6 lg:mt-8 lg:mb-6"
                                        >
                                            {section.subHeadings[pIndex]}
                                        </h2>
                                    )}
                                    <p className="mb-4 lg:mb-6">{paragraph}</p>
                                </div>
                            ))}
                            {section.bulletPoints && (
                                <ul className="list-disc ml-6 mb-8 lg:ml-8 lg:mb-10">
                                    {section.bulletPoints.map((bullet, bIndex) => (
                                        <li key={bIndex} className="mb-2 lg:mb-3">
                                            {typeof bullet === 'string' ? (
                                                <div dangerouslySetInnerHTML={{ __html: bullet }} />
                                            ) : (
                                                <div>
                                                    <div dangerouslySetInnerHTML={{ __html: bullet.text }} />
                                                    {bullet.subPoints && (
                                                        <ul className="list-disc ml-6 mt-2 lg:ml-8 lg:mt-3">
                                                            {bullet.subPoints.map((subPoint, spIndex) => (
                                                                <li key={spIndex} className="mb-2 lg:mb-3" dangerouslySetInnerHTML={{ __html: subPoint }} />
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                        </li>
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
