import PlayStation from '@/data/mdx/PlayStation.md?raw'
// import Img from "@/data/images/trucker.jpg"

const randomId = () => Math.random().toString(36).substr(2, 9);
function generateProjectId(title: string) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')      // Remove non-word characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-');          // Collapse multiple hyphens

  const uuid = Math.random().toString(16).slice(2, 10);

  return `${slug}-${uuid}`;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  // fullDescription?: React.FC;
  tags: string[];
  images: string[];
  github?: string;
  demo?: string;
  timeline: string;
  techStack: string[];
}


export const projects: Project[] = [
  {
    id: "playstation-booking",
    title: "PlayStation Booking Website",
    demo: "https://ps-booking.vercel.app/",
    shortDescription: "Booking platform for PlayStation gaming sessions with scheduling and payment integration",
    fullDescription: PlayStation,
    tags: ["React", "Tailwind", "Redux", "TypeScript"],
    images: [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3"
    ],
    timeline: "Mar 2023 - Jun 2023",
    techStack: ["React", "Tailwind", "Redux", "TypeScript"]
  },
  {
    id: "alcohol-ecommerce",
    title: "Alcohol Ecommerce Website",
    shortDescription: "Frontend with role-based dashboards for customers, admins, and distributors",
    fullDescription: PlayStation,
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    images: [
      'https://images.unsplash.com/photo-1733709425481-bbdad7762321',
      "https://images.unsplash.com/photo-1578022386930-bb02c80715fe",
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://dripcode.vercel.app/",
    timeline: "Jan 2023 - Apr 2023",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Redis"]
  },
  {
    id: "events-kenya-1",
    title: "Events Listing Platform (Kenya)",
    shortDescription: "Comprehensive event management for parties, hackathons with ticket purchasing",
    fullDescription: PlayStation,
    tags: ["React", "D3.js", "Python", "Flask"],
    images: [

      "https://images.unsplash.com/photo-1549451371-64aa98a6f660",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://sherehe-ke.vercel.app",
    timeline: "May 2022 - Nov 2022",
    techStack: ["React", "D3.js", "Python", "Flask", "PostgreSQL"]
  },
  {
    id: "events-kenya-2",
    title: "Advanced Events Platform",
    shortDescription: "Second generation events platform with additional tech integrations and analytics",
    fullDescription: PlayStation,
    tags: ["React Native", "Node.js", "MQTT", "Firebase"],
    images: [

      "https://images.unsplash.com/photo-1549451371-64aa98a6f660",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591696331111-ef9586a5b17d?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://sheree-phi.vercel.app",
    timeline: "Feb 2021 - Aug 2021",
    techStack: ["React Native", "Node.js", "Firebase", "MQTT"]
  },
  {
    id: "milk-management-1",
    title: "Milk Management System",
    shortDescription: "UI for milk brokers to manage customers, sales, and employees",
    fullDescription: PlayStation,
    tags: ["Angular", "Java", "Spring Boot"],
    images: [
      "https://images.unsplash.com/photo-1576186726188-c9d70843790f",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://milky-way-logistics.vercel.app",
    timeline: "Sep 2020 - Jan 2021",
    techStack: ["Angular", "Java", "Spring Boot", "PostgreSQL"]
  },
  {
    id: "green-grocery",
    title: "Green Grocery Ecommerce",
    shortDescription: "UI-focused ecommerce platform for organic and locally-sourced groceries",
    fullDescription: PlayStation,
    tags: ["Angular", "TypeScript", "SCSS"],
    images: [
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://wangigemarket.vercel.app/",
    timeline: "Feb 2021 - May 2021",
    techStack: ["Angular", "TypeScript", "SCSS"]
  },
  {
    id: "milk-management-2",
    title: "Milk Management System v2",
    shortDescription: "Enhanced version with additional reporting and analytics features",
    fullDescription: PlayStation,
    tags: ["Angular", "Java", "Spring Boot"],
    images: [
      "https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://wangigemarket.com",
    timeline: "Mar 2021 - Jun 2021",
    techStack: ["Angular", "Java", "Spring Boot", "Chart.js"]
  },
  {
    id: "job-seeker",
    title: "Job Seeker Platform",
    shortDescription: "Kenyan-focused job board connecting employers with local talent",
    fullDescription: PlayStation,
    tags: ["React", "Node.js", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://saka-job.vercel.app",
    timeline: "Jun 2021 - Sep 2021",
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "greensert-ai-1",
    title: "GreensertAI",
    shortDescription: "AI analyzing desert regions for potential reforestation opportunities",
    fullDescription: PlayStation,
    tags: ["Python", "TensorFlow", "GeoDjango"],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://greensert.vercel.app/",
    timeline: "Oct 2021 - Dec 2021",
    techStack: ["Python", "TensorFlow", "GeoDjango"]
  },
  // {
  //   id: "greensert-ai-2",
  //   title: "GreensertAI Mobile",
  //   shortDescription: "Mobile version with offline capabilities for field researchers",
  //   fullDescription: PlayStation,
  //   tags: ["React Native", "Python"],
  //   images: [
  //     "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3"
  //   ],
  //   github: 'https://github.com/stephen-nene',
  //   demo: "https://greensert-mobile.vercel.app/",
  //   timeline: "Jan 2022 - Mar 2022",
  //   techStack: ["React Native", "Python", "SQLite"]
  // },
  {
    id: "trading-journal",
    title: "Trading Journal",
    shortDescription: "Platform for traders to record and analyze their trades",
    fullDescription: PlayStation,
    tags: ["React", "Firebase", "Chart.js"],
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://t-journal.vercel.app",
    timeline: "Mar 2022 - May 2022",
    techStack: ["React", "Firebase", "Chart.js"]
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    shortDescription: "Solution for patient records, appointments, and administration",
    fullDescription: PlayStation,
    tags: ["Angular", "Java", "Spring Boot"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://tiberbuke.vercel.app/",
    timeline: "Jun 2022 - Aug 2022",
    techStack: ["Angular", "Java", "Spring Boot"]
  },
  {
    id: "tech-lovers",
    title: "Tech Lovers Community",
    shortDescription: "Website for tech enthusiasts to share projects and ideas",
    fullDescription: PlayStation,
    tags: ["React", "Node.js", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://valentino-tau.vercel.app/",
    timeline: "Sep 2022 - Nov 2022",
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "truck-route",
    title: "Truck Route Management",
    shortDescription: "FMCSA-compliant solution for route planning and compliance",
    fullDescription: PlayStation,
    tags: ["React", "Mapbox", "Node.js"],
    images: [
      "https://images.unsplash.com/photo-1590504805643-bb1f94cde7fd",
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://spotter-swart.vercel.app/",
    timeline: "Sep 2022 - Nov 2022",
    techStack: ["React", "Mapbox", "Node.js"]
  },
  {
    id: "timebox-tool",
    title: "Timebox Management Tool",
    shortDescription: "Productivity app to organize your day into focused time blocks",
    fullDescription: PlayStation,
    tags: ["React", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://timebox-nene.vercel.app/",
    timeline: "Dec 2022 - Feb 2023",
    techStack: ["React", "Firebase"]
  },
  {
    id: "spending-tracker",
    title: "Spending Tracker",
    shortDescription: "Application to track and analyze personal spending habits",
    fullDescription: PlayStation,
    tags: ["React", "Chart.js"],
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://spendique.vercel.app/",
    timeline: "Jan 2023 - Mar 2023",
    techStack: ["React", "Chart.js"]
  },
  {
    id: "ai-tourguide",
    title: "Local AI Tour Guide",
    shortDescription: "AI-powered tour guide for local attractions and historical sites",
    fullDescription: PlayStation,
    tags: ["Python", "Flask"],
    images: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://savanna-guide.vercel.app",
    timeline: "Apr 2023 - Jun 2023",
    techStack: ["Python", "Flask"]
  },
  {
    id: "community-platform",
    title: "Community Contribution Platform",
    shortDescription: "Platform for users to contribute to local community projects",
    fullDescription: PlayStation,
    tags: ["React", "Node.js"],
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://chura-light.vercel.app/about",
    timeline: "Jul 2023 - Sep 2023",
    techStack: ["React", "Node.js"]
  },
  {
    id: "shopping-list",
    title: "Digital Shopping List",
    shortDescription: "Paperless shopping list with sharing capabilities",
    fullDescription: PlayStation,
    tags: ["React", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://shpnlst.vercel.app/",
    timeline: "Oct 2023 - Dec 2023",
    techStack: ["React", "Firebase"]
  },
  {
    id: "youtube-downloader",
    title: "YouTube Video Downloader",
    shortDescription: "Desktop application to download YouTube videos (native only)",
    fullDescription: PlayStation,
    tags: ["Rust", "Vite"],
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://yt-dlp-gui.vercel.app/",
    timeline: "Jan 2024 - Mar 2024",
    techStack: ["Rust", "Vite"]
  },
  {
    id: "dairy-system",
    title: "Digital Dairy System",
    shortDescription: "Modernized version of traditional dairy management methods",
    fullDescription: PlayStation,
    tags: ["Angular", "Node.js"],
    images: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://markdairy.vercel.app/",
    timeline: "Apr 2024 - Jun 2024",
    techStack: ["Angular", "Node.js"]
  },
  {
    id: "frontend-template",
    title: "Frontend Auto Template",
    shortDescription: "Starter template for rapid frontend development",
    fullDescription: PlayStation,
    tags: ["React", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://frontend-template-pi.vercel.app/",
    timeline: "Jul 2024 - Present",
    techStack: ["React", "Tailwind"]
  },
  {
    id: "therapy-website",
    title: "Fountain of Hope Therapy",
    shortDescription: "Website for therapy practice with appointment booking",
    fullDescription: PlayStation,
    tags: ["React", "RubyOnRails", 'Therapy'],
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://fountainofhope.vercel.app",
    timeline: "Aug 2023 - Oct 2023",
    techStack: ["WordPress", "PHP"]
  },
  {
    id: "network-initiated-push",
    title: "Mpesa Network Initiated Push",
    shortDescription: "Money payment system using the mobile money system",
    fullDescription: PlayStation,
    tags: ["Node.js", "WebSockets"],
    images: [
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://empepe.vercel.app/",
    timeline: "Nov 2023 - Jan 2024",
    techStack: ["Node.js", "WebSockets"]
  },
  {
    id: "bank-demo",
    title: "Dummy Bank Demo",
    shortDescription: "Interactive demo of online banking features",
    fullDescription: PlayStation,
    tags: ["React", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://nene-bank.vercel.app/",
    timeline: "Feb 2024 - Apr 2024",
    techStack: ["React", "Firebase"]
  },
  {
    id: "social-auth",
    title: "Social Auth Demo",
    shortDescription: "Demonstration of various social authentication methods",
    fullDescription: PlayStation,
    tags: ["Next.js", "Auth0"],
    images: [
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://steve-oath.vercel.app/",
    timeline: "May 2024 - Present",
    techStack: ["Next.js", "Auth0"]
  },
  {
    id: "debt-management",
    title: "Debt Management System",
    shortDescription: "Tool for tracking and managing personal or business debts",
    fullDescription: PlayStation,
    tags: ["React", "Node.js"],
    images: [
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3"
    ],
    github: 'https://github.com/stephen-nene',
    demo: "https://debtor.vercel.app",
    timeline: "Jun 2024 - Present",
    techStack: ["React", "Node.js"]
  }
];


console.log(projects.length)

export const getProject = (id: string) => {
  return projects.find(project => project.id === id);
};
