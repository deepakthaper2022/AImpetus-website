// Service page copy from brief/website-content.pdf ("Service page: …" and
// "Services overview page"). Use exactly as written.

export type IconName = 'data' | 'ai' | 'digital' | 'assurance';

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  seoTitle: string;
  description: string;
  h1: string;
  intro: string;
  /** Services overview: "For when…" line and link text */
  forWhen: string;
  explore: string;
  /** Home: card line */
  homeLine: string;
  familiar: string[];
  whatWeDo: { term: string; text: string }[];
  whatYouGet: string[];
  experience: string;
  cta: string;
}

export const services: Service[] = [
  {
    slug: 'data-and-platforms',
    name: 'Data and platforms',
    icon: 'data',
    seoTitle: 'Data engineering and platforms | AImpetus',
    description:
      'Data engineering, platform engineering and architecture for public-sector and other organisations. Reliable, governed data that services and AI can depend on.',
    h1: 'Data you can rely on, platforms that last',
    intro:
      "Every digital service and every AI use case depends on data that's accurate, connected and well governed. We help you get there, whether you're modernising an ageing platform, bringing organisations together or preparing for AI.",
    forWhen:
      "For when your data is scattered, your platforms are ageing or being merged, and AI can't use what you have.",
    explore: 'Explore data and platforms',
    homeLine: 'Reliable, governed data that services and AI can depend on.',
    familiar: [
      'The same data lives in several places, and nobody agrees which version is right.',
      'Your platforms are expensive to run and hard to change.',
      'Teams are being merged, and so are their systems.',
      "AI ideas stall because the data isn't ready.",
    ],
    whatWeDo: [
      { term: 'Data engineering', text: 'pipelines, integration and data quality, built to be maintained by your team.' },
      { term: 'Platform engineering', text: 'cloud data platforms that are secure, scalable and cost-aware.' },
      { term: 'Solution and data architecture', text: 'designs that fit your standards, your security needs and your future plans.' },
      { term: 'Platform consolidation', text: 'moving and merging platforms without losing service continuity.' },
      { term: 'Data governance', text: 'clear ownership, information governance and controls that make data safe to use.' },
    ],
    whatYouGet: [
      'One trusted view of the data that matters.',
      'Platforms that cost less to run and are easier to change.',
      "Data that's ready for analytics and AI.",
      'A team that can run and improve what we build.',
    ],
    experience:
      "Our founders have led data warehousing and analytics work for NHS Improvement. They've also run NHS England programmes on modern data platforms such as Azure Synapse and Palantir Foundry.",
    cta: 'Talk to us about your data',
  },
  {
    slug: 'ai-to-benefit',
    name: 'AI to benefit',
    icon: 'ai',
    seoTitle: 'AI use cases, pilots and benefits | AImpetus',
    description:
      'Choose the right AI use cases, test them safely and prove the benefit before you scale. Practical, well-governed AI for public-sector and other organisations.',
    h1: 'AI that earns its place in your service',
    intro:
      "The question isn't whether to use AI. It's where AI will genuinely improve a service, and how to prove it before you commit. We help you choose well, test safely and make a clear decision: scale it or stop it.",
    forWhen:
      "For when there's pressure to use AI, but no clear priorities, and pilots that never reach live services.",
    explore: 'Explore AI to benefit',
    homeLine: 'Choose the right use cases, test them safely and prove the benefit before you scale.',
    familiar: [
      'There\'s pressure to "do something with AI", but no shared view of where it would help most.',
      'Pilots look promising, then stall before they reach a live service.',
      'Nobody is sure how to measure whether AI is actually helping.',
      'Governance, safety and information governance questions slow everything down.',
    ],
    whatWeDo: [
      { term: 'Use-case discovery', text: 'we work with your teams to find where AI can make a real difference, and rank ideas by value and feasibility.' },
      { term: 'Pilots and proofs of concept', text: 'focused tests with success measures agreed before we start.' },
      { term: 'Benefits tracking', text: 'clear measures of time, cost, quality or experience, so decisions rest on evidence.' },
      { term: 'AI governance', text: 'proportionate controls for safety, transparency, security and information governance.' },
      { term: 'Scale-up planning', text: 'what it will take to run AI in a live service, including data, people and running costs.' },
    ],
    whatYouGet: [
      'A short list of AI use cases worth pursuing.',
      'Evidence of benefit, not just a demo.',
      'A clear scale-or-stop decision for each pilot.',
      'Governance your senior leaders and assurance teams can stand behind.',
    ],
    experience:
      'Our founders have led enterprise AI and data delivery with AI-native organisations and start-ups. They also hold certifications in AI security and governance.',
    cta: 'Talk to us about AI',
  },
  {
    slug: 'digital-transformation',
    name: 'Digital transformation',
    icon: 'digital',
    seoTitle: 'Digital transformation | AImpetus',
    description:
      'Service and process redesign, cloud modernisation and automation for public-sector and other organisations. Simpler services that cost less to run.',
    h1: 'Simpler services, built for how people work now',
    intro:
      "Digital transformation isn't about new technology for its own sake. It's about services that are easier to use, cheaper to run and ready for what comes next, including AI. We help you redesign the service, modernise what sits underneath and deliver the change step by step.",
    forWhen:
      'For when services and processes were built for another era, organisations are merging, and you need to do more with less.',
    explore: 'Explore digital transformation',
    homeLine: 'Redesign services and processes, modernise platforms and automate the routine.',
    familiar: [
      'Services and processes were designed for another era, and it shows.',
      'Organisations are merging, and so are their ways of working.',
      'Staff spend too long on manual, repetitive tasks.',
      'Older systems are costly to keep running and hard to change.',
    ],
    whatWeDo: [
      { term: 'Service and process redesign', text: 'we start with users and staff, and design out the friction.' },
      { term: 'Cloud modernisation', text: "moving and modernising applications so they're secure, resilient and cost-aware." },
      { term: 'Automation', text: 'removing routine manual work, from simple workflow automation to robotic process automation.' },
      { term: 'Digital delivery', text: 'agile delivery from discovery to live, in line with public-sector service standards.' },
      { term: 'Change support', text: 'helping teams adopt new ways of working, so the benefits last.' },
    ],
    whatYouGet: [
      'Services that are simpler for users and staff.',
      'Lower running costs and less technical debt.',
      'More staff time for the work that matters.',
      'Foundations that are ready for data and AI.',
    ],
    experience:
      'Our founders have led large digital transformation, cloud migration and automation programmes for NHS England and NHS Improvement.',
    cta: 'Talk to us about transformation',
  },
  {
    slug: 'delivery-assurance',
    name: 'Delivery assurance',
    icon: 'assurance',
    seoTitle: 'Delivery assurance and governance | AImpetus',
    description:
      'Independent delivery assurance, governance and programme leadership for national health and public-sector data, digital and AI programmes.',
    h1: 'Confidence that your programme will deliver',
    intro:
      'Data, digital and AI programmes rarely fail because of the technology. They struggle when governance is unclear, risks go unspoken and teams are stretched. We bring experienced, independent leadership that keeps delivery on track and gives senior owners an honest view.',
    forWhen:
      'For when a programme is running late, accountability is unclear, or you need an independent view of risk.',
    explore: 'Explore delivery assurance',
    homeLine: 'Steady programmes, clear governance and an honest view of risk.',
    familiar: [
      'The programme is behind, and nobody is quite sure why.',
      'Accountability is blurred between teams, suppliers and boards.',
      'Reports say green, but the people doing the work say otherwise.',
      'A major decision or approval is coming, and you want an independent view first.',
    ],
    whatWeDo: [
      { term: 'Delivery health checks', text: 'a quick, independent review of where a programme really stands, with practical recommendations.' },
      { term: 'Delivery governance', text: 'clear roles, decision-making and reporting that work for boards and delivery teams alike.' },
      { term: 'Independent assurance', text: 'ongoing support through key stages and approvals.' },
      { term: 'Programme and project leadership', text: 'experienced leaders who can steady, restart or run delivery.' },
      { term: 'Agile and hybrid delivery', text: 'ways of working that fit the programme, using Scrum, Kanban or hybrid approaches.' },
    ],
    whatYouGet: [
      'An honest picture of progress and risk.',
      'Governance that speeds decisions up rather than slowing them down.',
      'A programme back on a realistic plan.',
      'Senior owners who can stand behind what they report.',
    ],
    experience:
      "Our founders have led large NHS delivery portfolios and run a UK technology services business. They've been responsible for delivery quality, governance and client relationships on major public-sector programmes.",
    cta: 'Talk to us about your programme',
  },
];
