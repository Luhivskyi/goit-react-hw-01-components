import React from 'react';



import Profile from './Profile';
 import Statistics from './Statistics';
 import FriendsList from './FriendsList';
 import Transactions from './Transactions';

import statsData from '../data/statistics.json'
import userData from '../data/user.json'
 import friends from '../data/friends.json'
 import transactions from '../data/transactions.json'



const app = () => {

  return (
    <>
      <Profile name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
        stats={userData.stats} />
      
      <Statistics items={statsData} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions}/>
    </>
  )
}

export default App;