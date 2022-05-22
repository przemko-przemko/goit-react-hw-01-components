import React from "react";
import {List, Wrapper,ListItem } from "./Statistics_styles"

const StatisticsItem = ({ data, title = "", randomColor }) => {
  console.log(data);
  console.log(randomColor);
  return (
    <Wrapper>
      {title !== "" && <h2>{title}</h2>}
      <List>
        {data.map(({ id, label, percentage }) => {
          return (
            <ListItem
              key={id}
              style={{
                width: `${percentage}%`,
                background: `${randomColor()}`,
              }}
            >
              <span>{label}</span>
              <br></br>
              <span>{percentage}%</span>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default StatisticsItem;
