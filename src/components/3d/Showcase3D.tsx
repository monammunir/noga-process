import React, { useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Language } from '../../types';
import { ArrowUpRight, ShieldCheck, Cpu, Sliders } from 'lucide-react';

// Configure Draco decoder path for compressed GLB models
useGLTF.setDecoderPath('/draco/');

interface Showcase3DProps {
  lang: Language;
}

interface ModelInfo {
  key: string;
  labelFr: string;
  labelEn: string;
  path: string;
  targetSize: number;
  categoryFr: string;
  categoryEn: string;
  descFr: string;
  descEn: string;
  specs: { labelFr: string; labelEn: string; value: string }[];
}

const MODELS_DATA: ModelInfo[] = [
  {
    key: 'room.glb',
    labelFr: 'Salle de Contrôle & Armoires',
    labelEn: 'Control Room & Cabinets',
    path: '/models/room.glb',
    targetSize: 3.8,
    categoryFr: 'Architecture Électrique & Contrôle',
    categoryEn: 'Electrical & Control Architecture',
    descFr: 'Environnement de contrôle industriel avec armoires électriques alignées, cheminements de câbles aériens et pupitres de commande centralisés.',
    descEn: 'Industrial control environment with lined electrical cabinets, overhead cable routing, and centralized control consoles.',
    specs: [
      { labelFr: 'Conformité', labelEn: 'Compliance', value: 'IEC 61439 / CE' },
      { labelFr: 'Distribution', labelEn: 'Distribution', value: 'TGBT & Armoires Automates' },
      { labelFr: 'Câblage', labelEn: 'Cabling', value: 'Chemins de câbles aériens inox' }
    ]
  },
  {
    key: 'reactor.glb',
    labelFr: 'Réacteur Process Inox',
    labelEn: 'Stainless Process Reactor',
    path: '/models/reactor.glb',
    targetSize: 3.2,
    categoryFr: 'Équipement Procédé Critique',
    categoryEn: 'Critical Process Equipment',
    descFr: 'Réacteur de synthèse en acier inoxydable 316L avec double enveloppe de thermorégulation, agitation magnétique étanche et piquages sanitaires Clamp.',
    descEn: '316L stainless steel synthesis reactor with temperature control jacket, hermetic magnetic agitation, and sanitary Clamp ports.',
    specs: [
      { labelFr: 'Matériaux', labelEn: 'Materials', value: 'Inox 316L Ra < 0.4 µm' },
      { labelFr: 'Nettoyabilité', labelEn: 'Cleanability', value: 'CIP / SIP Qualified' },
      { labelFr: 'Directive', labelEn: 'Directive', value: 'DESP 2014/68/EU' }
    ]
  },
  {
    key: 'tank.glb',
    labelFr: 'Cuve de Stockage Tampique',
    labelEn: 'Buffer Storage Tank',
    path: '/models/tank.glb',
    targetSize: 3.2,
    categoryFr: 'Stockage & Unités Tampiques',
    categoryEn: 'Storage & Buffer Units',
    descFr: 'Réservoir tampique avec fond bombé et polissage miroir interieur. Équipé d\'une boule de lavage 360° et de piquages d\'instrumentation hygiéniques.',
    descEn: 'Buffer tank with dished head and mirror-polished interior. Equipped with 360° spray ball and hygienic instrumentation ports.',
    specs: [
      { labelFr: 'Finition', labelEn: 'Finish', value: 'Electropolissage Ra < 0.3 µm' },
      { labelFr: 'Stérilisation', labelEn: 'Sterilization', value: 'Vapeur pure 135°C' },
      { labelFr: 'Instrumentation', labelEn: 'Instrumentation', value: 'Niveau / Pression / T°' }
    ]
  },
  {
    key: 'ChemistryLab.glb',
    labelFr: 'Laboratoire Biotech & R&D',
    labelEn: 'Biotech & R&D Lab',
    path: '/models/ChemistryLab.glb',
    targetSize: 3.6,
    categoryFr: 'Unités Pilotes & Scaled-Up',
    categoryEn: 'Pilot Units & Scale-Up',
    descFr: 'Plateforme de laboratoire et pilotes de formulation pour le passage à l\'échelle industrielle des procédés biotechnologiques et chimie fine.',
    descEn: 'Laboratory platform and formulation pilot units for scaling up biotechnology and fine chemistry processes.',
    specs: [
      { labelFr: 'Application', labelEn: 'Application', value: 'Scale-up & Pilote Process' },
      { labelFr: 'Standard', labelEn: 'Standard', value: 'GMP / BPF & GLP' },
      { labelFr: 'Confinement', labelEn: 'Containment', value: 'Classe D / C ISO' }
    ]
  },
  {
    key: 'pump.glb',
    labelFr: 'Groupe de Pompage Sanitaire',
    labelEn: 'Sanitary Pumping Unit',
    path: '/models/pump.glb',
    targetSize: 3.0,
    categoryFr: 'Transfert & Hydraulique',
    categoryEn: 'Transfer & Hydraulics',
    descFr: 'Pompe centrifuge hygiénique dimensionnée selon les bilans de pertes de charge et la hauteur manométrique totale (HMT) du réseau.',
    descEn: 'Hygienic centrifugal pump sized according to network pressure drop balances and total dynamic head (TDH).',
    specs: [
      { labelFr: 'Étanchéité', labelEn: 'Sealing', value: 'Garniture mécanique rincée' },
      { labelFr: 'Entraînement', labelEn: 'Drive', value: 'Moteur IE4 avec variateur' },
      { labelFr: 'Calcul HMT', labelEn: 'TDH Sizing', value: 'Optimisé selon viscosité' }
    ]
  },
  {
    key: 'valve.glb',
    labelFr: 'Vanne à Membrane Automatisée',
    labelEn: 'Automated Diaphragm Valve',
    path: '/models/valve.glb',
    targetSize: 2.8,
    categoryFr: 'Vannellerie & Régulation',
    categoryEn: 'Valves & Control',
    descFr: 'Vanne à membrane stérile pour la gestion automatique des flux réactifs, cycles de CIP/SIP et prélèvements d\'échantillons.',
    descEn: 'Sterile diaphragm valve for automated reagent flow management, CIP/SIP cycles, and sample extraction.',
    specs: [
      { labelFr: 'Membrane', labelEn: 'Diaphragm', value: 'EPDM / PTFE conforme FDA' },
      { labelFr: 'Actionneur', labelEn: 'Actuator', value: 'Pneumatique & Boîtier ASI' },
      { labelFr: 'Zone ATEX', labelEn: 'ATEX Zone', value: 'Zone 1/21 Certifiée' }
    ]
  },
  {
    key: 'pipe.glb',
    labelFr: 'Réseau & Tuyauterie Process',
    labelEn: 'Process Piping & Network',
    path: '/models/pipe.glb',
    targetSize: 3.6,
    categoryFr: 'Lignes & Piping',
    categoryEn: 'Piping & Networks',
    descFr: 'Tuyauteries inox orbitalement soudées conçues avec pente d\'autovidangeabilité, contrôlées par endoscopie et traçabilité matière.',
    descEn: 'Orbital-welded stainless piping designed with self-draining slope, endoscopy inspected with material traceability.',
    specs: [
      { labelFr: 'Soudure', labelEn: 'Welding', value: 'Orbital sous Argon' },
      { labelFr: 'Pente', labelEn: 'Slope', value: '1.5% Autovidangeable' },
      { labelFr: 'Inspection', labelEn: 'Inspection', value: 'Endoscopie 100%' }
    ]
  }
];

