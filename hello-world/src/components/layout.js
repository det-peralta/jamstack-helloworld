  
import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <nav style={{ paddingTop: "20px" }}>
          <Link style={{ fontSize: "24px", paddingRight: "30px" }} to="/">
            Home
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <center>Copyrights &copy; reserved</center>
      </footer>
    </>
  );
};

export default Layout;