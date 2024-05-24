"use client";

import React from 'react';
import type { ImageProps } from "@relume_io/relume-ui";
import { gsap } from "gsap";

type Props = {
  heading: string;
  image: ImageProps;
  children: React.ReactNode;
};

export type EpitechProjectsProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const EpitechProjects = (props: EpitechProjectsProps) => {
  const { heading, children, image } = {
    ...EpitechProjectsDefaults,
    ...props,
  } as Props;

  React.useEffect(() => {
    gsap.fromTo("img", { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <div className="prose">{children}</div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const EpitechProjectsDefaults: EpitechProjectsProps = {
  heading: "Projects at EPITECH",
  children: (
    <>
      <h3>Group Web Development Projects</h3>
      <p>
        At EPITECH, the curriculum was highly project-based, providing hands-on experience in developing various types of websites. This included e-commerce sites, blogs, and mobile applications, using modern frameworks and technologies.
      </p>
      <ul>
        <li><strong>Team Collaboration:</strong> Work effectively in teams to build complex web applications.</li>
        <li><strong>Technical Mastery:</strong> Gain proficiency in front-end and back-end development.</li>
        <li><strong>Project Management:</strong> Manage timelines, tasks, and deliverables efficiently.</li>
      </ul>
      <p><strong>Key Projects:</strong></p>
      <ul>
        <li><strong>E-commerce Website:</strong>
          <ul>
            <li><strong>Objective:</strong> Develop a fully functional e-commerce platform.</li>
            <li><strong>Features:</strong> Product listings with detailed descriptions and images, shopping cart and checkout system, user authentication and profile management.</li>
            <li><strong>Technologies Used:</strong> React, TailwindCSS, JavaScript, Figma.</li>
            <li><strong>Challenges:</strong> Ensuring security for user data and payment processes, solved through implementing secure authentication methods and encryption techniques.</li>
          </ul>
        </li>
        <li><strong>Mobile Application:</strong>
          <ul>
            <li><strong>Objective:</strong> Create a cross-platform mobile app.</li>
            <li><strong>Features:</strong> Interactive user interface, real-time data synchronization, push notifications.</li>
            <li><strong>Technologies Used:</strong> React Native, Figma.</li>
            <li><strong>Challenges:</strong> Ensuring smooth performance across different devices, addressed by optimizing code and thorough testing on various devices.</li>
          </ul>
        </li>
        <li><strong>Blog Platform:</strong>
          <ul>
            <li><strong>Objective:</strong> Build a blog platform with a content management system (CMS).</li>
            <li><strong>Features:</strong> Post creation and editing, commenting system, responsive design.</li>
            <li><strong>Technologies Used:</strong> Vue, Laravel, styled-components.</li>
            <li><strong>Challenges:</strong> Implementing a user-friendly CMS, solved by researching best practices and incorporating intuitive design elements.</li>
          </ul>
        </li>
      </ul>
      <p><strong>Outcomes:</strong> Delivered high-quality web applications as part of a collaborative team, enhanced technical skills and project management abilities.</p>
      <h3>Competitions and Group Projects</h3>
      <p>
        <strong>Startup Project at NEOMA:</strong>
        As part of an entrepreneurship course, my team and I developed a prototype app, business plan, and financial projections for a community-based business similar to BlaBlaCar. This project emphasized innovation and practical application of business concepts.
      </p>
      <ul>
        <li><strong>Prototype App:</strong> An interactive prototype demonstrating the core functionalities of the app.</li>
        <li><strong>Business Plan:</strong> Detailed document covering market research, business model, marketing strategy, and financial forecasts.</li>
        <li><strong>Pitch Presentation:</strong> A polished presentation delivered to a jury, showcasing the viability and potential of the business idea.</li>
      </ul>
      <p><strong>Technologies Used:</strong> Figma, Microsoft Project, Excel.</p>
      <p><strong>Challenges & Solutions:</strong> Ensuring the business concept was unique and feasible, achieved through brainstorming sessions and market research. Covering all aspects of the business in the plan was addressed by dividing tasks among team members and leveraging individual strengths.</p>
      <p><strong>Outcomes:</strong> Successfully developed and presented a viable business concept, gained valuable experience in entrepreneurship and business planning.</p>
    </>
  ),
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
