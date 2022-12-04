import React, { Fragment } from "react";
import Navbar from "./Navbar";
import LandingFooter from "./LandingFooter";

export default function MainLayout({ active, children }) {
  return (
    <Fragment>
      <div className="min-h-screen">
        <Navbar active={active} />
        <main>{children}</main>
      </div>
      <LandingFooter />
    </Fragment>
  );
}
