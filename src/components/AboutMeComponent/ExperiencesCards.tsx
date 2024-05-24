import React from 'react'

type BlogPost = {
  url: string
  image: { src: string; alt: string }
  readTime: string
  title: string
  description: string
}

type Props = {
  heading: string
  description: string
  blogPosts: BlogPost[]
}

const sections = [
  {
    id: 'section5',
    title: 'My Experiences',
  },
]

export const experiencesHeaders = sections.flatMap(section => [
  { id: section.id, title: section.title },
])

const ExperiencesCards: React.FC<Props> = ({
  heading,
  description,
  blogPosts,
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
          {blogPosts.map((post, index) => (
            <div
              key={`${post.title}-${index}`}
              id={`section5-${index}`}
              className="flex size-full flex-col items-center justify-start border border-border-primary ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              <a
                href={post.url}
                className="relative w-full overflow-hidden pt-[66%]"
              >
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
              </a>
              <div className='flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6'>
                <div className="mb-4 flex items-center">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {post.readTime}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <a
                    className="mb-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                    href={post.url}
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      {post.title}
                    </h2>
                  </a>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesCards
