import React, { useState } from "react";
import { Burger } from "@mantine/core";
import { When } from "react-if";
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar(){
  const [opened, setOpened] = useState(false);
  const title = opened ? 'opened' : 'closed'

  return (
    <div>
      <span className="burger-menu">
        <Burger 
          opened={opened}
          onClick={() => setOpened(!opened)}
          title={title}
          size='xl'
          aria-label="open navigation"
        />
      </span>
      <When condition={opened === true}>
      <article className="navigation-menu">
        <ul className="nav-items">
          <li>
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li>
            <Link to='/portfolio' className="nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to='/about' className="nav-link">About</Link>
          </li>
          <li>
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>
        </ul>
      </article>
      </When>
    </div>
  )
}