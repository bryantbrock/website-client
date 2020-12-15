import React from 'react'
import {humanToSlug} from 'utils'

const Navbar = ({links, title, subtitle}) => {
  return <div className="flex mx-auto py-5 w-full justify-between">
    <div id="nav-name">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div id="nav-links" className="flex items-center flex-grow max-w-sm">
      <ul className="flex justify-between text-sm w-full">
        {links.map((name, idx) =>
          <li key={idx}><a href={humanToSlug(name)} className="nav-link">{name}</a></li>)}
      </ul>
    </div>
  </div>
}

export default Navbar