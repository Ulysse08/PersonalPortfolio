import React from 'react'

type BlogPost2 = {
  url: string
  image: { src: string; alt: string }
  title: string
  description: string
}

type Props = {
  heading: string
  description: string
  blogPost2s: BlogPost2[]
}

const sections = [
  {
    id: 'section5',
    title: 'My Academic Projects',
  },
]

export const ProjectsCardsHeaders = sections.flatMap(section => [
  { id: section.id, title: section.title },
])

const ProjectsCards: React.FC<Props> = ({
  heading,
  description,
  blogPost2s,
}) => {
  return (
    <section id="section5">
      <div className="container mx-auto px-4">
        <div className="mb-6 w-full md:mb-10 lg:mb-10">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          {blogPost2s.map((post, index) => (
            <a
              key={`${post.title}-${index}`}
              id={`section5-${index}`}
              href={post.url}
              className="flex size-full flex-col items-center justify-start border border-accent rounded-lg hover:scale-[1.025] transition ease-in-out ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              <div className="relative w-full overflow-hidden pt-[66%]">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 size-full object-cover rounded-t-lg"
                  loading="lazy"
                />
              </div>
              <div className='flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6'>
                <div className="flex w-full flex-col items-start justify-start">
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">
                    {post.title}
                  </h2>
                  <p>{post.description}</p>
                  <button className="mt-4 flex items-center text-sm font-semibold">
                    View more <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsCards
