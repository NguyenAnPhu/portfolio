import IMAGES from "@/assets/images";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nha-khoa-orion",
    category: "website",
    title: "Nha Khoa Orion",
    image: IMAGES.imgNotFound,
    shortDescription: "Nha Khoa Orion website with dynamic highlight attributes extraction.",
    role: "Frontend Developer",
    responsibilities: [
      "Participated in UI/UX design evaluations to ensure optimal user experience and feasibility.",
      "Developed Frontend interfaces and seamlessly integrated data from the Backend.",
      "Implemented an advanced data extraction feature to dynamically display highlight attributes for the News and Services modules.",
    ],
    previewUrl: "https://nhakhoaorion.vn/",
  },
  {
    id: "greenvoices-media",
    category: "website",
    title: "Greenvoices Media",
    image: IMAGES.imgNotFound,
    shortDescription: "Greenvoices Media website with complex data fetching for core modules.",
    role: "Frontend Developer",
    responsibilities: [
      "Evaluated UI/UX designs, built responsive interfaces, and integrated Backend functionalities.",
      "Developed complex data fetching and rendering logic for core Homepage modules, including Courses, News, and Services.",
    ],
    previewUrl: "https://greenvoices.vn/",
  },
  {
    id: "r-techno-vietnam",
    category: "website",
    title: "R Techno VietNam",
    image: IMAGES.imgNotFound,
    shortDescription: "R Techno VietNam website with custom Profile/Document Download features.",
    role: "Frontend Developer",
    responsibilities: [
      "Consulted on UI/UX flows, developed frontend components, and integrated Backend APIs.",
      "Independently researched and implemented a custom Profile/Document Download feature for end-users.",
    ],
    previewUrl: "https://rtechnovietnam.vn/",
  },
  {
    id: "mua-sam-online-ecom",
    category: "zalo-mini-app",
    title: "Mua sắm online ECOM",
    image: IMAGES.imgNotFound,
    shortDescription: "E-commerce Zalo Mini App built with ZMP SDK and full RESTful backend.",
    role: "Fullstack Developer",
    responsibilities: [
      "Built the user interface and deeply integrated the ZMP SDK.",
      "Handled complex business logic flows including Authentication, Cart Management, and Checkout process.",
      "Designed and developed RESTful APIs to manage full CRUD operations for Products, News, and User Purchase Histories.",
    ],
    previewUrl: "https://zalo.me/s/4165146460804774181",
  },
  {
    id: "greenvoices-media-zma",
    category: "zalo-mini-app",
    title: "Greenvoices Media",
    image: IMAGES.imgNotFound,
    shortDescription: "Greenvoices Media Zalo Mini App fully integrated with external APIs.",
    role: "Frontend Developer",
    responsibilities: [
      "Took primary responsibility for building the Mini App interface and configuring the ZMP SDK.",
      "Fully integrated external APIs.",
      "Handled dynamic data binding.",
      "Successfully managed the end-to-end functional workflows of the application.",
    ],
    previewUrl: "https://zalo.me/s/677836201940591973",
  },
  {
    id: "bat-trach-lac-viet",
    category: "mobile-app",
    title: "Bát Trạch Lạc Việt",
    image: IMAGES.imgNotFound,
    shortDescription: "Android mobile application migrated to React Native (TypeScript).",
    role: "Frontend Developer",
    responsibilities: [
      "Led the code refactoring process and executed the platform migration to a mobile application for Android.",
      "Developed the application using React Native (TypeScript).",
      "Integrated comprehensive APIs to ensure Data synchronization, High performance, and System stability.",
    ],
    previewUrl: "https://play.google.com/store/apps/details?id=com.lptech.battrach",
  },
];
