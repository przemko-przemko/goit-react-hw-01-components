import React from 'react'

const Profile = ({userData}) => {
    const { avatar,location, username, tag } = userData
    console.log(avatar)
  return (
    <div >
    <div >
      <img src={avatar} alt={username}
      />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    </div>
  )
}

export default Profile

//avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
//location: "Ocho Rios, Jamaica"
//stats: {followers: 5603, views: 4827, likes: 1308}
//tag: "jgluke"
//username: "Jacques Gluke"
