export interface NavItem {
  label: string;
  href: string;
}

export interface Track {
  tag: string;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface Card {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name?: string;
  role: string;
  institution?: string;
  bio?: string;
}

export interface GetInvolvedOption {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  placeholder: string;
}