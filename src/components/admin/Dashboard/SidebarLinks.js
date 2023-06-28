import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";

const links = [
  {
    id: 1,
    text: "All Users",
    url: "/",
    icon: AiOutlineUser,
  },
  {
    id: 2,
    text: "Questions",
    url: "/questions",
    icon: AiOutlineQuestionCircle,
  },
  {
    id: 3,
    text: "Results",
    url: "/results",
    icon: BiNotepad,
  },
];

export default links;
