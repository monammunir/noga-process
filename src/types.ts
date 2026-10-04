export type Language = 'fr' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  shortDesc: string;
  shortDescEn: string;
  fullDesc: string;
  fullDescEn: string;
  deliverables: string[];
  deliverablesEn: string[];
  glbModel: string;
  modelHotspotLabel: string;
  modelHotspotLabelEn: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  desc: string;
  descEn: string;
  glbModel: string;
  modelName: string;
  features: string[];
  featuresEn: string[];
  image: string;
}

export interface ProcessTimelineStep {
  stepNumber: string;
  phase: string;
  phaseEn: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  deliverables: string[];
  deliverablesEn: string[];
  glbFocus: string;
  technicalNode: string;
}

export interface ExpertiseCard {
  id: string;
  title: string;
  titleEn: string;
  metric?: string;
  desc: string;
  descEn: string;
  icon: string;
}

export interface TechnicalHotspot {
  id: string;
  model: string;
  name: string;
  nameEn: string;
  position: [number, number, number];
  specLabel: string;
  specLabelEn: string;
  detailText: string;
  detailTextEn: string;
}
