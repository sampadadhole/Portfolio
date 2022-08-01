import React from "react";

function Navbar() {
  return (
    <div className="max-w-xs ml-auto">
      <div className="flex justify-between mr-7 my-4">
        <div>
          <a href="#About">About</a>
        </div>
        <div>
          <a href="#Experience">Experience</a>
        </div>
        <div>
          <a href="#Projects">Projects</a>
        </div>

        <div>
          <a target="_blank" href="https://www.linkedin.com/in/sampada-dhole/">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
