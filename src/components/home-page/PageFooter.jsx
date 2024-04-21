import React, { useState } from "react";
import "./PageFooter.css";

function PageFooter() {
  return (
    <footer>
      <div>© 2024 Caleb Hefty</div>
      <div>
        heftywwiimaps@gmail.com | Source Code available{" "}
        <a
          className="light-link"
          href="https://github.com/heftyc/heftywwiimaps"
        >
          here
        </a>
      </div>
    </footer>
  );
}
export default PageFooter;
