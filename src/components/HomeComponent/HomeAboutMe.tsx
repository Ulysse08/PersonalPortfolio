import React from 'react'
import { Button } from '@relume_io/relume-ui'
import type { ImageProps, ButtonProps } from '@relume_io/relume-ui'

type Props = {
  heading: string
  description: string
  buttons: ButtonProps[]
  image: ImageProps
}

export type HomeAboutMeProps = React.ComponentPropsWithoutRef<'header'> & Props

const HomeAboutMeDefaults: Props = {
  heading: 'A Little About Me',
  description:
    "I'm currently pursuing a degree in Innovation, Marketing, Digital & Digital Management at NEOMA Business School. I also completed a web development program at EPITECH. With a strong orientation in project management, I specialize in digital marketing and programming. I bring innovation, adaptability, and new technologies to every project I undertake.",
  buttons: [{ title: 'Button' }, { title: 'Button', variant: 'secondary' }],
  image: {
    src: '/images/HomeImage.jpg',
    alt: 'Placeholder image',
  },
}

export const HomeAboutMe: React.FC<HomeAboutMeProps> = props => {
  const { heading, description, buttons, image } = {
    ...HomeAboutMeDefaults,
    ...props,
  }

  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 ">
            <img
              src={image.src}
              className="w-full object-cover rounded-xl"
              alt={image.alt}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-5 text-5xl font-heading font-semibold md:mb-6 md:text-9xl lg:text-10xl text-text">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-6 md:mt-8">
              <div className="mt-6 flex gap-x-6 md:mt-8">
                <a
                  href="/about"
                  className="rounded-md  relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer active:border-main shadow-sm hover:shadow-lg transition-all ease-in-out  bg-gradient-to-tr from-main to-main border-accent text-white"
                >
                  <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-[150%] opacity-10"></span>
                  <span className="relative text-background">
                    More About Me{' '}
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/alexandre-jacquemard-70b665220/"
                  className=" rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer transition-all ease-in-out active:border-main bg-gradient-to-tr from-secondary to-secondary border-accent text-text"
                >
                  <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-[150%] opacity-10"></span>
                  <span className="relative text-text">Take a Look at my Linkedin</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

HomeAboutMe.displayName = 'HomeAboutMe'
