import React from "react";
import { useGLTF } from "@react-three/drei";

const Star = () => {
  const { scene } = useGLTF("/assets/3d/Star.glb"); // ✅ Load from the public folder

  return <primitive object={scene} scale={1.5} />;
};

export default Star;
