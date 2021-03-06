import React, { useState } from "react";
import styled from "styled-components";
import SideDrawer from "../navbar/SideDrawer";
import Backdrop from "../navbar/Backdrop";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <HeaderBody>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Navbar click={() => setSideToggle(true)} />
    </HeaderBody>
  );
};

export default Header;

const HeaderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 15px;
  height: 20vh;

  @media (max-width: 960px) {
    background: #f4f4f4;
    border-bottom: 1px thin black;
  }
`;
