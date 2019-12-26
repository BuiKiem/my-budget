import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
