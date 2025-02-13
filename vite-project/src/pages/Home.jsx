import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";
import HomeInfo from "../components/Homeinfo"; // ✅ Import HomeInfo
import sakura from "../assets/sakura.mp3";
import soundoff from "../assets/icons/soundoff.png";
import soundon from "../assets/icons/soundon.png";
import sunIcon from "../assets/icons/sun.png";   // 🌞 Light Mode Icon
import moonIcon from "../assets/icons/moon.png";

const Home = () => {
  const [isDayMode, setIsDayMode] = useState(true); // 🌞 Default is Day Mode
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(new Audio("/sakura.mp3"));

  const [isRotating, setIsRotating] = useState(false);
  const [islandRotation, setIslandRotation] = useState([0, -Math.PI / 2, 0]);
  const [currentStage, setCurrentStage] = useState(null); // ✅ Stage tracking
  const [showPopup, setShowPopup] = useState(false);
  const controlsRef = useRef(null);
  const isDragging = useRef(false);
  let animationFrameId = useRef(null);

  // ✅ Initialize audio inside useEffect (Fixes blank screen issue)
  useEffect(() => {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play().catch((e) => console.error("Audio play failed:", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  // ✅ Detect Mouse Dragging
  useEffect(() => {
    if (!controlsRef.current) return;

    const handleDrag = () => {
      setIsRotating(true);
      if (isDragging.current) clearTimeout(isDragging.current);

      isDragging.current = setTimeout(() => {
        setIsRotating(false);
      }, 300);
    };

    const controls = controlsRef.current;
    controls.addEventListener("change", handleDrag);

    return () => {
      controls.removeEventListener("change", handleDrag);
    };
  }, []);

  // ✅ Smoother Keyboard Rotation
  const rotationSpeed = Math.PI / 300; // Slower and smoother

  const smoothRotate = (direction) => {
    setIslandRotation(([x, y, z]) => [x, y + direction * rotationSpeed, z]);
    animationFrameId.current = requestAnimationFrame(() => smoothRotate(direction));
  };

  const handleKeyDown = (event) => {
    if (!animationFrameId.current) {
      if (event.key === "ArrowLeft") smoothRotate(1);
      if (event.key === "ArrowRight") smoothRotate(-1);
    }
    setIsRotating(true);
  };

  const handleKeyUp = () => {
    cancelAnimationFrame(animationFrameId.current);
    animationFrameId.current = null;
    setIsRotating(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  useEffect(() => {
    console.log("Current Stage in Home:", currentStage); // ✅ Debugging log
    if (currentStage) {
      setShowPopup(true);
    }
  }, [currentStage]); // ✅ Only updates when currentStage changes

  return (
    <section className="w-full h-screen relative">
      {/* ✅ Show popup only when `showPopup` is true */}
      {showPopup && currentStage && (
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <HomeInfo currentStage={currentStage} />
        </div>
      )}

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 20, 100], near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting Conditions */}
          {isDayMode ? (
            <>
              <directionalLight intensity={0.3} position={[1, 5, 10]} />
              <ambientLight intensity={0.5} />
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.8} />
            </>
          ) : (
            <>
              <ambientLight intensity={0.1} />
              <spotLight intensity={2} position={[0, 20, 0]} angle={1} penumbra={1} castShadow />
            </>
          )}
          <OrbitControls ref={controlsRef} enableZoom={false} />

          {/* ✅ Sky now rotates smoothly with the island */}
          <Sky rotation={islandRotation} isDayMode={isDayMode} />

          {/* ✅ Pass setCurrentStage to detect rotation points */}
          <Island
            isRotating={isRotating}
            isDayMode={isDayMode}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={[0, -4, -20]}
            rotation={islandRotation}
            scale={[2, 2, 2]}
          />

          {/* Bird */}
          <Bird position={[0, 25, -20]} scale={[5, 5, 5]} />

          {/* ✅ Plane responds smoothly to keyboard and mouse dragging */}
          <Plane
            isRotating={isRotating}
            position={[0, 25, -20]}
            rotation={[0, islandRotation[1] + Math.PI / 2, 0]}
            scale={[5, 5, 5]}
          />
        </Suspense>
      </Canvas>

      {/* ✅ Music Button */}
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      <div className="absolute bottom-2 right-2">
        <img
          src={isDayMode ? sunIcon : moonIcon}
          alt="day-night-toggle"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsDayMode(!isDayMode)}
        />
      </div>
    </section>
  );
};

export default Home;
