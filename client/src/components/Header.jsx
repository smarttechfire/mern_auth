import React from 'react'
import { Link } from 'react-router-dom';

const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 1,
    name: "Sign In",
    link: "/sign-in",
  },
];

export default function Header() {
  return (
    <div className=' bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>      
           <Link to='/'>
              <h1 className=' font-bold'>
                    Auth App
              </h1>
           </Link>
            <ul className=' flex gap-4'>
            {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className=" inline-block"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}
