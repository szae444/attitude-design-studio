// All copy comes from the client's Figma company profile.
// TODO(client): replace BOOKING_URL / EMAIL with the real booking link & inbox.
export const BOOKING_URL = '#contact';
export const EMAIL = ''; // e.g. hello@yourdomain.com: leave empty to hide

export const facts = [
  { label: 'Founded', value: '2019' },
  { label: 'Max clients per team', value: '03' },
  { label: 'People in the studio', value: '16' },
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
  { label: 'Work', href: '#work' },
  { label: 'Packages', href: '#packages' },
  { label: 'Studio', href: '#studio' },
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
];

export const work = [
  { title: 'GURU', kind: 'Brand Identity', img: 'guru', size: 'wide' },
  { title: 'Hardcore Trackday', kind: 'Content Production', img: 'trackday', size: 'tall' },
  { title: 'Falken Tire', kind: 'Studio Shoot', img: 'falken', size: 'wide' },
  { title: 'Pick-up Coffee', kind: 'Ad Campaign', img: 'pickup', size: 'tall' },
  { title: 'Jillian Ward', kind: 'Ad Launch', img: 'jillian', size: 'tall' },
];

// Included in every package
export const packageCore = ['Monthly strategy plan', 'Studio & on-site production covered', 'Dedicated team', 'End-of-month report'];

// Prices intentionally omitted (client request): shown as "On request".
export const packages = [
  {
    name: 'Basic',
    for: 'Good for start-up & established brands',
    items: ['Static materials', 'Story content materials', 'Brand content production', 'Reels for Facebook & Instagram'],
  },
  {
    name: 'Basic +',
    for: 'To generate buzz & sales',
    items: ['Static materials', 'Story content materials', 'Brand content production', 'Ad campaigns every month', 'Reels for Facebook & Instagram'],
    featured: true,
  },
  {
    name: 'Business',
    for: 'Your internal marketing team',
    items: ['Static materials', 'Story content materials', 'Brand content production', 'Ad campaigns every month', 'Reels for Facebook & Instagram', 'Monthly website update', 'KOL & affiliate marketing'],
  },
];

export const usps = [
  { t: 'Affordability meets quality', d: 'As a start-up ourselves, we understand the importance of affordable pricing without sacrificing quality, making us the perfect partner for businesses of all sizes.' },
  { t: 'Tailored creative solutions', d: 'We believe in offering personalized services based on each client’s unique needs and goals, whether you’re a start-up or an established brand.' },
  { t: 'Comprehensive service range', d: 'From visual identity to web development, 360 digital marketing, and TikTok content: a holistic approach with all your creative needs under one roof.' },
  { t: 'Customizable packages', d: 'Special packages designed exclusively for each client, so your brand’s unique vision and goals are met, from a full-scale rebrand to specific content production.' },
  { t: 'Collaborative approach', d: 'Open communication and collaboration with our clients. Every step of the process is designed to involve your input, so the end product reflects your vision.' },
  { t: 'Trend-driven strategies', d: 'We stay at the forefront of digital trends, ensuring our clients are always ahead in terms of creativity and innovation.' },
];

export const partners = [
  { n: 'Maverick Lintan', r: 'Founder, CEO & Creative Director' },
  { n: 'Zarmina Khan Naveed', r: 'Co-Owner & Ad Specialist' },
  { n: 'Paula Andrade', r: 'CEO of EL Brand Singapore' },
  { n: 'Atty. Agnes Botor', r: 'Legal Counsel' },
  { n: 'Von Eric Ferrer', r: 'Sr. Developer & UI/UX Designer' },
];

export const creatives = [
  { n: 'Lalaine Madriaga', r: 'Content Lead' },
  { n: 'Caelle Muñoz', r: 'Content Strategist' },
  { n: 'Mia Reyna', r: 'Content Strategist' },
  { n: 'Zarka Naveed', r: 'Content Writer' },
  { n: 'Jiselle Millente', r: 'Social Media Manager' },
  { n: 'Gino Lopez', r: 'Creative Lead' },
  { n: 'Riz Anyayahan', r: 'Sr. Multimedia Artist' },
  { n: 'Joshua Solis', r: 'Sr. Multimedia Artist' },
  { n: 'Shania Duay', r: 'Graphic Designer' },
  { n: 'Misha Concepcion', r: 'Graphic Designer' },
  { n: 'Lorraine Olilang', r: 'Multimedia Artist' },
];
