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
      'Attend at least 75% of sessions',
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
  { 
    name: 'Jared Cheang', 
    role: 'Project Manager', 
    // description: 'Guiding the regional strategy and core community growth.',
    link: 'https://www.linkedin.com/in/jared-cheang/',
    image: '/assets/team/jared.jpg'
  },
  { 
    name: 'Valerie Pang', 
    role: 'Program Lead', 
    // description: 'Overseeing curriculum adaptation and weekly cohort operations.',
    link: 'https://www.linkedin.com/in/valeriepang/',
    image: '/assets/team/valerie.jpg'
  },
  { 
    name: 'Nicholas Garcia', 
    role: 'Program Advisor', 
    // description: 'Bringing additional perspective from the regional AI safety landscape.',
    link: 'https://www.comp.nus.edu.sg/disa/people/ngarcia/',
    image: '/assets/team/nicholasgarcia.jpg'
  },
];

export const teachingAssistants: TeamMember[] = [
  { 
    name: 'Shashvat Shukla', 
    role: 'PhD Candidate in Quantum Computer Science, University College London', 
    // description: 'Researching mechanistic interpretability at aaa.',
    link: 'https://scholar.google.com/citations?user=NAT7yTUAAAAJ&hl=en',
    image: '/assets/team/shashvat.jpg'
  },
  { 
    name: 'James Ang Ming Liang', 
    role: 'PhD Candidate in Foundational AI, University College London', 
    // description: 'Focusing on reward modeling and behavioral alignment at aaa.',
    link: 'https://scholar.google.com/citations?user=hepV8W8AAAAJ&hl=en',
    image: '/assets/team/mingliang.jpg'
  },
  { 
    name: 'Nicholas Chen', 
    role: 'Research Scientist, National University of Singapore', 
    // description: 'MSc in Mathematical and Theoretical Physics, Oxford University.',
    link: 'https://scholar.google.com/citations?user=mBM4R48AAAAJ',
    image: '/assets/team/nicholaschen.jpg'
  },
  { 
    name: 'Daniel Tan*', 
    role: 'Incoming Researcher at Arcadia Impact, PhD University College London', 
    description: 'Pending Confirmation',
    link: 'https://scholar.google.com/citations?user=QKO1QacAAAAJ&hl=en',
    image: '/assets/team/danieltan.jpg'
  },
];

export const iliadAdvisors: TeamMember[] = [
  { 
    name: 'Leon Lang', 
    role: 'Overall Curriculum Advisor',
    // description: 'Ensuring topic selection remains pedagogically sound and technically grounded.',
    // link: 'https://example.com',
    image: '/assets/advisors/leonlang.jpg'
  },
  { 
    name: 'David Quarel', 
    role: 'Advisor - RL, AIXI',
    // description: 'Ensuring topic selection remains pedagogically sound and technically grounded.',
    // link: 'https://example.com',
    image: '/assets/advisors/davidquarel.jpg'
  },
  { 
    name: 'Kai Ogden', 
    role: 'Advisor - SLT',
    // description: 'Ensuring topic selection remains pedagogically sound and technically grounded.',
    // link: 'https://example.com',
    image: '/assets/advisors/kaiogden.jpg'
  },
];

export const externalAdvisors: TeamMember[] = [
  // { 
  //   name: 'Nicholas Garcia', 
  //   role: 'External Advisor', 
  //   description: 'Bringing additional perspective from the regional AI safety landscape.',
  //   link: 'https://example.com',
  //   image: '/assets/team/sarah.jpg'
  // },
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