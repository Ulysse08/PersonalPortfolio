// components/HeaderAbout.tsx
import React from "react";
import type { ImageProps } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

type Props = {
  heading: string;
  description: string;
};

const images = [
  { src: "/images/About1.jpg", alt: "About 1" },
  { src: "/images/About2.jpg", alt: "About 2" },
  { src: "/images/About3.jpg", alt: "About 3" },
  { src: "/images/HomeImage.jpg", alt: "About 4" },
  { src: "/images/epitech.jpg", alt: "About 5" },
  { src: "/images/ValeoOfficeImage.jpg", alt: "About 6" },
];

export const HeaderAbout: React.FC<Props> = ({ heading, description }) => {
  return (
    <header className="px-[5%] border-b">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-flow-col lg:grid-cols-2 lg:items-center">
          <div className="max-w-[30rem]">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-6 md:mt-8">
              <a
                href="#_"
                className="rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer transition-all ease-in-out active:border-main bg-gradient-to-tr from-secondary to-secondary border-accent text-text"
              >
                <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-40 group-hover:h-[150%] opacity-10"></span>
                <span className="relative text-text">Resume</span>
                <div className="ml-3 text-lg text-text" />
              </a>

              <Link
                to="/contact"
                className="rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer active:border-main shadow-sm hover:shadow-lg transition-all ease-in-out bg-gradient-to-tr from-main to-main border-accent text-white"
              >
                <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-[150%] opacity-10"></span>
                <span className="relative text-background">Contact Me</span>
                <div className="ml-4 text-md text-background" />
              </Link>
            </div>
          </div>
          <div className="h-[30rem] overflow-hidden lg:h-screen">
            <div className="grid w-full grid-cols-2 gap-x-4">
              <div className="-mt-[120%] grid size-full animate-loop-vertically grid-cols-1 gap-4 self-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div key={`${images[index % images.length].src}-${index}`} className="grid size-full grid-cols-1 gap-4">
                    <div className="relative w-full pt-[120%]">
                      <img
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                        src={images[index % images.length].src}
                        alt={images[index % images.length].alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
                {[5, 4, 3, 2, 1].map((index) => (
                  <div key={`${images[index % images.length].src}-${index}`} className="grid size-full grid-cols-1 gap-4">
                    <div className="relative w-full pt-[120%]">
                      <img
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                        src={images[index % images.length].src}
                        alt={images[index % images.length].alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAbout;
