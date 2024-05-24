// HomeHeader.tsx
import { Link } from 'react-router-dom'
import React, { Suspense } from 'react'
import type { ImageProps, ButtonProps as BaseButtonProps } from '@relume_io/relume-ui'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuDownload } from 'react-icons/lu'

interface ButtonProps extends BaseButtonProps {
  href?: string;
}

type Props = {
  heading: string
  description: string
  buttons: ButtonProps[]
  image: ImageProps
}

export type HomeHeaderProps = React.ComponentPropsWithoutRef<'section'> & Props

const LazyButton = React.lazy(() =>
  import('@relume_io/relume-ui').then(module => ({ default: module.Button })),
)

const HomeHeaderDefaults: Props = {
  heading:
    "Hi! I'm Alexandre Jacquemard, I believe in Simplicity and Efficiency",
  description:
    "I'm a third-year business student at NEOMA Business School, Passionate about web development, digital marketing & project management, I'm currently on an academic exchange in Gwangju in South Korea.",
  buttons: [
    { title: 'Resume', href: '/CV-Alexandre_Jacquemard.pdf' },
    { title: 'More About Me', variant: 'secondary' },
  ],
  image: {
    src: "/images/HomeHeaderImage.jpg",
    alt: 'Header image',
  },
}

export const HomeHeader: React.FC<HomeHeaderProps> = props => {
  const { heading, description, buttons, image } = {
    ...HomeHeaderDefaults,
    ...props,
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-[3fr_2.5fr] lg:items-center">
          <div>
            <h1 className="mb-5 text-5xl font-heading font-semibold md:mb-6 md:text-9xl lg:text-10xl text-text">
              Hi! I'm <span className="text-main">Alexandre Jacquemard</span>, I
              believe in Simplicity and Efficiency
            </h1>
            <p className="md:text-md text-text">{description}</p>

            <div className="mt-6 flex gap-x-6 md:mt-8">
              {buttons.map((button, index) => (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                  {button.title === 'Resume' ? (
                    <a
                      href={button.href}
                      download
                      className="rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer transition-all ease-in-out active:border-main bg-gradient-to-tr from-secondary to-secondary border-accent text-text"
                    >
                      <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-40 group-hover:h-[150%] opacity-10"></span>
                      <span className="relative text-text">{button.title}</span>
                      <LuDownload className="ml-3 text-lg text-text" />
                    </a>
                  ) : (
                    <Link
                      to={"/about"}
                      className="rounded-md  relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer active:border-main shadow-sm hover:shadow-lg transition-all ease-in-out  bg-gradient-to-tr from-main to-main border-accent text-white"
                    >
                      <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-[150%] opacity-10"></span>
                      <span className="relative text-background">
                        More About Me
                      </span>
                      <FaArrowRightLong className="ml-4 text-md text-background" />
                    </Link>
                  )}
                </Suspense>
              ))}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover rounded-xl"
              alt={image.alt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

HomeHeader.displayName = 'HomeHeader'
