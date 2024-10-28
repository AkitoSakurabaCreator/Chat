import React, { useEffect, useState } from "react";
import "./Chat.scss"
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useAppSelector } from "../../app/hooks";
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";

const Chat = () => {
    const [inputText, setInputText] = useState<string>("");
    const channelId = useAppSelector((state) => state.channel.channelId);
    const channelName = useAppSelector((state) => state.channel.channelName);
    const user = useAppSelector((state) => state.user);
    const { subDocuments: messages } = useSubCollection("channels", "messages");

    const sendMessage = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        

        const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");

        const docRef:DocumentReference<DocumentData> = await addDoc(
            collectionRef, 
            {
                message: inputText,
                timestamp: serverTimestamp(),
                user: user,
        }
    );
    setInputText("");
};

    return <div className="chat">
        {/* chatHeader */}
        <ChatHeader channelName={channelName}></ChatHeader>

        {/* Message */}
        <div className="chatMessage">
            {messages.map((message, index) => (
                <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user}></ChatMessage>
            ))}
        </div>
        {/* chatInput */}
        <div className="chatInput">
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
            <form action="">
                <input type="text" placeholder="メッセージを送信" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText}/>
                <button type="submit" className="chatInputButton" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
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