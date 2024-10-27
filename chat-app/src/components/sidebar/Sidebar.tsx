import React from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth } from '../../firebase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
          <div className="serverIcon">
            <img src="./chat.jpg" alt="" />
          </div>
          <div className="serverIcon">
            <img src="./logo192.png" alt="" />
          </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Hello</h3>
          <ExpandMoreIcon></ExpandMoreIcon>
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h4>テストチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon"></AddIcon>
          </div>

          <div className="sidebarChannelList">
            <SidebarChannel></SidebarChannel>
            <SidebarChannel></SidebarChannel>
            <SidebarChannel></SidebarChannel>
            <SidebarChannel></SidebarChannel>
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="sidebarVoice">
                <MicIcon></MicIcon>
                <HeadphonesIcon></HeadphonesIcon>
                <SettingsIcon></SettingsIcon>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Sidebar