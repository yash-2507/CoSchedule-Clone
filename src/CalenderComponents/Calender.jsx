import React, { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4, v4 } from "uuid";
import axios from "axios";
import {
    MainDiv,
    RangeDiv,
    CalenderDiv,
    DayDiv,
    DaynameDivs,
    DaysName,
    DayP,
    ContainerDiv,
} from "./calender.styled";
import { useNavigate } from "react-router-dom";
import Data from "./data/Data";
function Calender() {
    const [calender, setCalender] = useState([]);
    const [value, setValue] = useState(moment());
    const [back, setBack] = useState(false);
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);
    const [toAdd, setToAdd] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setToAdd({
                title: "learn react",
                task: ["learn hooks", "learn states"],
            });
        }, 5000);
    }, []);

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("Week");
    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const a = [];
        while (day.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, "day").clone())
            );
        }
        setCalender(a);
    }, [value]);

    // console.log(
    //   moment.locale("en", {
    //     calenders: {
    //       sameday: `[Today at] LT`,
    //     },
    //   })
    // );
    function handleProject(uuid, day) {
        let date = day._d;
        Navigate(`/todoTask/:${date}`);
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/todo")
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data);

                if (data.length != 0) {
                    let x = data.map((ele) => ele.date.split("-"));
                    console.log(x);
                    let z = x.map((ele) => ele[2].split("T")[0]);
                    console.log(z);
                    setDates([...dates, z]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // console.log(
    //   moment.locale("en", {
    //     calenders: {
    //       sameday: `[Today at] LT`,
    //     },
    //   })
    // );

    // let z =x[2].shift()
    // console.log(z);
    function handleProject(uuid, day) {
        let date = day._d;
        Navigate(`/todoTask/:${date}`);
    }

    function handleMouse() {
        setBack(back == true ? false : true);
        // console.log(back);
    }

    // console.log(dates)
    let z;
    return (
        <MainDiv>
            <div>
                <h4>CALENDER</h4>
            </div>
            <div style={{ width: "90%", margin: "auto" }}>
                <RangeDiv>
                    <p>
                        {`${startDay.format("DD MMM")} - ${endDay.format(
                            "DD MMM"
                        )},${endDay.format("YYYY")}`}
                    </p>
                </RangeDiv>
            </div>

            <ContainerDiv>
                <DaynameDivs>
                    <DaysName>
                        <DayP>SUNDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>MONDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>TUESDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>WEDNESDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>THURSDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>FRIDAY</DayP>
                    </DaysName>
                    <DaysName>
                        <DayP>SATURDAY</DayP>
                    </DaysName>
                </DaynameDivs>
                <CalenderDiv>
                    {calender.map((week) => (
                        <>
                            {week.map((day) => {
                                {
                                    /* <div>{day.format("D").toString()}</div> */
                                }
                                {
                                    /* {console.log(day.format("D/MMM"))} */
                                }
                                const uuid = v4();
                                return (
                                    <DayDiv
                                        key={uuid}
                                        onClick={() => handleProject(uuid, day)}
                                    >
                                        <p style={{ fontSize: "12px" }}>
                                            {day.format("D")}
                                        </p>

                                        {/* {console.log("day",day.format("D"))}   */}
                                        {/* <Data  day={day} dates={dates} data={data} id={data[0]._id}></Data> */}

                                        {day.format("D") == "15" ? (
                                            <>
                                                {toAdd.task != undefined ? (
                                                    <div
                                                        style={{
                                                            width: "85%",
                                                            border: "1px solid gray",
                                                            borderRadius: "3px",
                                                            boxSizing:
                                                                "border-box",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <h5
                                                            style={{
                                                                background:
                                                                    "#DEDEDE",
                                                                margin: "0",
                                                                width: "100%",
                                                            }}
                                                        >
                                                            {toAdd.title}
                                                        </h5>
                                                        <p>{toAdd.task[0]}</p>
                                                        <p>{toAdd.task[1]}</p>
                                                    </div>
                                                ) : null}
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </DayDiv>
                                );
                            })}
                        </>
                    ))}
                </CalenderDiv>
            </ContainerDiv>
        </MainDiv>
    );
}

export default Calender;
