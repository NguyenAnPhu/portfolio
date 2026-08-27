import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "lp-tech",
    company: "LP TECHNOLOGY ELECTRONIC COMMERCE COMPANY LIMITED",
    period: "08/2024 - 08/2026",
    position: "FULLSTACK DEVELOPER",
    responsibilityGroups: [
      {
        title: "Project Planning & Collaboration",
        items: [
          "Collaborate closely with clients and cross-functional teams (Design, BA) to gather and analyze system business requirements.",
          "Participate in evaluating UI/UX design feasibility, ensuring optimal user experiences prior to implementation.",
          "Perform task breakdown, time estimation, and proactively manage project timelines to ensure on-time delivery.",
        ],
      },
      {
        title: "Web Development",
        items: [],
        subGroups: [
          {
            title: "Frontend",
            items: [
              "Develop responsive and user-friendly web interfaces using HTML, CSS/SASS, Bootstrap, JavaScript, and jQuery.",
              "Implement and customize Twig templates to integrate frontend interfaces with backend systems.",
              "Build semantic, SEO-friendly HTML structures and apply technical SEO best practices.",
              "Optimize web performance and improve Core Web Vitals and Google Lighthouse scores.",
            ],
          },
          {
            title: "Backend",
            items: [
              "Maintain and further develop the existing Backend system.",
              "Extend data structures and business logic.",
              "Implement additional features based on project requirements using PHP and LPTech Framework.",
            ],
          },
        ],
      },
      {
        title: "Zalo Mini App Development",
        items: [],
        subGroups: [
          {
            title: "Frontend",
            items: [
              "Implement Zalo Mini App projects using ZMP SDK, ReactJS, and TypeScript.",
              "Utilize Tailwind CSS for flexible UI construction.",
              "Developed Frontend interfaces and integrated data from the Backend.",
            ],
          },
          {
            title: "State & Data Management",
            items: [
              "Manage centralized state and optimize API calling performance using Redux Toolkit combined with RTK Query.",
            ],
          },
          {
            title: "Backend API",
            items: [
              "Design and develop RESTful API systems using PHP (LPTech Framework) for seamless data synchronization with the Mini App.",
            ],
          },
        ],
      },
      {
        title: "Mobile App Development",
        items: [],
        subGroups: [
          {
            title: "Frontend",
            items: [
              "Develop and maintain the frontend of Android mobile applications using React Native and TypeScript.",
              "Contribute to new feature development.",
              "Perform code refactoring.",
              "Migrate existing projects.",
              "Ensure a stable and scalable user experience.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hoang-nguyen",
    company: "HOANG NGUYEN TECHNOLOGY COMPANY",
    period: "02/2023 - 04/2023",
    position: "IT INTERN",
    responsibilityGroups: [
      {
        title: "Responsibilities",
        items: [
          "Managed and operated e-commerce websites, including updating and editing product content and managing order statuses.",
          "Monitored and tested Smart Home devices and surveillance camera systems to ensure stable and reliable operation.",
          "Inspected product conditions and handled warranty requests and procedures for technology products and devices.",
          "Consulted and supported customers throughout their product usage, while handling customer inquiries and resolving arising issues.",
          "Collaborated with relevant departments to troubleshoot technical issues, resolve customer requests, and maintain service quality.",
        ],
      },
    ],
  },
];
