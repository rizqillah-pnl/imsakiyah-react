import React from 'react'
import { Link } from 'react-router-dom';

export default function NavLink({route,title}) {
  return (
    <div className="nav-links">
      <Link to={route} >
          <p className="text-xs text-justify font-extralight">{title}</p>
      </Link>
    </div>
  );
}
