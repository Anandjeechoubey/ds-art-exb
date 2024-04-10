import React, { useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

// import { OrbitControls } from "drei";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// @ts-ignore
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { OBJLoader } from "three-obj-loader";
// @ts-ignore
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Link from "next/link";

// @ts-ignore
import * as THREE from "three";
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// OBJLoader(THREE);

// const Box = () => {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// };

// const FutureRoom = () => {
//   const obj = useLoader(OBJLoader, "/futureroom.obj");
//   console.log(obj);
//   return (
//     <mesh>
//       <primitive object={obj} scale={0.01} />
//     </mesh>
//   );
// };

// const FutureRoomMTL = () => {
//   const mtl = useLoader(MTLLoader, "/futureroom.mtl");
//   console.log(mtl);
//   return (
//     <mesh>
//       <primitive object={mtl} scale={0.01} />
//     </mesh>
//   );
// };

const FutureRoomGLTF = () => {
  const gltf = useLoader(GLTFLoader, "/aira_fina1.gltf");
  console.log(gltf);
  return (
    <mesh>
      <primitive object={gltf.scene} scale={0.01} />
    </mesh>
  );
};

// const DogMTL = () => {
//   const mtl = useLoader(OBJLoader, "/dog.obj");
//   console.log(mtl);
//   return (
//     <mesh>
//       <primitive object={mtl} scale={0.01} />
//     </mesh>
//   );
// };

function Dog() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Link href="/">Home</Link>
      </div>
      <Canvas shadows>
        <Suspense fallback={null}>
          <OrbitControls autoRotate />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <FutureRoomGLTF />
          {/* 
        <group position={[0, 0, 0]}>
          <mesh ref={objRef}>
            <OBJLoader path="/" onLoad={onLoad} args={["/dog.obj"]} />
          </mesh>
        </group> */}
        </Suspense>
      </Canvas>
      {/* <Link href="/">Home</Link> */}
    </div>
  );
}

export default Dog;
