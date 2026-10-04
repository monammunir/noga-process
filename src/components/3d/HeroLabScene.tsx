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

        // Exact pre-calculated bounds for lab.glb:
        // Center: (3.9787, 3.0284, 1.5249), Max dimension: 14.157
        const center = new THREE.Vector3(3.9787, 3.0284, 1.5249);
        const maxDim = 14.157;

        // Center inner scene at (0, 0, 0)
        scene.position.set(-center.x, -center.y, -center.z);
        wrapper.add(scene);

        // Normalize size so model floats comfortably in view
        const scaleFactor = 6.2 / maxDim;
        wrapper.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Enhance material rendering for rich 3D details
        scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              materials.forEach((mat) => {
                mat.side = THREE.DoubleSide;
                if ('envMapIntensity' in mat) (mat as THREE.MeshStandardMaterial).envMapIntensity = 1.2;
              });
            }
          }
        });

        // Clear ref and append centered wrapper
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
        onLoaded();
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

      {/* 2. Soft Radial Glow behind 3D Model (Ensures 3D Model is Bright & Clear) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(31,35,102,0.55) 0%, rgba(2,0,111,0.92) 75%, rgba(2,0,111,1) 100%)'
        }}
      />

      {/* 3. Loading Pill Indicator */}
      {!loaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center space-x-3 bg-[#02006F]/95 text-white px-6 py-3.5 rounded-2xl border border-[#FFC000]/40 font-sans text-sm shadow-2xl backdrop-blur-lg">
          <div className="w-5 h-5 border-2 border-[#FFC000] border-t-transparent rounded-full animate-spin" />
          <span className="font-semibold">Chargement du modèle 3D (lab.glb)...</span>
        </div>
      )}

      {/* 4. Interactive 3D Canvas */}
      <Canvas
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.8, 7.0], fov: 45, near: 0.1, far: 1000 }}
      >
        {/* Bright Studio Lighting */}
        <ambientLight intensity={1.8} color="#FFFFFF" />
        <hemisphereLight skyColor="#FFFFFF" groundColor="#02006F" intensity={1.5} />
        <directionalLight position={[15, 22, 15]} intensity={2.5} color="#FFFFFF" castShadow />
        <directionalLight position={[-15, 12, -15]} intensity={1.6} color="#FFC000" />
        <pointLight position={[0, 8, 0]} intensity={2.0} color="#FFFFFF" />

        <LabDirectModel onLoaded={() => setLoaded(true)} />

        {/* OrbitControls: Horizontal Y-axis rotation ONLY (left/right drag), NO up/down tilt, NO zoom, NO pan */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.2}
          minPolarAngle={Math.PI / 2.25}
          maxPolarAngle={Math.PI / 2.25}
        />
      </Canvas>
    </div>
  );
};
