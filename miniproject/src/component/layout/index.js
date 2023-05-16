import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
