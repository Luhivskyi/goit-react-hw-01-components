import React from 'react'

import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'



const FriendList = ({friends}) => {
if (friends.length === 0) return null

    return (<ul className={s.friendList}>
        {friends.map(FriendListItem)}
</ul>
    )     

}

export default FriendList