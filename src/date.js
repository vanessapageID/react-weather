import React from "react";

export default function DateWeather(props) {
  const DateInstance = new Date(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[DateInstance.getDay()];
  let hours = DateInstance.getHours();

  let minutes = DateInstance.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      on {day} at {hours}:{minutes}
    </div>
  );
}
