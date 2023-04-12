import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
import { Decal, Float, OrbitControls, useTexture, Preload } from "@react-three/drei";

const Ball = ( props ) => {

  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>

        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          color="#fff"
        />

        <Decal
          flatShading
          rotation={[ 2 * Math.PI, 0, 6.25 ]}
          position={[0, 0, 1]}
          map={decal}
        />
      </mesh>


    </Float>
  )
}
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl ={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>} >
        <OrbitControls
          enableZoom={false}
        />

        <Ball imgUrl={icon} />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default BallCanvas
