import { DiTerminal } from "react-icons/di";
import { SiJava, SiRuby, SiGit, SiUnity, SiRos, SiAnsys, SiCsharp, SiScikitlearn, SiMongodb } from "react-icons/si";
import { RiFlutterFill, RiCodeSSlashFill, RiPencilRuler2Line } from "react-icons/ri";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { ImStatsDots, ImStatsBars } from "react-icons/im";
import { TbMath, TbMathFunction } from "react-icons/tb";

export const Skills = [
  {
    slug: "react",
    Component: FaReact,
    title: "React",
    Description: () => <>Built a website and desktop app using React alongside Electron and Next.js.</>,
  },
  {
    slug: "nodejs",
    Component: FaNodeJs,
    title: "Node.js",
    Description: () => <>Used to creat web servers and develop APIs.</>,
  },
  {
    slug: "python",
    Component: FaPython,
    title: "Python",
    Description: () => <>Used primarily for machine learning, data manipulation, and http servers.</>,
  },
  {
    slug: "c#",
    Component: SiCsharp,
    title: "C#",
    Description: () => <>Used alongside Unity to develop multiple applications.</>,
  },
  {
    slug: "unity",
    Component: SiUnity,
    title: "Unity",
    Description: () => <>Developed applications for iPhone, Android, HoloLens, Oculus, and Desktop.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Used both for code version control and for collaborating on software projects.</>,
  },
  {
    slug: "machine-learning",
    Component: SiScikitlearn,
    title: "Machine Learning",
    Description: () => <>Utilized Scikit-Learn and Keras to create many different types of ML models.</>,
  },
  {
    slug: "mongoDB",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>Ipmlemented for IOT devices and web server storage.</>,
  },
  {
    slug: "vba",
    Component: RiCodeSSlashFill,
    title: "VBA/VBS",
    Description: () => <>Used for small tasks such as web scraping, file management, and data manipulation.</>,
  },
  {
    slug: "matlab",
    Component: TbMath,
    title: "MATLAB",
    Description: () => <>Wrote many custom functions to solve problems both numerically and analytically.</>,
  },
  {
    slug: "ros",
    Component: SiRos,
    title: "ROS",
    Description: () => <>Utilized this framework to develop a control structure for multiple systems.</>,
  },
  {
    slug: "cad",
    Component: RiPencilRuler2Line,
    title: "CAD",
    Description: () => <>Solidworks CSWP Certificate acquired for mechanical CAD design.</>,
  },
  {
    slug: "ansys",
    Component: SiAnsys,
    title: "Ansys",
    Description: () => <>Used static, dynamic, thermal, shock, and random vibe simulations to help with design iteration and testing.</>,
  },
  {
    slug: "flownex",
    Component: RiFlutterFill,
    title: "Flownex",
    Description: () => <>Utilized this tool to develop fluid flow simulations as well as thermal control systems.</>,
  },
  {
    slug: "jsl",
    Component: ImStatsDots,
    title: "JSL",
    Description: () => <>Created data visualization tools for manufacturing statistics that aided in process decision making.</>,
  },
];
