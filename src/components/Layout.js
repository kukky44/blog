import React from "react";
import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children, location }) => {
  return (
    <div className="layout">
      <Header location={location} />
      <div className="contentWrapper">
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
