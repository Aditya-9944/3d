import React from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useGLTF} from '@react-three/drei';

const Bird = () => {
    const {scene,animations} = useGLTF(birdScene);
  return (
    <mesh position={[0, 20, 70]} scale={[5,5,5]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird