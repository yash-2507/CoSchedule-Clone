import React from "react";
import {
  MainDiv,
  LeftDiv,
  LogoDiv,
  LogoImg,
  ExploreDiv,
  RightDiv,
  GetDemoButton,
  DropDownDiv,
} from "./suite.styled";
function SuiteNav() {
    return <MainDiv>
        <LeftDiv>
            <LogoImg src="https://coschedule.com/img/product/coschedule-marketing-suite-logo-color.svg" alt="Marketing Suite Logo" />
            <ExploreDiv></ExploreDiv>
      </LeftDiv>
  </MainDiv>;
}

export default SuiteNav;
