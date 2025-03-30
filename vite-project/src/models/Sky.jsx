import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; 
import skyScene from "../assets/3d/sky.glb";
import starScene from "../assets/3d/Star.glb";

const Sky = ({ rotation = [0, 0, 0], isDayMode, planePosition, planeRotation }) => {
  const { scene } = useGLTF(skyScene);
  const { scene: stars } = useGLTF(starScene);
  const starsRef = useRef();

  // State to track whether stars should be rendered
  const [shouldRenderStars, setShouldRenderStars] = useState(!isDayMode);

  // Handle the sky material and its emissive color
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        if (isDayMode) {
          child.material.color = new THREE.Color("#87CEEB"); // Day Sky
          child.material.emissive = new THREE.Color("#000000");
          child.material.emissiveIntensity = 0;
        } else {
          child.material.color = new THREE.Color("#243B55"); // Night Sky
          child.material.emissive = new THREE.Color("#2C5373");
          child.material.emissiveIntensity = 0.2;
        }
      }
    });

    if (stars) {
      // Initially, set stars visibility to false in day mode
      stars.visible = !isDayMode;
    }
  }, [isDayMode, scene, stars]);

  // Update stars' render status only when isDayMode changes
  useEffect(() => {
    if (!isDayMode) {
      setShouldRenderStars(true);  // Only start rendering stars when in night mode
    } else {
      setShouldRenderStars(false);  // Remove stars in day mode
    }
  }, [isDayMode]);

  // 🌟 Move Stars Based on Plane's Movement and Rotate Stars with Sky's Rotation
  useFrame(() => {
    if (starsRef.current && !isDayMode && planePosition) {
      // Update the rotation and position every frame
      starsRef.current.rotation.y += 0.005; // Adjust this value for the rotation speed
      starsRef.current.position.x = planePosition.x * 0.5; // Adjust the movement
      starsRef.current.position.y = 100; // Keep a fixed height for the stars
      starsRef.current.position.z = planePosition.z * 0.5; // Depth movement
    }
  });
  

  return (
    <>
      <mesh rotation={rotation}>
        <primitive object={scene} />
      </mesh>

      {/* Conditionally render stars based on night mode */}
      {!isDayMode && shouldRenderStars && (
        <mesh rotation={rotation}>
          <primitive object={stars} ref={starsRef} />
        </mesh>
      )}
    </>
  );
};

export default Sky;
