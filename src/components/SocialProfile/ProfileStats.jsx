import React from 'react'

const Stats = ( {statsName, statsNumber} ) =>{
    return(
        <li>
            <span>{statsName}:</span>
            <span> {statsNumber}</span>
        </li>
    )

}

const ProfileStats = ({ userStats}) => {
    const {likes, followers, views} = userStats
  return (
    <><ul>
        <Stats statsName="Likes" statsNumber={likes}/>
        <Stats statsName="Followers" statsNumber={followers}/>
        <Stats statsName="Views" statsNumber={views}/>
    </ul>
    
    </>
  )
}

export default ProfileStats