// components/TableOfContents.tsx
import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TOCProps {
  sections: { id: string; title: string; subHeaders?: { id: string, title: string }[] }[];
}

gsap.registerPlugin(ScrollTrigger);

const TableOfContents: React.FC<TOCProps> = ({ sections }) => {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: "#toc",
        start: "top 15%",
        endTrigger: "#toc-container",
        end: "bottom 0%",
      },
    });
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.15;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="toc-container" className="ml-20 hidden lg:block w-1/4">
      <div id="toc" className="stickyTable py-4 rounded border-accent border">
        <h3 className="text-xl font-semibold mb-4 text-text px-4">Table of Contents</h3>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className='py-1 px-4 hover:bg-secondary'>
              <a href={`#${section.id}`} className="text-text hover:underline flex flex-row items-center whitespace-nowrap" onClick={(e) => handleClick(e, section.id)}>
                <BsArrowRightShort className='mr-2'/>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
