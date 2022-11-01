import React from 'react';
import styled from 'styled-components';

import { BiSearchAlt2 } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <Searchbar>
          <input type="text" placeholder="search" />
          <BiSearchAlt2 />
        </Searchbar>
        <Navicons>
          <div onClick={() => alert('trying to Login / SignOut')}>
            <CgProfile />
          </div>
          <div onClick={() => alert("toggle to Darkmode / Lightmode")}>
            <BsToggleOff />
          </div>
        </Navicons>
      </NavbarContainer>
    </>
  );
}

const NavbarContainer = styled.div`  
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const Searchbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  width: 50%;
  background: #fff;
  box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  input {
    background: transparent;
    border: none;
    font-size: 1rem;
    width: 100%;
  }
`;

const Navicons = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // gap: 1rem;

  div {
    padding: 0.5rem;
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
    cursor: pointer;
  }  
`;
