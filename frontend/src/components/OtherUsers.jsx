import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    useGetOtherUsers();
    const { otherUsers, searchTerm } = useSelector(store => store.user);
    const conversationUsers = otherUsers?.find((user) => user.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    if (!otherUsers) {
        return;
    }
    return (
        <div className='overflow-auto flex-1'>
            {
                searchTerm === '' ?
                    (
                        otherUsers?.map((user) => {
                            return (
                                <OtherUser key={user._id} user={user} />
                            )
                        })
                    ) :
                        conversationUsers ? (
                            [conversationUsers]?.map((user) => {
                            return (
                                <OtherUser key={user._id} user={user} />
                            )
                        })
                        ):(<div className='flex justify-center items-center'>No chats found</div>)
            }
        </div>
    )
}

export default OtherUsers