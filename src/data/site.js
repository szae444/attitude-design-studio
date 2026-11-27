// All copy comes from the client's Figma company profile.
// Booking: every "Book a call" button opens this Calendly page as a popup (scripts/modules/booking.js).
// TODO(client): EMAIL with the real inbox.
export const BOOKING_URL = 'https://calendly.com/attitude-designstudio22/30min';
export const EMAIL = ''; // e.g. hello@yourdomain.com: leave empty to hide

// Contact form. TODO(client): paste a form endpoint (Formspree / Web3Forms / Getform, etc.).
// Until it's set, the form validates but tells the visitor it isn't connected yet.
export const FORM_ENDPOINT = '';

// TODO(client): confirm budget ranges.
export const budgets = ['Below ₱50,000', '₱50,000 – ₱100,000', '₱100,000 – ₱250,000', '₱250,000 and up', 'Not sure yet'];

export const socials = [
  { label: 'Instagram', icon: 'instagram', handle: '@attitudedesignstudio', href: 'https://www.instagram.com/attitudedesignstudio' },
  { label: 'Facebook', icon: 'facebook', handle: 'Attitude Design Studio', href: 'https://www.facebook.com/share/1D4LP7RkSY/' },
  { label: 'LinkedIn', icon: 'linkedin', handle: 'Attitude Creatives Design Studio', href: 'https://www.linkedin.com/company/attitude-creatives-design-studio/' },
  { label: 'Threads', icon: 'threads', handle: '@attitudedesignstudio', href: 'https://www.threads.com/@attitudedesignstudio' },
];

export const facts = [
  { label: 'Founded', value: '2019' },
  { label: 'Max clients per team', value: '03' },
  { label: 'People in the studio', value: '14' },
  { label: 'Social slots / quarter', value: '30' },
];

export const founder = {
  name: 'Maverick Lintan',
  first: 'Maverick',
  last: 'Lintan',
  role: 'Founder, CEO & Creative Director',
  bio: 'Maverick leads the agency’s vision in creative marketing, branding, and digital innovation. With a background in multimedia arts and digital marketing, he combines strategic thinking with creative direction to help businesses build distinctive brand identities, strengthen their market presence, and achieve sustainable growth. His leadership is driven by a commitment to meaningful client partnerships, innovative solutions, and dedicated creative teams that deliver real business impact.',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why' },
  { label: 'Studio', href: '#studio' },
  { label: 'Projects', href: '#projects' },
];

// Client logos: see src/data/clients.json + src/assets/clients/

export const services = [
  {
    title: 'Social Media Management',
    tag: '30 slots per quarter',
    body: 'We build your brand’s digital presence through strategic content planning, community engagement, and consistent social media management. With a dedicated team, we create relevant content that strengthens brand awareness and supports business growth.',
    img: 'jillian',
  },
  {
    title: 'Branding & Visual Identity',
    tag: 'Logo to brand guidelines',
    body: 'We develop distinctive brand identities that communicate your vision, values, and personality. From logo design to brand guidelines, we create cohesive visual systems that make your business recognizable and memorable.',
    img: 'guruClock',
  },
  {
    title: 'Content Production & Studio Shoots',
    tag: 'Photo · Video · Studio',
    body: 'Campaign-ready photo and video, produced in studio or on location, with marketing assets built to perform across every channel your brand lives on.',
    img: 'falken',
  },
  {
    title: 'Website & Application Development',
    tag: 'Design + build',
    body: 'We design and develop user-friendly websites and applications that combine functionality, aesthetics, and seamless user experiences, helping businesses establish credibility, improve accessibility, and support digital growth.',
    img: 'pickup',
  },
  {
    title: 'Ad Campaign Creation',
    tag: 'Campaign shoot included',
    body: 'We develop and manage targeted advertising campaigns designed to increase brand awareness, generate leads, and drive conversions. From campaign strategy and creative production to audience targeting and performance optimization.',
    img: 'trackday',
  },
  {
    title: 'Templated Design Solutions',
    tag: 'One-time setup',
    body: 'Customizable marketing collaterals and social media templates that keep your brand’s communication consistent and professional, and streamline content creation while maintaining a cohesive visual identity.',
    img: 'guruCard',
  },
  {
    title: 'KOL Management',
    tag: 'Influencers & creators',
    body: 'We connect your brand with the right influencers and creators. Through strategic collaborations and authentic storytelling, we build brand awareness, strengthen audience trust, and turn influence into meaningful brand engagement.',
  },
  {
    title: 'TikTok Management',
    tag: 'Short-form video',
    body: 'We create trend-driven content tailored for TikTok. From content strategy to creative production and account management, we help your brand stay relevant, reach new audiences, and drive engagement through impactful short-form videos.',
  },
];

export const usps = [
  { t: 'Affordability meets quality', d: 'As a start-up ourselves, we understand the importance of affordable pricing without sacrificing quality, making us the perfect partner for businesses of all sizes.' },
  { t: 'Tailored creative solutions', d: 'We believe in offering personalized services based on each client’s unique needs and goals, whether you’re a start-up or an established brand.' },
  { t: 'Comprehensive service range', d: 'From visual identity to web development, 360 digital marketing, and TikTok content: a holistic approach with all your creative needs under one roof.' },
  { t: 'Built around your brand', d: 'Every engagement is scoped exclusively for each client, so your brand’s unique vision and goals are met, from a full-scale rebrand to specific content production.' },
  { t: 'Collaborative approach', d: 'Open communication and collaboration with our clients. Every step of the process is designed to involve your input, so the end product reflects your vision.' },
  { t: 'Trend-driven strategies', d: 'We stay at the forefront of digital trends, ensuring our clients are always ahead in terms of creativity and innovation.' },
];

// Team: names, roles and portraits from the client's "ADS Team" Google Drive (2026-11-24).
// `photo` matches a file in src/assets/team/ (no photo yet → monogram tile).
export const team = [
  { n: 'Maverick Lintan', r: 'Creative Director & Founder', photo: 'maverick' },
  { n: 'Zarmina Khan Naveed', r: 'Operation Manager & Co-Owner', photo: 'zarmina' },
  { n: 'Paula Andrade', r: 'CEO of EL Brand Singapore', photo: 'paula' },
  { n: 'Gino Lopez', r: 'Art Director', photo: 'gino' },
  { n: 'Lalaine Madriaga', r: 'Accounts Manager', photo: 'lalaine' },
  { n: 'Lorraine Olilang', r: 'Social Media Manager', photo: 'lorraine' },
  { n: 'Laira Yoo', r: 'PR & Events', photo: 'laira' },
  { n: 'Caella Muñoz', r: 'Content Strategist', photo: 'caella' },
  { n: 'Mia Reyna', r: 'Content Strategist', photo: 'mia' },
  { n: 'Zarka Khan Naveed', r: 'Content Writer', photo: 'zarka' },
  { n: 'Janmariz Anyayahan', r: 'Sr. Multimedia Artist', photo: 'janmariz' },
  { n: 'Joshua Solis', r: 'Sr. Multimedia Artist', photo: 'joshua' },
  { n: 'Misha Concepcion', r: 'Multimedia Artist', photo: 'misha' },
  { n: 'Shania Duay', r: 'Multimedia Artist', photo: 'shania' },
];
