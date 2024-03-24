import React, { useState } from "react";
import "./HomePage.css";
import HeadBanner from "../components/HeadBanner";
import PageFooter from "../components/PageFooter";
function Page404() {
  return (
    <div>
      <HeadBanner />
      <div className="welcome">404 - Page not found.</div>
      <a href="/">Return Home</a>
      <PageFooter />
    </div>
  );
}
export default Page404;
