import React from 'react'
import SingleMessage from './SingleMessage'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux';

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector(store => store.message);
  return (
  messages != null && messages.length > 0 ? (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <SingleMessage key={message?._id} message={message} />
      ))}
    </div>
  ) : (
    <div className="font-semibold px-4 flex-1 flex items-center justify-center text-black">
      No messages yet
    </div>
  )
);

}

export default Messages