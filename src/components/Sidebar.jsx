import { IoAddSharp } from "react-icons/io5";
import { BsClockHistory, BsTrash2Fill } from "react-icons/bs";
import { HiOutlineTemplate } from "react-icons/hi";
import { BiImport, BiCodeBlock, BiReset } from "react-icons/bi";
import { IoIosSearch, IoIosArrowForward, IoIosCog } from "react-icons/io";
import "./styles/sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <div className="sidebar__options__menu_item">
          <BiCodeBlock />
          <p className="sidebar__options__user">Vivek's Notion</p>
          <BiReset />
        </div>
        <div className="sidebar__options__menu">
          <ul>
            <div className="sidebar__options__menu_item">
              <IoIosSearch />
              <li>Quick Find</li>
            </div>
            <div className="sidebar__options__menu_item">
              <BsClockHistory />
              <li>All Updates</li>
            </div>
            <div className="sidebar__options__menu_item">
              <IoIosCog />
              <li>Settings & Members</li>
            </div>
          </ul>
          <ul>
            <div className="sidebar__options__menu_item">
              <IoIosArrowForward />
              <li>Reading List</li>
            </div>
            <div className="sidebar__options__menu_item">
              <IoIosArrowForward />
              <li>Anime Watchlist</li>
            </div>
            <div className="sidebar__options__menu_item">
              <IoAddSharp />
              <li>Add A Page</li>
            </div>
          </ul>
          <ul>
            <div className="sidebar__options__menu_item">
              <HiOutlineTemplate />
              <li>Templates</li>
            </div>
            <div className="sidebar__options__menu_item">
              <BiImport />
              <li>Import</li>
            </div>
            <div className="sidebar__options__menu_item">
              <BsTrash2Fill />
              <li>Trash</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="sidebar__footer">
        <IoAddSharp />
        <p>New page</p>
      </div>
    </div>
  );
};

export default Sidebar;
