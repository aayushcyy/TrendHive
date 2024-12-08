import React from "react";
import loadingAnimation from "../assets/loadingAnimation.mp4";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <video
        src={loadingAnimation}
        autoPlay
        loop
        muted
        className="w-32 h-32"
      ></video>
    </div>
  );
}

export default Loader;
