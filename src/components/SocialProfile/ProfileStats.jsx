import React from 'react'
import { List, ListItem } from "./ProfileStats_styles"

const Stats = ( {statsName, statsNumber} ) =>{
    return(
        <ListItem>
            <span>{statsName}:</span>
            <span> {statsNumber}</span>
        </ListItem>
    )

}

const ProfileStats = ({ userStats}) => {
    const {likes, followers, views} = userStats
  return (
    <><List>
        <Stats statsName="Likes" statsNumber={likes}/>
        <Stats statsName="Followers" statsNumber={followers}/>
        <Stats statsName="Views" statsNumber={views}/>
    </List>
    
    </>
  )
}

export default ProfileStats