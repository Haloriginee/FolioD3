import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

const Shield = () => {

  const shield = useGLTF("./shield/scene.gltf")

  return (

    <mesh>

      <hemisphereLight intensity={5.5} groundColor="black" />
      <pointLight intensity={50}  />
      <spotLight
        position={[0, 0, 270]}
        angle={0.12}
        penumbra={0}
        intensity={1}
        //castShadow
        //shadow-mapSize={1024}
      />
      <primitive
        object={shield.scene}
        scale={8.5}
        position={[0, 0, 0]}
        rotation-y={0}
      />

    </mesh>
  )
}

const ShieldCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera ={{
        fov:45,
        near:0.1,
        far:200,
        position:[0, 0, 10]
      }}
      gl ={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <Shield/>

      </Suspense>
    </Canvas>
  )
}

export default ShieldCanvas
