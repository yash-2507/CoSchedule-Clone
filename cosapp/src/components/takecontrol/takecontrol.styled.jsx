import styled from "styled-components";
// import styled from 'styled-components/native'
export const MainDiv = styled.div`
  background-color: whitesmoke;
  font-family: museo sans 700 sans-serif;
  width: 100%;
  height: auto;
  border: 2px solid blue;
  color: #223000;
`;
export const ContentDiv = styled.div`
  /* style={{ width: "80%", margin: "auto" ,maxWidth:"1000px"}} */
  width: 80%;
  margin: auto;
  max-width: 1000px;
`;

export const H1Tag = styled.h1`
  font-size: 50px;
`;
export const H3tag = styled.tag`
  font-size: 26px;
  /* fontFamily:"marriweather sans serif" */
  font-family: Merriweather serif;
`;

export const RequestDiv = styled.button`
  width: 220px;
  height: 52px;
  background-color: #eb7e5c;
  color: #ffffff;
  &:hover{
    background-color: #e7452c;
  }
`;
