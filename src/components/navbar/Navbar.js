import React, { useState } from "react";
import About from "../about/About";
import { Text } from "@mantine/core";
import { When } from "react-if";

import './Navbar.scss';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  }

  return (
    <>
      <ul id='navbar'>
        <li>
          <a href='#about' onClick={() => setShow(true)}>
            About Me
          </a>
        </li>
        <li>
          <a href='#skills'>
            Skills
          </a>
        </li>
        <li>
          <a href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li>
          <a href='#contact'>
            Contact
          </a>
        </li>
      </ul>
        <About 
          opened={show}
          handleCloseModal={handleCloseModal}
        />
    </>
  )
}