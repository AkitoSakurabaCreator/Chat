import React from "react";
import "./Chat.scss"
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Chat = () => {
    return <div className="chat">
        {/* chatHeader */}
        <ChatHeader></ChatHeader>

        {/* Message */}
        <div className="chatMessage"></div>
        {/* chatInput */}
        <div className="chatInput">
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
            <form action="">
                <input type="text" placeholder="メッセージを送信" />
                <button className="chatInputButton">
                    送信
                </button>
            </form>

            <div className="chatInputIcons">
                <CardGiftcardIcon></CardGiftcardIcon>
                <GifIcon></GifIcon>
                <EmojiEmotionsIcon></EmojiEmotionsIcon>
            </div>
        </div>
    </div>;
};

export default Chat;