import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingShapes = () => {
  const group = useRef<THREE.Group>(null);
  const torus1 = useRef<THREE.Mesh>(null);
  const torus2 = useRef<THREE.Mesh>(null);
  const sphere = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (group.current) {
      group.current.rotation.y = time * 0.1;
    }
    
    if (torus1.current) {
      torus1.current.rotation.x = time * 0.3;
      torus1.current.rotation.z = time * 0.2;
    }
    
    if (torus2.current) {
      torus2.current.rotation.x = -time * 0.2;
      torus2.current.rotation.y = time * 0.3;
    }
    
    if (sphere.current) {
      sphere.current.position.y = Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <group ref={group}>
      {/* Main glowing sphere */}
      <mesh ref={sphere}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#9333ea"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Floating torus 1 */}
      <mesh ref={torus1} position={[2, 1, 0]}>
        <torusGeometry args={[0.6, 0.2, 16, 50]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Floating torus 2 */}
      <mesh ref={torus2} position={[-2, -1, 0]}>
        <torusGeometry args={[0.5, 0.15, 16, 50]} />
        <meshStandardMaterial color="#ec4899" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Small orbiting spheres */}
      <mesh position={[2.5, 0, 1.5]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
      
      <mesh position={[-2.5, 0.5, -1.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const ContactSphere = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#0a0a1f']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, 2, -3]} intensity={1} color="#9333ea" />
        <pointLight position={[5, -2, 3]} intensity={0.8} color="#06b6d4" />
        <FloatingShapes />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default ContactSphere;
