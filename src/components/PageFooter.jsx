import React, { useState } from "react";

function PageFooter() {
  return (
    <footer>
      <div>© 2024 Caleb Hefty</div>
      <div>
        Source Code available{" "}
        <a
          className="light-link"
          href="https://github.com/heftyc/heftywwiimaps"
        >
          here
        </a>{" "}
        under the MIT License | Images available in the public domain
      </div>
    </footer>
  );
}
export default PageFooter;
