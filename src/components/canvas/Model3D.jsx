import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';

const Model3D = ({ isMobile }) => {

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
        scale={isMobile ? 65 : 116}
        position={isMobile ? [0, -3.2, -2.2] : [0, -4.25, -5.75]}
      />
    </mesh>
  )
}

const Model3DCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const MedQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(MedQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    MedQuery.addEventListener('change', handleMediaQueryChange);

    return () => {

      MedQuery.removeEventListener('change', handleMediaQueryChange);

    }

  },[])

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

        <Model3D isMobile={isMobile} />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default Model3DCanvas
