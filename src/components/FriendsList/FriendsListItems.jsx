import React from 'react'
import { SpanOffline,SpanOnline, ListItem } from "./FriendslistItems_styled"

const FriendsListItem = ({avatar, name, isOnline, id}) =>{
  return(
    <ListItem key={id}>
      <span></span>
      {isOnline? <SpanOnline/> : <SpanOffline/>}
      <img src={avatar} alt={name} />
      <span>{name}</span>
    </ListItem>
  )
}

const FriendsListItems = ({friends}) => {
  return (
<ul>
   {friends.map(({avatar, name, isOnline, id}) =>{
       return(
        <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}/>
       )

   })} 
</ul>

  )
}
 

export default FriendsListItems