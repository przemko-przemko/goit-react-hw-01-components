import React from 'react'

const FriendsListItem = ({avatar, name, isOnline, key}) =>{
  return(
    <li>
      <span className={isOnline? "online" : "offline"}></span>
      <img src={avatar} alt={name} />
      <span>{name}</span>
    </li>
  )
}

const FriendsListItems = ({friends}) => {
    console.log(friends)
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