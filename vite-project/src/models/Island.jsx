import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three"; // ✅ Import Three.js
import { a } from "@react-spring/three";
import islandScene from "../assets/3d/island.glb";

const Island = ({ setCurrentStage, currentStage, isDayMode, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport, scene } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  useEffect(() => {
    console.log("Island Loaded:", nodes, materials);
  }, [nodes, materials]);

  const lastX = useRef(0);
  const isRotating = useRef(false);
  const rotationSpeed = useRef(0);

  // ✅ Pointer (Mouse/Touch) Events for Dragging
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    isRotating.current = true;
    lastX.current = event.touches ? event.touches[0].clientX : event.clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    isRotating.current = false;
  };

  const handlePointerMove = (event) => {
    if (!isRotating.current || !islandRef.current) return;
    event.stopPropagation();
    event.preventDefault();

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    islandRef.current.rotation.y += delta * 0.1 * Math.PI; // ✅ Slower rotation
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  // ✅ Rotation with Inertia Effect
  useFrame(() => {
    if (!islandRef.current) return;

    islandRef.current.rotation.y += rotationSpeed.current;
    rotationSpeed.current *= 0.96; // ✅ Smoothly slows down
    if (Math.abs(rotationSpeed.current) < 0.0001) rotationSpeed.current = 0;

    let rotationY = islandRef.current.rotation.y;
    rotationY = ((rotationY % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); // Normalize between 0 and 2π

    let newStage = null;
    const range = Math.PI / 12;

    if (rotationY > Math.PI / 4 - range && rotationY < Math.PI / 4 + range) newStage = 1;
    else if (rotationY > (Math.PI / 2) + Math.PI / 4 - range && rotationY < (Math.PI / 2) + Math.PI / 4 + range) newStage = 2;
    else if (rotationY > Math.PI + Math.PI / 4 - range && rotationY < Math.PI + Math.PI / 4 + range) newStage = 3;
    else if (rotationY > (3 * Math.PI / 2) + Math.PI / 4 - range && rotationY < (3 * Math.PI / 2) + Math.PI / 4 + range) newStage = 4;

    if (newStage !== currentStage) {
      console.log("Setting Stage:", newStage);
      setCurrentStage(newStage);
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [gl]);

  // ✅ Day & Night Mode (If Implemented)
  useEffect(() => {
    scene.background = new THREE.Color(isDayMode ? 0x87ceeb : 0x0a0a0a); // 🌞 Blue Sky (Day) | 🌙 Dark (Night)
  }, [isDayMode, scene]);

  if (!nodes) return null; // Ensure the scene only renders when `nodes` is available

  return (
    <a.group ref={islandRef} {...props} position={[0, -3, 0]} scale={[2, 2, 2]}>
      {/* ✅ Lighting Adjustments for Day/Night */}
      {isDayMode ? (
        <directionalLight intensity={1} position={[5, 10, 5]} color="white" />
      ) : (
        <directionalLight intensity={0.5} position={[5, 10, 5]} color="blue" />
      )}

      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
};

export default Island;
