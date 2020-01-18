import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div>
      <h1>
        {season === "winter" ? "Burr, it is chilly" : `Let's hit the beach`}
      </h1>

      {season === "winter" ? (
        <i class="snowflake icon"></i>
      ) : (
        <i class="sun icon"></i>
      )}
    </div>
  );
};

export default SeasonDisplay;
