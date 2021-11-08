import React, { useState } from "react";

import styled from "styled-components";
import ContactForm from "../features/contactform/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStaylinked,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <ContactBody>
      <div style={{ marginTop: "70px", marginLeft: "100px" }}>
        <h3>
          About This App
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "gold" }} />
        </h3>
        <p>An Mini-eCommerce App for a Company in 72 Hours </p>
        <p>Version : 1.0.0 </p>

        <h3>Developer Details: </h3>
        <div>
          <a
            href="https://www.linkedin.com/in/yoni-bitew-955b971bb/"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                color: "black",
                fontSize: "35px",
                marginLeft: "8px",
                color: "ocean",
              }}
            />
          </a>
          <a href="https://github.com/YoniB1995" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "black", fontSize: "35px", marginLeft: "8px" }}
            />
          </a>
          <a
            href="https://yonib-personal-website.herokuapp.com/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faStaylinked}
              style={{ color: "black", fontSize: "35px", marginLeft: "8px" }}
            />
          </a>
        </div>
      </div>
      <ContactForm />
    </ContactBody>
  );
};

export default ContactUs;

const ContactBody = styled.div``;
