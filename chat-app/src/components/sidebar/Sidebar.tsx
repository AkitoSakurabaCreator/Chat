import React from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
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
              <img src="./icon.png" alt="" />
              <div className="accountName">
                <h4>Tester</h4>
                <span>test</span>
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