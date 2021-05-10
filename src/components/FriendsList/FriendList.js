import React from 'react'
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'



const FriendList = ({friends}) => {
if (friends.length === 0) return null

    return (<ul className={s.friendList}>
     
      {friends.map(({ id, avatar, name, isOnline }) =>
        <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline} />)}
</ul>
    )     

}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList