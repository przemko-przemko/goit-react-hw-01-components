import React from 'react'
import data from "./data.json"
import StatisticsItem from './StatisticsItem'

const randomColor = () => "#" + (((1 << 24) * Math.random()) | 0).toString(16);


const Statistics = () => {
  return (
    <StatisticsItem randomColor={randomColor} data={data} title="Statistics"/>
  )
}

export default Statistics