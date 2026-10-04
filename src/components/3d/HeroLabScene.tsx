import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

function LabDirectModel({ onLoaded }: { onLoaded: () => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();
    
    // Configure Draco decoder
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/models/lab.glb',
      (gltf) => {
        if (!isMounted || !groupRef.current) return;
        
        const scene = gltf.scene;
        const wrapper = new THREE.Group();

        // Calculate raw model bounds
        const box = new THREE.Box3().setFromObject(scene);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);

        // Center inner scene at (0, 0, 0)
        scene.position.set(-center.x, -center.y, -center.z);
        wrapper.add(scene);

        // Scale model comfortably within view
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scaleFactor = 4.5 / maxDim;
          wrapper.scale.set(scaleFactor, scaleFactor, scaleFactor);
        }

        // Adjust materials for rich dark-navy contrast & avoid white washed-out glare
        scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              materials.forEach((mat) => {
                mat.side = THREE.DoubleSide;
                // Avoid blinding white bloom
                if ('roughness' in mat) (mat as THREE.MeshStandardMaterial).roughness = 0.4;
                if ('metalness' in mat) (mat as THREE.MeshStandardMaterial).metalness = 0.2;
              });
            }
          }
        });

        // Set into group ref
        if (groupRef.current) {
          while (groupRef.current.children.length > 0) {
            groupRef.current.remove(groupRef.current.children[0]);
          }
          groupRef.current.add(wrapper);
        }
        onLoaded();
      },
      undefined,
      (error) => {
        console.error('Error loading /models/lab.glb:', error);
        onLoaded(); // Fallback so spinner stops
      }
    );

    return () => {
      isMounted = false;
      dracoLoader.dispose();
    };
  }, []);

  return <group ref={groupRef} />;
}

export const HeroLabScene: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      
      {/* 1. Deep Navy Hero Base Background */}
      <div className="absolute inset-0 bg-[#02006F] pointer-events-none" />

      {/* 2. Radial & Linear Contrast Gradient (Ensures White Text is 100% Crisp & Readable) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(2,0,111,0.72) 0%, rgba(2,0,111,0.88) 55%, rgba(2,0,111,0.98) 100%),
            linear-gradient(to bottom, rgba(2,0,111,0.9) 0%, transparent 30%, transparent 70%, rgba(2,0,111,0.95) 100%)
          `
        }}
      />

      {/* 3. Loading Pill Indicator */}
      {!loaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center space-x-3 bg-[#02006F]/95 text-white px-6 py-3.5 rounded-2xl border border-[#FFC000]/40 font-sans text-sm shadow-2xl backdrop-blur-lg">
          <div className="w-5 h-5 border-2 border-[#FFC000] border-t-transparent rounded-full animate-spin" />
          <span className="font-semibold">{`Chargement du modèle 3D (lab.glb)...`}</span>
        </div>
      )}

      {/* 4. Interactive 3D Canvas */}
      <Canvas
        className="w-full h-full relative z-0 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 2.0, 7.5], fov: 45, near: 0.1, far: 1000 }}
      >
        {/* Soft balanced studio lighting */}
        <ambientLight intensity={0.9} color="#FFFFFF" />
        <hemisphereLight skyColor="#E0E8FF" groundColor="#02006F" intensity={1.1} />
        <directionalLight position={[12, 20, 15]} intensity={1.8} color="#FFFFFF" castShadow />
        <directionalLight position={[-12, 12, -12]} intensity={1.2} color="#FFC000" />
        <pointLight position={[0, 6, 0]} intensity={1.4} color="#FFFFFF" />

        <LabDirectModel onLoaded={() => setLoaded(true)} />

        {/* OrbitControls: Horizontal Y-axis rotation ONLY (left/right drag), NO up/down tilt, NO zoom, NO pan */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.0}
          minPolarAngle={Math.PI / 2.25}
          maxPolarAngle={Math.PI / 2.25}
        />
      </Canvas>
    </div>
  );
};
