import { DataSaverOffRounded } from "@mui/icons-material";
import React from "react";

function Data(props) {
  let dates = props.dates;
  let day = props.day;
  let data = props.data;
  let id = props.id;
  // function dateFound(ele){
  //     axios
  //     .get("http://localhost:8080/todo")
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setData(res.data.data);
  // }
  return (
    <div>
      {/* {console.log(dates[0])}   `2022-06-${el}T18:30:00.000Z`
          {console.log(day.format("D"), "day")} */}
      {dates[0].map((ele) => {
        if (ele == day.format("D")) {
          console.log(id)
        }
      })}
    </div>
  );
}

export default Data;
