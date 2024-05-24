// components/HeaderAbout.tsx
import React from "react";
import type { ImageProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export const HeaderAbout: React.FC<Props> = ({ heading, description, images }) => {
  return (
    <header className="px-[5%] border-b">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-flow-col lg:grid-cols-2 lg:items-center">
          <div className="max-w-[40rem]">
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

              <a
                href="#_"
                className="rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer active:border-main shadow-sm hover:shadow-lg transition-all ease-in-out bg-gradient-to-tr from-main to-main border-accent text-white"
              >
                <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-[150%] opacity-10"></span>
                <span className="relative text-background">More About Me</span>
                <div className="ml-4 text-md text-background" />
              </a>
            </div>
          </div>
          <div className="h-[30rem] overflow-hidden lg:h-screen">
            <div className="grid w-full grid-cols-2 gap-x-4">
              <div className="-mt-[120%] grid size-full animate-loop-vertically grid-cols-1 gap-4 self-center">
                {images.map((image, index) => (
                  <div key={`${image.src}-${index}`} className="grid size-full grid-cols-1 gap-4">
                    <div className="relative w-full pt-[120%]">
                      <img
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
                {images.map((image, index) => (
                  <div key={`${image.src}-${index}`} className="grid size-full grid-cols-1 gap-4">
                    <div className="relative w-full pt-[120%]">
                      <img
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                        src={image.src}
                        alt={image.alt}
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
