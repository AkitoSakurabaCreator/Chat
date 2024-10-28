import React, { useEffect, useState } from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { onSnapshot, collection, query, DocumentData } from "firebase/firestore";

interface Channel{
  id: string,
  channel: DocumentData;
}

const Sidebar = () => {
  const [channels, setChannels] = useState<Channel[]>([]);

  const user = useAppSelector((state) => state.user);
  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
          // isPrivate: doc.data().isPrivate,
          // members: doc.data().members,
          // lastMessage: doc.data().lastMessage,
          // lastMessageTimestamp: doc.data().lastMessageTimestamp,
          // createdAt: doc.data().createdAt,
          // updatedAt: doc.data().updatedAt,
          // avatar: doc.data().avatar, // Uncomment if using Firebase Storage
          // videoStatus: doc.data().videoStatus, // Uncomment if using Firebase Storage
      })
    );
      setChannels(channelsResults);
    });
  }, []);

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
            {channels.map((channel) => (
            <SidebarChannel channel={channel} id={channel.id} key={channel.id}></SidebarChannel>
            ))}
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