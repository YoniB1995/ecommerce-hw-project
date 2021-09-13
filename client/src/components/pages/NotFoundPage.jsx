import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <PageBody>
      <img
        src="https://blog.sinapsis.agency/wp-content/uploads/2021/04/DEFINICIONES.-ERROR-404.png"
        height="80%"
        alt="page not found"
      />
      Page not found! Please go back to the Website
      <Link to="/">Go Back</Link>
    </PageBody>
  );
};

export default NotFoundPage;

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
`;
