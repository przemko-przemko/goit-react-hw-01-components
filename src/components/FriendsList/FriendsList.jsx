import React from 'react'
import friends from "./friends.json"
import FriendsListItems from "./FriendsListItems"

const FriendsList = () => {
  return (
    <FriendsListItems friends={friends}></FriendsListItems>
  )
}

export default FriendsList