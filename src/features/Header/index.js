import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './logo.png'

function Header() {
  return (
    <header className="appHeader">
      <nav>
        <Link className="logoLink" to="/search">
          <img src={Logo} alt="H&M logo" />
        </Link>
        <ul>
          <li>
            <Link to="/search">Search heroes</Link>
          </li>
          <li>
            <Link to="/css-tricks">Css tricks</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
