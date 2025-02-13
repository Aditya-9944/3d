import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { BoxHelper } from "three";
import { useFrame } from "@react-three/fiber";

import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating }) => {
  const ref = useRef();
  const opacityRef = useRef(1); // Track opacity for smooth transition

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!scene) return;
    if (!ref.current) return;

    console.log("Plane Loaded:", scene);

    // Ensure bounding box is computed before adding BoxHelper
    const firstMesh = scene.children.find((child) => child.isMesh);
    if (firstMesh && firstMesh.geometry) {
      firstMesh.geometry.computeBoundingBox();
      firstMesh.geometry.computeBoundingSphere();
      const boxHelper = new BoxHelper(firstMesh, 0xff0000);
      scene.add(boxHelper);

      // Enable transparency
      firstMesh.material.transparent = true;
    }

    // Handle animation state
    if (actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
        opacityRef.current = 1; // Reset opacity when moving
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [scene, actions, isRotating]);

  // Smooth fade-out effect
  useFrame(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        if (!isRotating && opacityRef.current > 0) {
          opacityRef.current -= 0.02; // Reduce opacity gradually
          child.material.opacity = Math.max(opacityRef.current, 0); // Prevent negative opacity
        } else if (isRotating) {
          opacityRef.current = 1; // Reset opacity if moving
          child.material.opacity = 1;
        }
      }
    });
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, 15, 90]}
      rotation={[0, 20.1, 0]}
      scale={[4, 4, 4]}
    />
  );
};

export default Plane;

