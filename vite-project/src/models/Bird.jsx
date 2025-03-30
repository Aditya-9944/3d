import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import starScene from "../assets/3d/Star.glb"; // Update to your star asset

const Stars = ({ isDayMode }) => {
  const { scene } = useGLTF(starScene);
  const starsRef = useRef();
  
  // Adjust the radius of the star movement (closer to island)
  const starRadius = 50;  // Try a smaller radius

  useFrame(() => {
    if (starsRef.current && !isDayMode) {
      // Rotate stars around the island smoothly
      starsRef.current.rotation.y += 0.002; // Smooth rotation speed
      // Log to check rotation and position
      console.log("Stars Rotation:", starsRef.current.rotation.y);
      
      // Move stars in a circular orbit
      const x = Math.cos(starsRef.current.rotation.y) * starRadius;
      const z = Math.sin(starsRef.current.rotation.y) * starRadius;

      starsRef.current.position.set(x, 100, z);  // Set new position
      console.log("Stars position:", starsRef.current.position); // Debugging position
    }
  });

  // Skip rendering stars in day mode
  if (isDayMode) return null;

  return (
    <group ref={starsRef}>
      <primitive object={scene} />
    </group>
  );
};

export default Stars;
