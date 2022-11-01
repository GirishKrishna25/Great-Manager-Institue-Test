import React from 'react';
import styled from 'styled-components';
import { RiMovie2Line } from 'react-icons/ri';
import { GiBinoculars } from 'react-icons/gi';
import { BsPlayFill } from 'react-icons/bs';
import { RiSlideshow3Line } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';
import { FaGuilded } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <h2>Light's Out!</h2>
      </LogoContainer>
      <ItemContainer>
        <Label>MENU</Label>
        <Item>
          <div>
            <GiBinoculars />
          </div>
          <button onClick={() => alert('Opened Explore')}>Explore</button>
        </Item>
        <Item>
          <div>
            <BsPlayFill />
          </div>
          <button onClick={() => alert('Opened Movies')}>Movies</button>
        </Item>
        <Item>
          <div>
            <RiSlideshow3Line />
          </div>
          <button onClick={() => alert('Opened TV Shows')}>TV Shows</button>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Label>MISC</Label>
        <Item>
          <div>
            <BiHelpCircle />
          </div>
          <button onClick={() => alert('Opened Help Center')}>
            Help Center
          </button>
        </Item>
        <Item>
          <div>
            <FaGuilded />
          </div>
          <button onClick={() => alert('Opened Guilded')}>Guilded</button>
        </Item>
        <Item>
          <div>
            <RiSlideshow3Line />
          </div>
          <button onClick={() => alert('Opened Language')}>Language</button>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <Label>MY LIST</Label>
        <Item>
          <div>Login to see your favourites.</div>
        </Item>
      </ItemContainer>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  border-right: 2px solid black;

  width: 18%;
  height: 100vh;
  background: #F3F3F3;
`;

const LogoContainer = styled.div`
  // background: #31AABC;
  padding: 1.8rem;
  display: flex;
  justify-content: center;
`;

const ItemContainer = styled.div`  
  // background: red;
`;

const Label = styled.h5`
  padding: 1.8rem;
  color: #C2C2C9;
  font-size: 0.7rem;
  letter-spacing: 1px;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1.8rem;
  
  div {
    // background: blue;
    padding: 0.4rem;
    border-radius: 25%;
    display: flex;
    align-items: center;
    cursor: pointer;    
  }
  button {
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
