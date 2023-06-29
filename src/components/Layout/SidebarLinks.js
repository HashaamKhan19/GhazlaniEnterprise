import { BiHomeAlt } from "react-icons/bi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";

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
    text: "Time Table",
    url: "/timetable",
    icon: BsFillCalendarCheckFill,
  },
];

export default links;
