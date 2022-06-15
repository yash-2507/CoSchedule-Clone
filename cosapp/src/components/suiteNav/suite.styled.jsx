import styled from "styled-components"
export const MainDiv = styled.div`
width:100%;
background-color:#FFFFFF;
height:61px;
border:1px solid red;
color: #2F2F2F;
font-family: museo sans 700 sans-serif;
display: flex;
padding:10px;
box-sizing: border-box;
justify-content: space-between;
position: sticky;
top:0;
`
export const LeftDiv = styled.div`
display: flex;
gap:20px;
align-items: center;

`
export const LogoDiv = styled.div`

`

export const LogoImg = styled.img`
height:40px;
width:180px;
cursor: pointer;

`
export const ExploreDiv = styled.div`
display: flex;
cursor: pointer;

&:hover{
    color: #eb7e5c;
}
@media screen and (max-width:1000px) {
    display: none;
}
`
export const RightDiv = styled.div`
display: flex;
align-items: center;

`
export const GetDemoButton = styled.button`
width:150px;
height:40px;
border: none;
background-color: #eb7e5c;
color: #FFFFFF;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
cursor: pointer;

font-family: museo sans 700 sans-serif;
&:hover{
    background-color: #e7452c;
}
@media screen and (max-width:1000px) {
    display: none;
}
`
export const DropDownDiv = styled.div`
color: gray;
/* border:10px solid whitesmoke; */
display: none;
box-sizing: border-box;
border-radius: 4px;;
padding: 3px;
box-shadow:0px 0px 4px 4px #DEDEDE;
background-color: 0px 0px 3px 3px #BABABA;
align-items: center;
text-align: center;
align-self: center;
align-content: center;
@media screen and (max-width:1000px) {
    display: block;
}
cursor: pointer;
`