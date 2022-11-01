import React from 'react';
import './style.css';
import styled from 'styled-components';
import Sidebar from './components/1_Sidebar';
import Navbar from './components/2_Navbar';
import Carousal from './components/3_Carousal';

export default function App() {
  return (
    <div>
      <Sidebar />
      <Main>
        <Navbar />
        <Carousal />
      </Main>
    </div>
  );
}

const Main = styled.div`
  width: 82%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
`;
