import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Html } from '@react-three/drei';
import { ModelItem } from './ModelItem';

interface ModelCardViewerProps {
  modelUrl: string;
  scale?: number;
}

export const ModelCardViewer: React.FC<ModelCardViewerProps> = ({ modelUrl, scale = 0.5 }) => {
  return (
    <div className="w-full h-48 relative rounded-xl overflow-hidden glass-card border border-[#00D9FF]/20">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />
        <ambientLight intensity={0.7} color="#1D6FFF" />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-3, -3, 3]} intensity={1} color="#00D9FF" />

        <React.Suspense fallback={
          <Html center>
            <div className="w-4 h-4 border-2 border-[#00D9FF] border-t-transparent rounded-full animate-spin" />
          </Html>
        }>
          <group position={[0, -0.2, 0]}>
            <ModelItem url={modelUrl} scale={scale} />
          </group>
        </React.Suspense>
      </Canvas>
    </div>
  );
};
