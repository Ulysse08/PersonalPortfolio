'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import type { ImageProps } from '@relume_io/relume-ui'

type Links = {
  title: string
  url: string
}

type ColumnLinks = {
  links: Links[]
}

type SocialMediaLinks = {
  url: string
  icon: React.ReactNode
}

type Props = {
  image: ImageProps
  columnLinks: ColumnLinks[]
  socialMediaLinks: SocialMediaLinks[]
  footerText: string
}

export const Footer: React.FC<Props> = ({ image, footerText, columnLinks = [], socialMediaLinks = [] }) => {
  return (
    <footer className=" pt-6 md:pt-8 lg:pt-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-10 pb-8 md:pb-10 lg:pb-12 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 ">
          <Link to="/" className="">
            <h1 className="flex flex-row items-start justify-start justify-items-center gap-x-1 lg:justify-self-end text-xl font-light font-Logo">
              <span className="font-bold text-main">Alexandre</span> Jacquemard
            </h1>
          </Link>
          {columnLinks.map((column, index) => (
            <ul key={`column-${index}`} className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
              {column.links.map((link, linkIndex) => (
                <li key={`${link.title}-${linkIndex}`} className="font-semibold">
                  <a href={link.url} className="focus-visible:outline-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a key={`${link.icon}-${index}`} href={link.url} className="focus-visible:outline-none">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-gray-light text-center border-b border-t dark:bg-neutral-700 pb-4 py-6 md:flex-row md:gap-x-6 md:pb-6 md:pt-6">
        <span className="font-medium">
          You could have been anywhere on the internet, yet you're here. Thanks
          for visiting!
        </span>
      </div>
      <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 text-sm md:flex-row md:gap-x-6 py-6">
        <p className="mt-8 md:mt-0">{footerText}</p>
      </div>
    </footer>
  )
}

export default Footer;
