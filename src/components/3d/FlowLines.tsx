import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const FlowLines: React.FC = () => {
  const lineRef = useRef<THREE.LineLoop>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  const curvePoints = React.useMemo(() => {
    return [
      new THREE.Vector3(-2.2, -1.0, 0.5),
      new THREE.Vector3(-1.0, -0.8, 0.5),
      new THREE.Vector3(0.5, -0.6, 0.2),
      new THREE.Vector3(0.8, 0.8, 0.0),
      new THREE.Vector3(1.6, 0.2, 0.4),
      new THREE.Vector3(2.5, -0.4, -0.8),
    ];
  }, []);

  const curve = React.useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints);
  }, [curvePoints]);

  const points = React.useMemo(() => {
    return curve.getPoints(100);
  }, [curve]);

  const geometry = React.useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  // Particle flow data
  const { particleGeo, particleMat } = React.useMemo(() => {
    const pPoints = curve.getPoints(30);
    const geo = new THREE.BufferGeometry().setFromPoints(pPoints);
    const mat = new THREE.PointsMaterial({
      color: '#00D9FF',
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    return { particleGeo: geo, particleMat: mat };
  }, [curve]);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Cyan Process Flow Path */}
      <line loop geometry={geometry}>
        <lineBasicMaterial color="#00D9FF" linewidth={2} transparent opacity={0.7} />
      </line>

      {/* Pulsing Flow Data Nodes */}
      <points ref={particlesRef} geometry={particleGeo} material={particleMat} />

      {/* Key Process Node Markers */}
      <mesh position={[-2.2, -1.0, 0.5]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#B8F500" />
      </mesh>
      <mesh position={[0.8, 0.8, 0.0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#00D9FF" />
      </mesh>
      <mesh position={[2.5, -0.4, -0.8]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#1D6FFF" />
      </mesh>
    </group>
  );
};
