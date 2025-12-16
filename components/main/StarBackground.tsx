"use client";

import React, { useState, useRef, Suspense, JSX, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

import * as random from "maath/random/dist/maath-random.esm";

// const StarBackground = (props: JSX.IntrinsicElements["group"]) => {
//   const ref = useRef<THREE.Group>(null!);
//   const [sphere] = useState<Float32Array>(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group ref={ref} rotation={[0,0, Math.PI / 4]}>
//     <Points
//         positions={sphere}
//         stride={3}
//         frustumCulled
//         {...props}
//     >
//         <PointMaterial
//             transparent
//             color="#fff"
//             size={0.002}
//             sizeAttenuation={true}
//             depthWrite={false}
//         />
//     </Points>
// </group>
//   );
// };
const StarBackground = (props: JSX.IntrinsicElements["group"]) => {
  // Destructure props to separate the ref from the rest
  const { ref, ...rest } = props;

  const localRef = useRef<THREE.Group>(null!);
  const [sphere] = useState<Float32Array>(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );
  useFrame((state, delta) => {
    // Use your internal 'localRef' for animations
    localRef.current.rotation.x -= delta / 10;
    localRef.current.rotation.y -= delta / 15;
  });

  return (
    // Use your internal 'localRef' here
    <group ref={localRef} rotation={[0, 0, Math.PI / 4]}>
      <Points
        positions={sphere}
        stride={3}
        frustumCulled
        // Spread only the 'rest' of the props, excluding the ref
        {...rest}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
