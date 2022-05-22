import React from 'react'
import { Wrapper, Image, UserParagraph} from "./Profile_styles"

const Profile = ({userData}) => {
    const { avatar,location, username, tag } = userData
    console.log(avatar)
  return (
    
    <Wrapper >
      <Image src={avatar} alt={username}
      />
      <UserParagraph>{username}</UserParagraph>
      <UserParagraph>{tag}</UserParagraph>
      <UserParagraph>{location}</UserParagraph>
    </Wrapper>
  )
}

export default Profile

//avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
//location: "Ocho Rios, Jamaica"
//stats: {followers: 5603, views: 4827, likes: 1308}
//tag: "jgluke"
//username: "Jacques Gluke"