function DynamicModelViewer({ path, targetSize = 3.2 }: { path: string; targetSize?: number }) {
  const { scene } = useGLTF(path, '/draco/');
  
  const centeredGroup = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const center = new THREE.Vector3();
    box.getCenter(center);
    
    // Offset clone so model center is at (0, 0, 0)
    clone.position.sub(center);

    // Dynamic auto-scaling to fit comfortably in view
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scaleFactor = targetSize / maxDim;
      clone.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

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
  }, [scene, path, targetSize]);

  return <primitive object={centeredGroup} />;
}

export const Showcase3D: React.FC<Showcase3DProps> = ({ lang }) => {
  const [activeKey, setActiveKey] = useState<string>('room.glb');

  const currentModel = useMemo(() => {
    return MODELS_DATA.find((m) => m.key === activeKey) || MODELS_DATA[0];
  }, [activeKey]);

  return (
    <section className="py-20 bg-[#02006F] text-white relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-noga-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFC000]/10 border border-[#FFC000]/30 text-[#FFC000] font-sans text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Galerie 3D Équipements Procédés' : '3D Equipment & Process Gallery'}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {lang === 'fr' ? (
              <>Explorez les 7 modèles <span className="text-[#FFC000]">3D de vos procédés</span></>
            ) : (
              <>Explore all 7 <span className="text-[#FFC000]">3D process models</span></>
            )}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 font-sans leading-relaxed">
            {lang === 'fr'
              ? 'Manipulez et inspectez en 3D l’ensemble de nos modèles industriels : salle de contrôle, réacteurs, cuves, tuyauteries, pompes et vannes automatisées.'
              : 'Manipulate and inspect all our industrial 3D models: control room, reactors, tanks, piping, pumps, and automated valves.'}
          </p>
        </div>

        {/* 7 Model Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MODELS_DATA.map((m) => {
            const isActive = m.key === activeKey;
            return (
              <button
                key={m.key}
                onClick={() => setActiveKey(m.key)}
                className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'bg-[#FFC000] text-[#02006F] shadow-lg scale-105'
                    : 'bg-[#1F2366] text-white/90 hover:bg-[#2A2F80] hover:text-white border border-white/10'
                }`}
              >
                <span>{lang === 'fr' ? m.labelFr : m.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Display & Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3D Interactive Viewport */}
          <div className="lg:col-span-8 h-[420px] sm:h-[520px] relative rounded-2xl bg-[#1F2366] border border-white/15 overflow-hidden shadow-2xl flex items-center justify-center">
            
            {/* Soft background radial glow behind active 3D model */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,192,0,0.18) 0%, rgba(2,0,111,0.4) 60%, transparent 80%)'
              }}
            />

            {/* Model Title Overlay Pill */}
            <div className="absolute top-4 left-4 z-20 bg-[#02006F]/90 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FFC000]" />
              <span>{lang === 'fr' ? currentModel.labelFr : currentModel.labelEn}</span>
            </div>

            {/* Orbit Instructions Pill */}
            <div className="absolute top-4 right-4 z-20 bg-[#02006F]/80 backdrop-blur-sm border border-white/15 px-3 py-1 rounded text-[11px] font-sans text-white/70 hidden sm:block">
              {lang === 'fr' ? 'Pivoter : Clic + Glisser | Zoom : Molette' : 'Rotate: Click & drag | Zoom: Scroll'}
            </div>

            {/* Canvas */}
            <Canvas
              className="w-full h-full relative z-10"
              gl={{ antialias: true, alpha: true }}
              camera={{ position: [2.5, 2.0, 3.2], fov: 45, near: 0.1, far: 500 }}
            >
              <ambientLight intensity={1.3} color="#FFFFFF" />
              <hemisphereLight skyColor="#FFFFFF" groundColor="#02006F" intensity={1.2} />
              <directionalLight position={[10, 15, 10]} intensity={2.0} color="#FFFFFF" castShadow />
              <directionalLight position={[-10, 5, -10]} intensity={1.0} color="#FFC000" />
              <pointLight position={[0, 3, 0]} intensity={1.5} color="#FFFFFF" />

              <React.Suspense
                fallback={
                  <Html center>
                    <div className="flex items-center space-x-3 bg-[#02006F] text-white px-4 py-2.5 rounded-xl border border-white/20 font-sans text-xs">
                      <div className="w-4 h-4 border-2 border-[#FFC000] border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'fr' ? 'Chargement du modèle 3D...' : 'Loading 3D Model...'}</span>
                    </div>
                  </Html>
                }
              >
                <DynamicModelViewer path={currentModel.path} targetSize={currentModel.targetSize} />
                <OrbitControls enableZoom={true} enablePan={false} autoRotate={false} />
              </React.Suspense>
            </Canvas>

          </div>

          {/* Technical Specifications Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Top Specs Box */}
            <div className="bg-[#1F2366] p-6 sm:p-7 rounded-2xl border border-white/15 shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 text-[#FFC000] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{lang === 'fr' ? currentModel.categoryFr : currentModel.categoryEn}</span>
                </div>

                <h3 className="font-display font-black text-2xl text-white mt-1">
                  {lang === 'fr' ? currentModel.labelFr : currentModel.labelEn}
                </h3>

                <p className="mt-3 text-sm text-white/80 font-sans leading-relaxed">
                  {lang === 'fr' ? currentModel.descFr : currentModel.descEn}
                </p>
              </div>

              {/* Key Specs Table */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <span className="text-xs font-bold text-white/50 uppercase tracking-wider block">
                  {lang === 'fr' ? 'Spécifications Techniques NOGA' : 'NOGA Technical Specifications'}
                </span>

                {currentModel.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-white/5 last:border-0">
                    <span className="text-white/70 font-sans">{lang === 'fr' ? spec.labelFr : spec.labelEn} :</span>
                    <span className="text-[#FFC000] font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Tool Banner */}
            <div className="bg-white text-[#02006F] p-6 rounded-2xl border border-white/20 shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-[#02006F]">
                    {lang === 'fr' ? 'Calculs Hydrauliques & Procédés' : 'Process & Hydraulic Calculators'}
                  </h4>
                  <p className="text-xs text-[#111827]/70 mt-1 font-sans">
                    {lang === 'fr'
                      ? 'Validez vos débits, pertes de charge et HMT gratuitement avec nos outils.'
                      : 'Validate your flow rates, head losses, and TDH for free with our online tools.'}
                  </p>
                </div>
                <Sliders className="w-5 h-5 text-[#FFC000] shrink-0 ml-2" />
              </div>

              <a
                href="https://outils-de-calcul-procedes-industriels.noga-process.com/formulas"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-[#02006F] text-white font-sans text-xs uppercase font-extrabold hover:bg-[#1F2366] transition-colors"
              >
                <span>{lang === 'fr' ? 'Accéder aux outils de calcul' : 'Access calculation tools'}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 text-[#FFC000]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
