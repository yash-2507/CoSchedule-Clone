import styled from "styled-components";
export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black; ;
`;

export const CalenderDiv = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid red;
  gap:0px;
`;

export const DayDiv = styled.div`
/* width:100%; */
min-height: 150px;
height:auto;
border:1px solid blue
`;
