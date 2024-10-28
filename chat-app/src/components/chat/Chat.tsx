import React, { useEffect, useState } from "react";
import "./Chat.scss"
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useAppSelector } from "../../app/hooks";
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

interface Messages{
    timestamp: Timestamp;
    message: string;
    user: {
        uid: string,
        photo: string,
        email: string,
        displayName: string;
    };
}

const Chat = () => {
    const [inputText, setInputText] = useState<string>("");
    const [messages, setMessages] = useState<any[]>([]);
    const channelName = useAppSelector((state) => state.channel.channelName);
    const channelId = useAppSelector((state) => state.channel.channelId);
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        let collectionRef = collection(db, "channels", String(channelId), "messages");

        onSnapshot(collectionRef, (snapshot) => {
            let results: any[] = [];
            snapshot.docs.forEach((doc) => {
                results.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user,
                });
            });
            setMessages(results);
        })
    }, [channelId]);

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
                <input type="text" placeholder="メッセージを送信" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}/>
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