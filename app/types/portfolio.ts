export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeClass: string;
  tags: string[];
  repoUrl?: string;
  appUrl?: string;
}

export interface Achievement {
  title: string;
  info: string;
  icon: string;
  rarity: string;
  accent: string;
  iconColor: string;
  certificate?: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}
