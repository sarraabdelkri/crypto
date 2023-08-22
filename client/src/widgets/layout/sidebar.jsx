import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  NewspaperIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { SidebarItem } from ".";

export function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="h-screen font-inter">
      <div className="flex h-[56px] items-center pl-2">
        <Link to="/">
          <img
            alt="EShaper"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            className="h-[70px] w-[200px] object-contain"
            src="/img/unnamed.png"
          />
        </Link>
      </div>
      <div className="mt-6 flex h-full flex-col pr-2">
        <SidebarItem to="/crypto">
          <InformationCircleIcon className="mr-3 h-6 w-6" />
          <span className="text-center">Crypto Currency</span>
        </SidebarItem>
        <SidebarItem to="/cryptoAdress">
          <BriefcaseIcon className="mr-3 h-6 w-6" />
          <span className="text-center">Form </span>
        </SidebarItem>
        <SidebarItem to="/chat" style={{ paddingLeft: "1rem" }}>
          <ChatBubbleBottomCenterTextIcon className="mr-3 h-6 w-6" />
          <span className="text-center">Chat Bot</span>
        </SidebarItem>
        <SidebarItem to="/news">
          <NewspaperIcon className="mr-3 h-6 w-6" />
          <span className="text-center">News </span>
        </SidebarItem>
        <SidebarItem to="/portfolioTable">
          <NewspaperIcon className="mr-3 h-6 w-6" />
          <span className="text-center"> portfolio </span>
        </SidebarItem>
        <SidebarItem to="/ticketForm">
          <NewspaperIcon className="mr-3 h-6 w-6" />
          <span className="text-center"> Ticket </span>
        </SidebarItem>

        {user && (
          <SidebarItem to="/profile">
            <UserCircleIcon className="mr-3 h-6 w-6" />
            <span className="text-center">Profile</span>
          </SidebarItem>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
