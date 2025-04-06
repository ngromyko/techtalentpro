import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaRegClipboard,
  FaRobot,
  FaTachometerAlt,
  FaAndroid,
  FaApple,
  FaSketch,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDotnet,
  SiGoland,
  SiRuby,
  SiCplusplus,
  SiFlutter,
  SiGraphql,
  SiKubernetes,
  SiTensorflow,
} from "react-icons/si";
import { GiTeamUpgrade, GiPathDistance } from "react-icons/gi";
import { MdOutlineDesignServices, MdBusinessCenter } from "react-icons/md";
import { RiServerLine } from "react-icons/ri";

const frontendStack = [
  { name: "React", icon: <FaReact className="text-cyan-500 text-6xl" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-500 text-6xl" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500 text-6xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
];

const backendStack = [
  { name: "Java", icon: <FaJava className="text-red-600 text-6xl" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-600 text-6xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
  { name: "Golang", icon: <SiGoland className="text-blue-400 text-6xl" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-600 text-6xl" /> },
  { name: "Ruby", icon: <SiRuby className="text-red-500 text-6xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 text-6xl" /> },
];

const qaStack = [
  { name: "Manual", icon: <FaRegClipboard className="text-blue-600 text-6xl" /> },
  { name: "Automation", icon: <FaRobot className="text-green-600 text-6xl" /> },
  { name: "Performance", icon: <FaTachometerAlt className="text-red-600 text-6xl" /> },
];

const mobileStack = [
  { name: "Android", icon: <FaAndroid className="text-green-600 text-6xl" /> },
  { name: "iOS", icon: <FaApple className="text-gray-600 text-6xl" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-600 text-6xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-600 text-6xl" /> },
];

const pmStack = [
  { name: "Project Manager", icon: <GiTeamUpgrade className="text-yellow-600 text-6xl" /> },
  { name: "Scrum Master", icon: <GiPathDistance className="text-red-500 text-6xl" /> },
  { name: "Project Coordinator", icon: <MdBusinessCenter className="text-blue-600 text-6xl" /> },
];

const analystStack = [
  { name: "Business", icon: <MdBusinessCenter className="text-green-500 text-6xl" /> },
  { name: "System", icon: <RiServerLine className="text-purple-600 text-6xl" /> },
];

const designersStack = [
  { name: "UX Engineers", icon: <MdOutlineDesignServices className="text-pink-600 text-6xl" /> },
  { name: "UI Design", icon: <FaSketch className="text-orange-600 text-6xl" /> },
  { name: "Graphic Designers", icon: <SiGraphql className="text-pink-500 text-6xl" /> },
];

const devOpsStack = [
  { name: "DevOps Engineers", icon: <SiKubernetes className="text-blue-600 text-6xl" /> },
  { name: "DevSecOps", icon: <FaCloud className="text-gray-600 text-6xl" /> },
  { name: "SRE", icon: <RiServerLine className="text-green-600 text-6xl" /> },
  { name: "Cloud Engineers", icon: <FaCloud className="text-cyan-600 text-6xl" /> },
];

const dataStack = [
  { name: "Data Analyst", icon: <FaDatabase className="text-orange-600 text-6xl" /> },
  { name: "Data Engineer", icon: <SiTensorflow className="text-red-600 text-6xl" /> },
  { name: "Data Scientist", icon: <FaReact className="text-purple-600 text-6xl" /> },
  { name: "Big Data", icon: <FaDatabase className="text-blue-600 text-6xl" /> },
];

export const technologies = [
  { title: "Frontend Development", stack: frontendStack },
  { title: "Backend Development", stack: backendStack },
  { title: "Mobile Development", stack: mobileStack },
  { title: "Quality Assurance", stack: qaStack },
  { title: "Project Management", stack: pmStack },
  { title: "Analysts", stack: analystStack },
  { title: "Designers", stack: designersStack },
  { title: "DevOps", stack: devOpsStack },
  { title: "Data Platform", stack: dataStack },
];
