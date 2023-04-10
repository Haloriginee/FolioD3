import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';

const Model3D = () => {

  const model3D = useGLTF('./desktop_pc/scene.gltf');

  return (

    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={4}  />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={model3D.scene}
        scale={116}
        position={[0, -4.25, -5.75]}
      />
    </mesh>
  )
}

const Model3DCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl ={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Model3D />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default Model3DCanvas
