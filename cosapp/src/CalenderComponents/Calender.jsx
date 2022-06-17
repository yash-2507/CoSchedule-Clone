import React from "react";
import moment from "moment";
import { MainDiv, CalenderDiv,DayDiv } from "./calender.styled";
function Calender() {
  const value = moment();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("Week");
  const day = startDay.clone().subtract(1, "day");
  const calender = [];
  while (day.isBefore(endDay, "day")) {
    calender.push(
    Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone()
        )
    );
  }
  return (
    <MainDiv>
      <CalenderDiv>
        {calender.map((week) => (
          <>
            {week.map((day) => {
              {/* <div>{day.format("D").toString()}</div> */ }
              {/* {console.log(day.format("D/MMM"))} */}
             return (<DayDiv>{day.format("D")}</DayDiv>) 
            })}
          </>
        ))}
      </CalenderDiv>
    </MainDiv>
  );
}

export default Calender;
