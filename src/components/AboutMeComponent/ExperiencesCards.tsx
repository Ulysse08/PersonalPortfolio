// components/ExperiencesCards.tsx
import React from 'react';

type BlogPost = {
  url: string;
  image: { src: string; alt: string };
  category: string;
  readTime: string;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  blogPosts: BlogPost[];
};

const sections = [
  {
    id: 'section5',
    title: 'My Journey',
  }
];

export const experiencesHeaders = sections.flatMap(section => [
  { id: section.id, title: section.title },
]);

const ExperiencesCards: React.FC<Props> = ({ heading, description, blogPosts }) => {
  return (
    <section id="section5">
      <div className="">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          {blogPosts.map((post, index) => (
            <div key={`${post.title}-${index}`} id={`section5-${index}`} className="flex size-full flex-col items-center justify-start">
              <a href={post.url} className="mb-6 w-full ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="aspect-video size-full object-cover"
                  loading="lazy"
                />
              </a>
              <div className="mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">{post.category}</p>
                <p className="inline text-sm font-semibold">{post.readTime}</p>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <a className="mb-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2" href={post.url}>
                  <h2 className="text-xl font-bold md:text-2xl">{post.title}</h2>
                </a>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesCards;
