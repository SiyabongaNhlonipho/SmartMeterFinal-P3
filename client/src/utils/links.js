import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsPaypal } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import {SiJquery} from "react-icons/si"

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: " notifications",
    path: "notifications",
    icon: <MdOutlineNotificationsActive />,
  },
  {
    id: 3,
    text: "recharge",
    path: "recharge",
    icon: <BsPaypal />,
  },
  {
    id: 4,
    text: "query",
    path: "query",
    icon: <SiJquery />,
  },

  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <CgProfile />,
  },
];

export default links;