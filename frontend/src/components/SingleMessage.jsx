import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const SingleMessage = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);
    useEffect(() => {
        scroll.current?.scrollIntoView({ behaviour: 'smooth' })
    })
    function formatToIST(dateStr) {
        const date = new Date(dateStr);
        const options = {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        };

        return date.toLocaleTimeString("en-IN", options);
    }
    return (
        <div>
            <div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? 'chat-end' : 'chat-start'}  `}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto}
                        />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">{formatToIST(message?.createdAt)}</time>
                </div>
                <div className="chat-bubble">{message?.message}</div>
            </div>
        </div>
    )
}

export default SingleMessage