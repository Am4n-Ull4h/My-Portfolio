import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

const ParticlesGlobe = () => {
  const particlesRef = useRef();

  const sphere = useMemo(() => {
    const particles = new Float32Array(3000);
    for (let i = 0; i < particles.length; i += 3) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const x = Math.sin(phi) * Math.cos(theta) * 2; // Scaled by 2
      const y = Math.sin(phi) * Math.sin(theta) * 2; // Scaled by 2
      const z = Math.cos(phi) * 2; // Scaled by 2
      particles[i] = x;
      particles[i + 1] = y;
      particles[i + 2] = z;
    }
    return particles;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={particlesRef} positions={sphere} stride={3}>
      <PointMaterial transparent color="lightblue" size={0.05} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

const App = () => {
  return (
    <div className="canvas-container absolute bottom-0 right-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <ParticlesGlobe />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
