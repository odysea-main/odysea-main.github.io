import { NavItem, Track, Card, Stat, TeamMember, GetInvolvedOption } from './types';

// --- Southeast Asia (SEA) is the framing for this pilot: content below refers
// to the region generally, not Singapore specifically, except where the
// detail is genuinely local (e.g. the organizing team's home base). ---

export const navItems: NavItem[] = [
  { label: 'Tracks', href: '#tracks' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Team', href: '#team' },
  { label: 'Advisors', href: '#advisors' },
  { label: 'Get Involved', href: '#get-involved' },
];

export const footerNavItems: NavItem[] = [
  { label: 'Tracks', href: '#tracks' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Team', href: '#team' },
  { label: 'Advisors', href: '#advisors' },
  { label: 'Get Involved', href: '#get-involved' },
];

export const tracks: Track[] = [
  {
    tag: 'Low commitment',
    name: 'Explorer',
    description: 'For anyone still figuring out their interest in AI safety. Come to whichever sessions catch your eye.',
    features: [
      'Drop into any individual session',
      'No attendance requirement',
      'No penalty for missing a week',
      'No capstone required',
    ],
  },
  {
    tag: 'Full commitment',
    name: 'Fellow',
    description: 'For those ready to commit to the full pilot and walk away with a project to show for it.',
    features: [
      'Express interest upfront',
      'Attend at least 75% of sessions (max 3 absences across 8 weeks)',
      'Complete a short capstone project',
      'Certificate of completion',
    ],
    featured: true,
  },
];

export const curriculumTopics: Card[] = [
  { title: 'Agent Foundations & Decision Theory', description: 'A first, gentle pass at how we formally reason about agents, their goals, and the decisions they make.' },
  { title: 'Learning Theory & Generalization', description: 'An intro to why learned systems behave the way they do, and where that reasoning starts to break down.' },
  { title: 'Interpretability', description: "A beginner-friendly look inside models, to build intuition for what they're actually representing and doing." },
  { title: 'Value Alignment & Corrigibility', description: "The foundational ideas behind getting systems to reliably pursue what we actually want, and stay correctable if they don't." },
  { title: 'Robustness & Evaluations', description: "An entry point into stress testing systems and how we measure whether they're actually safe." },
  { title: 'AI Governance & Strategy', description: 'A grounding in the policy, coordination, and strategic landscape around advanced AI.' },
];

export const whoItsFor: Card[] = [
  { title: 'Curious beginners', description: "You've been following AI safety from a distance and want structured, low stakes exposure to the actual ideas." },
  { title: 'Students', description: 'Undergraduate or postgraduate, technical or not, looking for a way into the field alongside your studies.' },
  { title: 'Working professionals', description: "Considering a shift into AI safety but can't pause work for a full time program abroad." },
];

export const formatStats: Stat[] = [
  { value: '8', label: 'weeks' },
  { value: '3 hrs', label: 'per session' },
  { value: 'Weekday', label: 'evenings' },
  { value: 'SGT', label: 'Singapore time' },
];

export const precedentStats: Stat[] = [
  { value: '90%', label: 'likelihood to recommend the program' },
  { value: '91%', label: 'more likely to pursue an AI safety career' },
  { value: '40%', label: 'secured a competitive fellowship within 12 months' },
  { value: '47%', label: 'transitioned into an AI safety role within 12 months' },
];

export const coreTeam: TeamMember[] = [
  { role: 'Founding Organizer', institution: '' },
  { role: 'Program Lead', institution: '' },
];

export const teachingAssistants: TeamMember[] = [
  { role: 'Teaching Assistant · MSc/PhD candidate', institution: '' },
  { role: 'Teaching Assistant · MSc/PhD candidate', institution: '' },
];

export const iliadAdvisors: TeamMember[] = [
  { name: 'Leon', role: 'Advisor, Iliad' },
];

export const externalAdvisors: TeamMember[] = [
  { role: 'External Advisor', institution: '' },
];

export const getInvolvedOptions: GetInvolvedOption[] = [
  {
    icon: '🎓',
    title: 'Join as a participant',
    description: 'Pick Explorer or Fellow, free either way. Tell us a bit about yourself and what draws you to AI safety.',
    linkText: 'Apply to join',
    href: '#',
    placeholder: 'apply-form',
  },
];