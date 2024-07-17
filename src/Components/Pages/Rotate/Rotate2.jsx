// // ComputerSkillsScene.js
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Vector3 } from 'three';
// import { Html } from '@react-three/drei';

// const ComputerSkillsScene = () => {
//   const icons = [
//     { name: 'Code', position: new Vector3(0, 0, 0), color: 'blue' },
//     { name: 'Design', position: new Vector3(2, 0, 0), color: 'red' },
//     { name: 'Database', position: new Vector3(-2, 0, 0), color: 'green' },
//     { name: 'Cloud', position: new Vector3(0, 2, 0), color: 'yellow' },
//     { name: 'Security', position: new Vector3(0, -2, 0), color: 'purple' },
//   ];

//   return (
//     <Canvas style={{ height: '100vh', width: '100vw' }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 10]} intensity={1} />

//       {icons.map((icon, index) => (
//         <mesh key={index} position={icon.position}>
//           <sphereGeometry args={[0.5, 32, 32]} />
//           <meshBasicMaterial color={icon.color} />
//           <Html position={[0, 0, 0]}>
//             <div style={{ color: 'white', textAlign: 'center' }}>{icon.name}</div>
//           </Html>
//         </mesh>
//       ))}

//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default ComputerSkillsScene;
