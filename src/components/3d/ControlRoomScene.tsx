import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

// Configure local Draco decoder path for compressed GLB models
useGLTF.setDecoderPath('/draco/');

interface ControlRoomSceneProps {
  posterFallback?: string;
}

function ControlRoomModel() {
  const { scene } = useGLTF('/models/room.glb', '/draco/');
  
  const centeredGroup = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const center = new THREE.Vector3();
    box.getCenter(center);
    
    // Offset clone so model center is aligned at (0, 0, 0)
    clone.position.sub(center);

    // Normalize max dimension to 3.5 units so it fits standard camera frustum
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scaleFactor = 3.5 / maxDim;
      clone.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    // Preserve original materials, enable shadows, optimize brightness
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = Math.min(mat.roughness || 0.5, 0.5);
          mat.metalness = Math.max(mat.metalness || 0.2, 0.3);
        }
      }
    });

    return clone;
  }, [scene]);

  return <primitive object={centeredGroup} />;
}

function CameraParallax() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Subtle, smooth camera movement around base position [2.8, 2.0, 3.4]
    const targetX = 2.8 + mouseRef.current.x * 0.3;
    const targetY = 2.0 + mouseRef.current.y * 0.2;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export const ControlRoomScene: React.FC<ControlRoomSceneProps> = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center">
      
      {/* Broad soft radial glow behind the model */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,192,0,0.2) 0%, rgba(31,35,102,0.3) 50%, transparent 75%)'
        }}
      />

      {/* Grounding Shadow */}
      <div className="absolute bottom-6 w-3/4 h-12 grounding-shadow rounded-full pointer-events-none" />

      {/* 3D Canvas */}
      {!hasError ? (
        <Canvas
          className="w-full h-full relative z-10"
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [2.8, 2.0, 3.4], fov: 45, near: 0.1, far: 500 }}
          onError={() => setHasError(true)}
        >
          {/* Neutral studio-style environment lighting */}
          <ambientLight intensity={1.3} color="#FFFFFF" />
          <hemisphereLight skyColor="#FFFFFF" groundColor="#02006F" intensity={1.0} />
          {/* Broad key light */}
          <directionalLight position={[10, 15, 10]} intensity={2.0} color="#FFFFFF" castShadow />
          {/* Gold rim accent light */}
          <directionalLight position={[-10, 5, -10]} intensity={1.0} color="#FFC000" />

          <React.Suspense
            fallback={
              <Html center>
                <div className="flex items-center space-x-3 bg-[#02006F]/90 text-white px-4 py-2.5 rounded-xl border border-white/20 font-sans text-xs">
                  <div className="w-4 h-4 border-2 border-[#FFC000] border-t-transparent rounded-full animate-spin" />
                  <span>Chargement du modèle 3D...</span>
                </div>
              </Html>
            }
          >
            <ControlRoomModel />
            <CameraParallax />
          </React.Suspense>
        </Canvas>
      ) : (
        /* Neutral Fallback Poster */
        <div className="w-full h-full flex items-center justify-center bg-[#02006F] rounded-2xl border border-white/10 p-6 text-center text-white/80">
          <p className="text-sm font-sans">Vue 3D de la salle de contrôle & armoires électriques industrielles</p>
        </div>
      )}

    </div>
  );
};
