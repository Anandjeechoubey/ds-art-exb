import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  title: string;
  link: string;
};

const models = [
  {
    title: "Akira",
    link: "https://sketchfab.com/models/7308cad495ca4fd7a5770b5ef671e344/embed",
  },
  {
    title: "Future Room",
    link: "https://sketchfab.com/models/dc894992442b48adb9d1d0b51a13170e/embed",
  },
  {
    title: "Fantasy World",
    link: "https://sketchfab.com/models/fbc6db4ec9d345febb5a260399367686/embed",
  },
  {
    title: "Main Building Voxel",
    link: "https://sketchfab.com/models/09678f7915024c96a5705d4f8504fc05/embed",
  },
  {
    title: "Cyberpunked",
    link: "https://sketchfab.com/models/5e1506c02efa43109d84449e0ef6bbb1/embed",
  },
];

const FuutureRoomMocks = () => {
  return (
    <div
      style={{
        width: "30%",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="/shot.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
      <img
        src="/shot3.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
    </div>
  );
};

const AkiraMocks = () => {
  return (
    <div style={{ width: "40%", height: "100vh" }}>
      <video
        autoPlay
        loop
        src="/akira.mp4"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></video>

      <img
        src="/shot2.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
    </div>
  );
};

const VoxelMocks = () => {
  return (
    <div style={{ width: "30%", height: "100vh" }}>
      <img
        src="/snap1.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
      <img
        src="/snap2.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
    </div>
  );
};

const FantasyWorldMocks = () => {
  return (
    <div style={{ width: "30%", height: "100vh" }}>
      <img
        src="/fantasy.jpg"
        style={{ height: "100vh", width: "100%", background: "grey" }}
      ></img>
    </div>
  );
};

const IsodMocks = () => {
  return (
    <div style={{ width: "30%", height: "100vh" }}>
      <img
        src="/iso.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
      <img
        src="/iso.png"
        style={{ height: "50vh", width: "100%", background: "grey" }}
      ></img>
    </div>
  );
};

const ModelPreview = ({ title, link }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  //@ts-ignore
  console.log(parseInt(id));
  //@ts-ignore
  const a = parseInt(id);
  return (
    <div style={{ display: "flex" }}>
      {a === 0 ? (
        <AkiraMocks />
      ) : a === 1 ? (
        <FuutureRoomMocks />
      ) : a === 2 ? (
        <FantasyWorldMocks />
      ) : a === 3 ? (
        <VoxelMocks />
      ) : (
        <IsodMocks />
      )}
      <iframe
        //@ts-ignore
        title={models[parseInt(id) || 0].title}
        //@ts-ignore
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        style={{ width: "auto", height: "100vh", flexGrow: 1 }}
        // src={link}
        //@ts-ignore
        src={models[parseInt(id) || 0].link}
      ></iframe>
    </div>
  );
};

export default ModelPreview;
