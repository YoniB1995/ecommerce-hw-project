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
  font-size: 30px;
  height: 20vh;
`;
