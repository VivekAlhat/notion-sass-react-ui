import { FiClock, FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { FcNews } from "react-icons/fc";
import "./styles/titlebar.scss";

const Titlebar = () => {
  return (
    <div className="titlebar">
      <div className="titlebar__main">
        <FcNews />
        <p>Reading List</p>
      </div>
      <div className="titlebar__options">
        <p>Share</p>
        <FiClock />
        <AiOutlineStar />
        <FiMoreHorizontal />
      </div>
    </div>
  );
};

export default Titlebar;
