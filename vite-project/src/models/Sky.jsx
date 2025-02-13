import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three"; 
import skyScene from "../assets/3d/sky.glb";

const Sky = ({ rotation = [0, 0, 0], isDayMode }) => {
  const { scene } = useGLTF(skyScene);

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        if (isDayMode) {
          // 🌞 Day Mode - Bright Sky
          child.material.color = new THREE.Color("#87CEEB"); // Sky Blue
          child.material.emissive = new THREE.Color("#000000"); // No Glow
          child.material.emissiveIntensity = 0;
        } else {
          // 🌙 Night Mode - Lighter Dark Sky
          child.material.color = new THREE.Color("#243B55"); // **Lighter Blue**
          child.material.emissive = new THREE.Color("#2C5373"); // **Soft Blue Glow**
          child.material.emissiveIntensity = 0.2; // **Lower glow for a subtle effect**
        }
      }
    });
  }, [isDayMode, scene]);

  return (
    <mesh rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
