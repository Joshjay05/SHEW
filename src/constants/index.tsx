// Navigation
import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
// import { BiHotel, BiRestaurant, BiShoppingBag } from "react-icons/bi";
// import { BsMarkerTip } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
import { CiCircleQuestion } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
// import { FaEarthAmericas } from "react-icons/fa6";

import { IoIosContact } from "react-icons/io";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { MdSupportAgent } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
interface NAV {
  href: string;
  key: string;
  label: string;
  iconURL?: string;
  icon: IconType | string;
}
export const NAV_LINKS: NAV[] = [
  {
    href: "/",
    key: "home",
    label: "Home",
    icon: AiOutlineHome,
  },
  { href: "#about", key: "about", label: "About", icon: CiCircleQuestion },
  // {
  //   href: "#packages",
  //   key: "packages",
  //   label: "Packages",
  //   icon: FaEarthAmericas,
  // },
  { href: "#footer", key: "contact", label: "Contact", icon: IoIosContact },
];

// About

export const TESTIMONIAL = [
  {
    title: "Marie ",
    profession: "",
    URL: "/female.jpg",
    desc: "Fantastic destinations, Knowledge guides, seamless logistics",
  },

  {
    title: "jared Martinez",
    profession: "",
    URL: "/male.jpg",
    desc: "Fantastic destinations, Knowledge guides, seamless logistics and friendly staff.",
  },

  {
    title: "Estelle",
    profession: "",
    URL: "/female.jpg",
    desc: "Paris is always a good idea, but your team's expertise made it exceptional.  Every detail was handled with care, making our trip truly memorable.",
  },

  {
    title: "E.D. Martinez",
    profession: "",
    URL: "/male.jpg",
    desc: "The luxurious resort, serene yoga retreats, and thrilling water sports created the ideal vacation. Your team's local knowledge and thoughtful planning exceeded our expectations.",
  },

  {
    title: "Marie Kernell",
    profession: "",
    URL: "/female.jpg",
    desc: "The guided tours were informative and engaging, and the tea ceremony was a highlight. Thank you for an unforgettable experience.",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["about Us", "Volunteer", "Donate"],
  },
  {
    title: "Our Community",
    links: ["terms and conditions", "customer Reviews"],
  },
];

export const SOCIALS_LINKS = {
  title: "Contact Us",
  links: [
    // { label: "tel", value: "+234 913 381 9948" },
    { label: "Email", value: "info@shewfoundation.com" },
  ],
};

export const SOCIALS = {
  title: "Socials",
  links: [
    {
      id: 1,
      href: "https://www.facebook.com/Shewf/",
      icon: FaFacebookSquare,
    },
    {
      id: 2,
      href: "https://www.instagram.com/shew_foundation",
      icon: FaInstagram,
    },
  ],
};

export const cardService = [
  {
    id: 1,
    title: "Courses",
    description:
      "Begin your journey in countries with excellent opportunities with our DIY courses. Our courses have helped 2,500+ candidates discover pathways to their dream country and land great opportunities abroad.",
    icon: SiCoursera,
    color: "red",
  },
  {
    id: 2,
    title: "Work Visa Support",
    description:
      "Want to move abroad without a job? There are countries that allow you to move in with a Job Seeker Visa, Digital Nomad Visa, and Passive Income Visa and live there for a period of time. We help you navigate the complex approval process for these new-age visas",
    icon: CgSupport,
    color: "blue", //
  },
  {
    id: 3,
    title: "Job Support Service",
    description:
      "Want to move abroad with a job that aligns with your expectations? We strategize your job search with our global experience and help you build a profile that attracts the attention of your target recruiters abroad.",
    icon: MdSupportAgent,
    color: "green",
  },
];

export const serviceCard = [
  {
    id: 0,
    src: "/education.jpg",
    title: "Education",
    description:
      " In 2023, the education sector in Sweden faced notable labor shortages and it continues to see the same. There are increasing opportunities for educators, especially in primary and special needs education, as the demand for qualified teaching professionals continues to grow.",
  },
  {
    id: 1,
    src: "/salegroup.jpg",
    title: "Logistics",
    description: "Truck driving | Bus driving | Dispatch.",
  },
  {
    id: 2,
    src: "/construction.jpg",
    title: "Construction",
    description: "Roofing | Plastering | Carpenters | Plumber | Electrician",
  },
  {
    id: 3,
    src: "/health.jpg",
    title: "Health care",
    description: "Nursing | Doctors | Care assistance",
  },
  {
    id: 4,
    src: "/IT.jpg",
    title: "IT",
    description:
      "The IT sector is experiencing a significant shortfall in skilled workers. Software developers and IT architects are in high demand, reflecting the increased reliance on technology and the digital transformation of various industries, offering substantial job opportunities in this field.",
  },
  {
    id: 5,
    src: "/admin.jpg",
    title: "Admin",
    description: "",
  },
];
