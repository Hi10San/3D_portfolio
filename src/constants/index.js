export const myProjects = [
{
  id: 1,
  title: "AI Home Assistant System",
  description:
    "A fully local, privacy-focused AI-powered smart home assistant built using Ollama, Home Assistant, and Raspberry Pi with voice control.",
  subDescription: [
    "Built a distributed AI system using Ollama with Llama 3.2 3B running on WSL2 for local AI processing.",
    "Integrated Home Assistant on a virtual machine to manage smart home automation and device control.",
    "Developed a voice interface using Wyoming Satellite on Raspberry Pi for real-time speech interaction.",
    "Designed a fully offline system ensuring 100% privacy with no cloud dependency.",
    "Implemented multi-device communication over local network for seamless automation."
  ],
  href: "", // 👉 put GitHub or demo link here later
  logo: "",
  image: "/assets/projects/ai-home.png", // 👉 change image
  tags: [
    {
      id: 1,
      name: "Ollama",
      path: "/assets/logos/ollama.svg",
    },
    {
      id: 2,
      name: "Home Assistant",
      path: "/assets/logos/homeassistant.svg",
    },
    {
      id: 3,
      name: "Raspberry Pi",
      path: "/assets/logos/raspberrypi.svg",
    },
    {
      id: 4,
      name: "WSL2",
      path: "/assets/logos/linux.svg",
    },
  ],
},
{
  id: 2,
  title: "Dark Web Portfolio Hosting (Tor + Nginx)",
  description:
    "Deployed a personal portfolio website on the Tor network using WSL, Nginx, and Onion services.",
  subDescription: [
    "Set up a Linux (WSL) environment on Windows to host services locally.",
    "Configured Nginx as a web server to serve a custom portfolio website.",
    "Installed and configured Tor to create a hidden service (.onion) for anonymous hosting.",
    "Generated a custom vanity v3 onion address using mkp224o.",
    "Used OnionShare for secure file sharing and testing Tor-based communication.",
    "Managed system services, networking, and security configurations manually via CLI.",
  ],
  href: "https://github.com/Hi10San/darkweb_website",
  logo: "",
  image: "/assets/projects/darkweb-project.png",
  tags: [
    {
      id: 1,
      name: "Tor",
      path: "/assets/logos/tor.svg",
    },
    {
      id: 2,
      name: "Nginx",
      path: "/assets/logos/nginx.svg",
    },
    {
      id: 3,
      name: "WSL",
      path: "/assets/logos/wsl.svg",
    },
    {
      id: 4,
      name: "Linux",
      path: "/assets/logos/linux.svg",
    },
  ],
},
{
  id: 3,
  title: "Local NAS Server (Old Phone Cloud)",
  description:
    "A fully offline, private NAS system built using an old Android phone, providing Google Drive–like functionality over a local network.",
  subDescription: [
    "Engineered a 24/7 local NAS server using Termux (Linux on Android) with OpenSSH for secure remote access.",
    "Designed a structured file system with shared storage using symbolic linking between internal Linux directories and Android storage.",
    "Enabled seamless file transfer and remote management via SSH and SFTP protocols across devices.",
    "Integrated CX File Explorer (mobile) and RaiDrive (Windows) to simulate a real cloud drive with drag-and-drop functionality.",
    "Optimized Android system settings to remove background restrictions, ensuring continuous server uptime.",
    "Built a fully offline, privacy-focused cloud alternative with zero dependency on external services or internet.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/nas-server.png",
  tags: [
    {
      id: 1,
      name: "Termux",
      path: "/assets/logos/termux.svg",
    },
    {
      id: 2,
      name: "OpenSSH",
      path: "/assets/logos/ssh.svg",
    },
    {
      id: 3,
      name: "SFTP",
      path: "/assets/logos/sftp.svg",
    },
    {
      id: 4,
      name: "Linux",
      path: "/assets/logos/linux.svg",
    },
  ],
},
];

export const mySocials = [
  // {
  //   name: "WhatsApp",
  //   href: "",
  //   icon: "/assets/socials/whatsApp.svg",
  // },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/hiten-prajapati-a0b027343",
    icon: "/assets/socials/linkedIn.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/ali.sanatidev/reels/",
  //   icon: "/assets/socials/instagram.svg",
  // },
  // {
  //   name: "Discord",
  //   href: "https://www.instagram.com/ali.sanatidev/reels/",
  //   icon: "/assets/socials/Discord.svg",
  // },
];

// export const experiences = [
//   {
//     title: "Software Developer",
//     job: "Security & Defense Projects",
//     date: "2021-2023",
//     contents: [
//       "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
//       "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
//       "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
//       "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
//       "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
//     ],
//   },
//   {
//     title: "Back-End Developer",
//     job: "Car Manufacture",
//     date: "2023-2024",
//     contents: [
//       "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
//       "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
//       "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
//       "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
//       "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
//     ],
//   },
//   {
//     title: "Freelance Developer",
//     job: "Self-Employed",
//     date: "2025-Present",
//     contents: [
//       "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
//       "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
//     ],
//   },
// ];
// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://robohash.org/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://robohash.org/john",
//   },
//   {
//     name: "Alice",
//     username: "@alice",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/alice",
//   },
//   {
//     name: "Bob",
//     username: "@bob",
//     body: "Incredible work! The attention to detail is phenomenal.",
//     img: "https://robohash.org/bob",
//   },
//   {
//     name: "Charlie",
//     username: "@charlie",
//     body: "This exceeded all my expectations. Absolutely stunning!",
//     img: "https://robohash.org/charlie",
//   },
//   {
//     name: "Dave",
//     username: "@dave",
//     body: "Simply breathtaking. The best decision I've made in a while.",
//     img: "https://robohash.org/dave",
//   },
//   {
//     name: "Eve",
//     username: "@eve",
//     body: "So glad I found this. It has changed the game for me.",
//     img: "https://robohash.org/eve",
//   },
// ];