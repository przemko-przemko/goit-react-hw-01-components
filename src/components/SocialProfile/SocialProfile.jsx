import React from 'react'
import user from "./user.json"
import Profile from "./Profile"
import ProfileStats from "./ProfileStats"

console.log(user)
console.log(user.stats)

const SocialProfile = () => {
  return (
      <>
      <Profile userData={user}/>
      <ProfileStats userStats={user.stats}/>
      
      </>
  )
}

export default SocialProfile