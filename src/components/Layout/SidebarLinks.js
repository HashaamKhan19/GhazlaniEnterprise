import { BiHomeAlt } from "react-icons/bi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaFileContract } from "react-icons/fa";

const links = [
  {
    id: 1,
    text: "Dashboard",
    url: "/",
    icon: BiHomeAlt,
  },
  {
    id: 2,
    text: "Questions",
    url: "/questions",
    icon: AiOutlineQuestionCircle,
  },
  {
    id: 3,
    text: "Tracking",
    url: "/tracking",
    icon: FaFileContract,
  },
  {
    id: 4,
    text: "Time Table",
    url: "/timetable",
    icon: BsFillCalendarCheckFill,
  },
];

export default links;
