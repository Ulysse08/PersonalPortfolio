import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi'
import { items } from './menuItems'
import { Sidebar } from './Sidebar'
import { Button } from '@relume_io/relume-ui'
import { FaArrowUpLong } from 'react-icons/fa6'

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-background border-b shadow-background py-2 px-[5%]">
      <div className="container flex justify-between  items-center ">
      <Link
          to="/"
          className=""
        >
          <h1 className='flex flex-row items-start justify-start justify-items-center gap-x-1 lg:justify-self-end text-xl font-light font-Logo'>
            <span className="font-bold text-main">Alexandre</span> Jacquemard
          </h1>
        </Link>
        <div className="block lg:hidden">
          <Sidebar />
        </div>
        <ul className="hidden lg:flex lg:items-center lg:flex-row gap-8">
          {items.slice(0, -1).map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="flex items-center justify-between py-2 antialiased text-text transition-colors hover:scale-105 hover:text-main"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="  rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer transition-all ease-in-out active:border-main bg-gradient-to-tr from-secondary to-secondary border-accent text-text"
            >
              <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-40 group-hover:h-[150%] opacity-10"></span>
              <span className="relative text-text">Get in Touch</span>{' '}
              <FaArrowUpLong className="ml-3 text-text rotate-45" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
