import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

function Room2DirectModel({ onLoaded }: { onLoaded: () => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();
    
    // Configure Draco decoder
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/models/room2.glb',
      (gltf) => {
        if (!isMounted || !groupRef.current) return;
        
        const scene = gltf.scene;
        
        // Create a wrapper group for precision centering & scaling
        const wrapper = new THREE.Group();

        // Calculate raw model bounds
        const box = new THREE.Box3().setFromObject(scene);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);

        // Offset inner scene inside wrapper so model center is at (0, 0, 0)
        scene.position.set(-center.x, -center.y, -center.z);
        wrapper.add(scene);

        // Normalize max dimension to 4.2 units
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scaleFactor = 4.2 / maxDim;
          wrapper.scale.set(scaleFactor, scaleFactor, scaleFactor);
        }

        // Double-sided rendering & material brightness
        scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((mat) => {
                  mat.side = THREE.DoubleSide;
                });
              } else {
                mesh.material.side = THREE.DoubleSide;
              }
            }
          }
        });

        // Replace contents of groupRef with centered wrapper
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
        console.error('Error loading /models/room2.glb:', error);
      }
    );

    return () => {
      isMounted = false;
      dracoLoader.dispose();
    };
  }, []);

  return <group ref={groupRef} />;
}

export const HeroRoom2Scene: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[480px] lg:h-[600px] flex items-center justify-center">
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,192,0,0.25) 0%, rgba(31,35,102,0.4) 55%, transparent 75%)'
        }}
      />

      {/* Grounding Shadow */}
      <div className="absolute bottom-4 w-3/4 h-12 grounding-shadow rounded-full pointer-events-none opacity-60" />

      {/* Loading Indicator Pill */}
      {!loaded && (
        <div className="absolute z-20 flex items-center space-x-3 bg-[#02006F]/90 text-white px-4 py-2.5 rounded-xl border border-white/20 font-sans text-xs shadow-lg">
          <div className="w-4 h-4 border-2 border-[#FFC000] border-t-transparent rounded-full animate-spin" />
          <span>Chargement du modèle 3D room2...</span>
        </div>
      )}

      {/* Canvas */}
      <Canvas
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [3.2, 2.2, 4.0], fov: 45, near: 0.1, far: 1000 }}
      >
        {/* Bright studio lights */}
        <ambientLight intensity={1.8} color="#FFFFFF" />
        <hemisphereLight skyColor="#FFFFFF" groundColor="#02006F" intensity={1.5} />
        <directionalLight position={[15, 20, 15]} intensity={2.5} color="#FFFFFF" castShadow />
        <directionalLight position={[-15, 10, -15]} intensity={1.5} color="#FFC000" />
        <pointLight position={[0, 5, 0]} intensity={2.0} color="#FFFFFF" />

        <Room2DirectModel onLoaded={() => setLoaded(true)} />

        {/* OrbitControls: Horizontal Y-axis rotation ONLY (left/right drag), NO UP/DOWN tilt, NO ZOOM, NO PAN */}
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
