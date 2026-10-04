import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ModelItemProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  highlighted?: boolean;
  onHover?: (hovered: boolean) => void;
  onClick?: () => void;
}

export const ModelItem: React.FC<ModelItemProps> = ({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  highlighted = false,
  onHover,
  onClick
}) => {
  const { scene } = useGLTF(url);

  // Clone scene so multiple instances don't conflict
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    
    // Traversal to adjust materials for clean industrial aesthetic
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          // Enhance stainless steel / cleanroom look
          if (mat.name && (mat.name.toLowerCase().includes('metal') || mat.name.toLowerCase().includes('steel') || mat.name.toLowerCase().includes('structure'))) {
            mat.metalness = 0.85;
            mat.roughness = 0.25;
            mat.color = new THREE.Color('#D8E3EC');
          } else if (mat.name && (mat.name.toLowerCase().includes('glass') || mat.name.toLowerCase().includes('liquid'))) {
            mat.transparent = true;
            mat.opacity = 0.75;
          }
        }
      }
    });

    return clone;
  }, [scene]);

  return (
    <primitive
      object={clonedScene}
      position={position}
      rotation={rotation}
      scale={typeof scale === 'number' ? [scale, scale, scale] : scale}
      onPointerOver={(e: any) => {
        e.stopPropagation();
        if (onHover) onHover(true);
      }}
      onPointerOut={(e: any) => {
        e.stopPropagation();
        if (onHover) onHover(false);
      }}
      onClick={(e: any) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    />
  );
};
