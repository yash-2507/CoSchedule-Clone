import React from "react";
import { MainDiv, ContentDiv, H1Tag, H3tag,RequestDiv } from "./takecontrol.styled";
function Takecontrol() {
  return (
    <MainDiv>
      <ContentDiv>
        <H1Tag>
          Take Control Of Your Process And Bring Your Team Together.
        </H1Tag>
        <i>
          <H3tag>
            Complete more work. Deliver projects on time. Prove your value.
          </H3tag>
        </i>
          <RequestDiv>Request Your Demo</RequestDiv>
      </ContentDiv>
    </MainDiv>
  );
}

export default Takecontrol;
