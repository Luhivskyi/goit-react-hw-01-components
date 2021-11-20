import React from 'react'
import PropTypes from 'prop-types'
import s from './FriendListItem.module.css'

const FriendListItem = ({id, avatar, name, isOnline}) => {

    
    const statusClassName = [isOnline ? s.online : s.offline];

    return (
        
  <li className={s.item}>
  <span className={statusClassName}></span>
  <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
</li>

    )
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};


export default FriendListItem