import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {

  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(8888), { radius: 1.2 })

  useFrame(() => {
    ref.current.rotation.y += 0.0005
    ref.current.rotation.x += 0.0005
  })

  return (
    <group roatation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} frustrumCulled positions={sphere} stride={3} {...props}>
        <PointMaterial
          size={0.002}
          transparent
          color="#F1EFE5"
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {

  return (
    <div className='absolute w-full h-auto inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >

        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />

      </Canvas>
    </div>
  )

}

export default StarsCanvas
