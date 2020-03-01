import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "../components/Container/index";
import LandingPage from "../components/landingpage.js";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <LandingPage />
        <div>
          <main>{children}</main>
        </div>
      </Container>
    </>
  );
};

export default Layout;