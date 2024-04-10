import React from "react";

const Showreel = () => {
  return (
    <video
      controls
      loop
      autoPlay
      src="/showreel.mp4"
      style={{ height: "100vh", width: "100%" }}
    />
  );
};

export default Showreel;
