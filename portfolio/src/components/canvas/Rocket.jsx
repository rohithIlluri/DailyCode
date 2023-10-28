import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Rocket = () => {
  const rocket = useGLTF("/rocket.gltf"); // Replace with the path to your rocket model.

  return (
    <group scale={0.02}>
      <primitive object={rocket.scene} />
    </group>
  );
};

const RocketCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Rocket />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RocketCanvas;
