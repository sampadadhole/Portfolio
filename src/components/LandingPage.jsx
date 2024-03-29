import React from "react";
import me from "../images/me.png";
import Textra from "react-textra";

function LandingPage() {
  return (
    <div className="flex justify-between my-32 mx-auto flex-wrap-reverse font-sans max-w-7xl">
      <div>
        <h1 className="text-7xl">Sampada Dhole</h1>
        <h1 id="textslider">
          <Textra
            effect="rightLeft"
            duration={1000}
            data={[
              "Tech Enthusiast",
              "Passionate Developer",
              "Full Stack Developer",
              "Software Development Engineer",
            ]}
          />
        </h1>
        <button className="p-2 border bg-[#71717A] border-gray-500 rounded-full mx-1 my-3">
          <a href="mailto:sampadadhole4@gmail.com">Contact me</a>
        </button>
      </div>
      <div className="">
        <img src={me} alt="BigCo Inc. logo" />
      </div>
    </div>
  );
}

export default LandingPage;
