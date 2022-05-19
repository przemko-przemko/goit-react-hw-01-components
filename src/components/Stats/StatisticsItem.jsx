import React from "react";

const StatisticsItem = ({ data, title = "", randomColor }) => {
  console.log(data);
  console.log(randomColor);
  return (
    <section>
      {title !== "" && <h2>{title}</h2>}
      <ul>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              style={{
                width: `${percentage}%`,
                border: `solid 3px ${randomColor()}`,
                background: `${randomColor()}`,
              }}
            >
              <span>{label}</span>
              <br></br>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StatisticsItem;
