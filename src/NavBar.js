import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/managemeals">Manage Meals</Link>
            </li>
            <li>
                <Link to="/planday">Plan Day</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar