import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ModelItem } from './ModelItem';
import { FlowLines } from './FlowLines';
import { Language } from '../../types';

interface HeroSceneProps {
  lang: Language;
  onSelectEquipment?: (name: string) => void;
}

const RotatingGroup: React.FC<{ lang: Language; onHoverEquipment: (info: { name: string; tag: string } | null) => void }> = ({
  lang,
  onHoverEquipment
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow 360-degree rotation of the process system
      groupRef.current.rotation.y += delta * 0.08;
      // Mouse parallax subtle tilt
      const mouseX = state.mouse.x * 0.15;
      const mouseY = state.mouse.y * 0.15;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY * 0.2, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouseX * 0.2, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0.6, 0.1, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Main Focal Object 1: Reactor */}
        <group position={[0, -0.4, 0]}>
          <ModelItem
            url="/models/reactor.glb"
            scale={0.45}
            position={[0, 0, 0]}
            onHover={(h) =>
              onHoverEquipment(
                h
                  ? {
                      name: lang === 'fr' ? 'Réacteur Process Inox 316L' : '316L Stainless Steel Reactor',
                      tag: 'P&ID / CIP / SIP System'
                    }
                  : null
              )
            }
          />
        </group>

        {/* Main Focal Object 2: Storage Tank */}
        <group position={[2.4, -0.2, -0.6]}>
          <ModelItem
            url="/models/tank.glb"
            scale={0.45}
            position={[0, 0, 0]}
            onHover={(h) =>
              onHoverEquipment(
                h
                  ? {
                      name: lang === 'fr' ? 'Cuve de Stockage Qualifiée' : 'Qualified Storage Vessel',
                      tag: 'GMP ISO Cleanroom Grade'
                    }
                  : null
              )
            }
          />
        </group>

        {/* Interconnecting Pipe Lines */}
        <group position={[-0.2, -0.6, 0.2]}>
          <ModelItem url="/models/pipe.glb" scale={0.008} position={[0, 0, 0]} />
        </group>

        {/* Fluid Handling: Pump */}
        <group position={[-1.8, -0.9, 0.4]}>
          <ModelItem
            url="/models/pump.glb"
            scale={0.012}
            position={[0, 0, 0]}
            onHover={(h) =>
              onHoverEquipment(
                h
                  ? {
                      name: lang === 'fr' ? 'Groupe de Pompage Sanitaire' : 'Sanitary Pumping Unit',
                      tag: 'Hydraulic HMT & Flow Control'
                    }
                  : null
              )
            }
          />
        </group>

        {/* Process Automation: Valve */}
        <group position={[1.4, 0.4, 0.5]}>
          <ModelItem
            url="/models/valve.glb"
            scale={0.35}
            position={[0, 0, 0]}
            onHover={(h) =>
              onHoverEquipment(
                h
                  ? {
                      name: lang === 'fr' ? 'Vanne à Membrane Automatisée' : 'Automated Diaphragm Valve',
                      tag: 'ATEX / FDA Certified'
                    }
                  : null
              )
            }
          />
        </group>

        {/* Animated Cyan Flow Lines */}
        <FlowLines />
      </Float>

      {/* Subtle Architectural Environment: Room in background */}
      <group position={[0, -2.5, -5]} rotation={[0, Math.PI / 6, 0]}>
        <ModelItem url="/models/room.glb" scale={0.005} position={[0, 0, 0]} />
      </group>
    </group>
  );
};

export const HeroScene: React.FC<HeroSceneProps> = ({ lang }) => {
  const [hoveredInfo, setHoveredInfo] = useState<{ name: string; tag: string } | null>(null);

  return (
    <div className="relative w-full h-[550px] lg:h-[720px] rounded-2xl overflow-hidden glass-card border border-[#00D9FF]/20 shadow-[0_0_50px_rgba(0,217,255,0.08)]">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none z-0" />

      {/* Technical Overlay Badges */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00D9FF] animate-pulse" />
        <span className="font-tech text-xs uppercase tracking-widest text-[#00D9FF] bg-[#07111F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#00D9FF]/30">
          3D Process Engine Active
        </span>
      </div>

      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center space-x-3 text-xs font-tech text-[#AAB7C4]">
        <span className="px-2.5 py-1 rounded bg-[#020812]/80 border border-[#1D6FFF]/30">STAINLESS STEEL 316L</span>
        <span className="px-2.5 py-1 rounded bg-[#020812]/80 border border-[#00D9FF]/30">P&ID FLOW: NOMINAL</span>
      </div>

      {/* Hover Info Tooltip */}
      {hoveredInfo && (
        <div className="absolute bottom-6 right-6 z-20 max-w-xs p-4 rounded-xl glass-card border-l-4 border-l-[#00D9FF] text-left animate-fadeIn">
          <p className="font-tech text-xs uppercase text-[#00D9FF] tracking-wider">{hoveredInfo.tag}</p>
          <h4 className="font-display font-bold text-sm text-[#F5F8FA] mt-1">{hoveredInfo.name}</h4>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        className="w-full h-full z-10 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7.5]} fov={45} />
        
        {/* Lights */}
        <ambientLight intensity={0.7} color="#1D6FFF" />
        <directionalLight position={[10, 10, 10]} intensity={1.8} color="#F5F8FA" castShadow />
        <directionalLight position={[-10, -5, -5]} intensity={0.6} color="#00D9FF" />
        <pointLight position={[2, 2, 2]} intensity={2.5} color="#00D9FF" distance={8} />
        <pointLight position={[-2, -1, 3]} intensity={1.5} color="#B8F500" distance={6} />

        <React.Suspense fallback={
          <Html center>
            <div className="flex flex-col items-center space-y-3 bg-[#07111F]/90 backdrop-blur-md p-6 rounded-2xl border border-[#00D9FF]/30">
              <div className="w-10 h-10 border-4 border-[#1D6FFF] border-t-[#00D9FF] rounded-full animate-spin" />
              <span className="font-tech text-xs text-[#00D9FF] uppercase tracking-wider">
                {lang === 'fr' ? 'Chargement du modèle 3D...' : 'Loading 3D System...'}
              </span>
            </div>
          </Html>
        }>
          <RotatingGroup lang={lang} onHoverEquipment={setHoveredInfo} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
