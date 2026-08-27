import { NavItem, Track, Card, Stat, TeamMember, JoinLink, GetInvolvedOption } from './types';

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
  { title: 'Singular Learning Theory', description: 'A gentle introduction to the geometry of the loss landscape, and why it matters for understanding what a trained model actually learned.' },
  { title: 'Training Dynamics', description: 'An intro to how models change over the course of training, including the phase transitions and emergent behavior along the way.' },
  { title: 'Decision Theory', description: 'A beginner-friendly look at how to formally reason about agents, their goals, and the decisions they make.' },
  { title: 'Reinforcement Learning', description: 'The foundational ideas behind how agents learn from reward, and where that learning can go wrong.' },
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
    description: 'AI Safety researcher exploring Human-AI Alignment and AI Control.',
    link: 'https://www.linkedin.com/in/jared-cheang/',
    image: '/assets/team/jared.jpg'
  },
  { 
    name: 'Chanel Huang', 
    role: 'Logistics Coordinator', 
    description: 'AI-For-Good advocate connecting community, industry, and impact.',
    link: 'https://www.linkedin.com/in/chanelxn/',
    image: '/assets/team/chanel.jpg'
  },
  { 
    name: 'Rustam Shariq', 
    role: 'Community Lead', 
    description: 'Health-AI policy scientist linking ASEAN youth and innovation.',
    link: 'https://sg.linkedin.com/in/rustamshariq/',
    image: '/assets/team/rustam.jpg'
  },
  
];

export const teachingAssistants: TeamMember[] = [
  { 
    name: 'Shashvat Shukla', 
    role: 'PhD Candidate in Quantum Computer Science, University College London', 
    description: 'Quantum algorithms PhD at UCL, ex-Oxford CS & Philosophy.',
    link: 'https://scholar.google.com/citations?user=NAT7yTUAAAAJ&hl=en',
    image: '/assets/team/shashvat.jpg'
  },
  { 
    name: 'James Ang Ming Liang', 
    role: 'PhD Candidate in Foundational AI, University College London', 
    description: 'ELLIS PhD at UCL, decoding how foundation models generalize.',
    link: 'https://scholar.google.com/citations?user=hepV8W8AAAAJ&hl=en',
    image: '/assets/team/mingliang.jpg'
  },
  { 
    name: 'Nicholas Chen', 
    role: 'Research Scientist, National University of Singapore', 
    description: 'Research Scientist steering LLM behavior, ex-Oxford physicist.',
    link: 'https://scholar.google.com/citations?user=mBM4R48AAAAJ',
    image: '/assets/team/nicholaschen.jpg'
  },
  // { 
  //   name: 'Daniel Tan*', 
  //   role: 'Incoming Researcher at Arcadia Impact', 
  //   description: 'Pending Confirmation',
  //   // description: 'Alignment Researcher at Arcadia Impact, UCL PhD, MATS alumni under Owain Evans.',
  //   link: 'https://scholar.google.com/citations?user=QKO1QacAAAAJ&hl=en',
  //   image: '/assets/team/danieltan.jpg'
  // },
];

export const iliadAdvisors: TeamMember[] = [
  { 
    name: 'Valerie Pang', 
    role: 'Program Advisor', 
    image: '/assets/team/valerie.jpg'
  },
  // { 
  //   name: 'Leon Lang', 
  //   role: 'Overall Curriculum Advisor, Iliad',
  //   // description: 'Ensuring topic selection remains pedagogically sound and technically grounded.',
  //   // link: 'https://example.com',
  //   image: '/assets/advisors/leonlang.jpg'
  // },
  { 
    name: 'David Quarel', 
    role: 'Curriculum Advisor, Iliad',
    // description: 'Ensuring topic selection remains pedagogically sound and technically grounded.',
    // link: 'https://example.com',
    image: '/assets/advisors/davidquarel.jpg'
  },
  // { 
  //   name: 'Kai Ogden', 
  //   role: 'Curriculum Advisor, Iliad',
  //   // description: 'Ensuring topic selection remains pedagogically sound and technically grounded.',
  //   // link: 'https://example.com',
  //   image: '/assets/advisors/kaiogden.jpg'
  // },
  { 
    name: 'Nicholas Garcia', 
    role: 'Program Advisor', 
    // description: 'Bringing additional perspective from the regional AI safety landscape.',
    // link: 'https://www.comp.nus.edu.sg/disa/people/ngarcia/',
    image: '/assets/advisors/nicholasgarcia.jpg'
  },
  // { 
  //   name: 'Yanni Kyriacos', 
  //   role: 'Program Advisor', 
  //   // description: 'Bringing additional perspective from the regional AI safety landscape.',
  //   // link: 'https://au.linkedin.com/in/yanni-kyriacos-2815b6261',
  //   image: '/assets/advisors/yanni.jpg'
  // },
  // { 
  //   name: 'Caroline SC.', 
  //   role: 'Program Advisor', 
  //   // description: 'Bringing additional perspective from the regional AI safety landscape.',
  //   // link: 'https://au.linkedin.com/in/yanni-kyriacos-2815b6261',
  //   image: '/assets/advisors/caroline.jpg'
  // }
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

export const joinLink: JoinLink = {
  text: 'Join the Voyage',
  href: 'https://airtable.com/appMDN5h1uIDq0kJU/pagjV8jduFzAnwR9X/form',
  placeholder: 'apply-form',
};

export const getInvolvedOptions: GetInvolvedOption[] = [
  {
    icon: '🎓',
    title: 'Join as a participant',
    description: 'Pick Explorer or Fellow, free either way. Tell us a bit about yourself and what draws you to AI safety.',
    linkText: joinLink.text,
    href: joinLink.href,
    placeholder: joinLink.placeholder ?? '',
  },
];