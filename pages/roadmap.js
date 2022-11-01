import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { RoadMapStyle, Wrapper, Ul, Li } from "../Components/styles";
import { H1, HR, H3 } from "../Components/Typography";
const roadmap = () => {
  const [mount, setMount] = useState(false);
  const Box = () => {
    return (
      <>
        <Wrapper
          style={{
            width: "400px",
            maxWidth: "400px",
            maxHeight: "500px",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          <Wrapper className="d-flex" style={{ flexDirection: "column" }}>
            <H1>01</H1>
            <HR />
            <Wrapper
              classNme="ml-3"
              style={{
                backgroundColor: "#332D2D",
                // paddingLeft: "30px",
                // paddingRight: "35px",
                // paddingTop: "40px",
                // paddingBottom: "35px",
              }}
            >
              <Wrapper className="ml-3 mt-4 mb-4 mr-5">
                <H3 size="23px">AUGUST</H3>
                <Ul
                  className="mt-4"
                  style={{ color: "#FEF0E3", width: "300px" }}
                >
                  <Li className="mt-2" size="18px">
                    Access Card Waitlist Release
                  </Li>
                  <Li className="mt-2" size="18px">
                    Ongoing Sports Betting MVP Development
                  </Li>
                  <Li className="mt-2" size="18px">
                    Delegation Model Architecture
                  </Li>
                </Ul>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </>
    );
  };
  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <RoadMapStyle>
        <Navbar title="Road Map" />
        <Wrapper
          className="container container-fluid"
          style={{ marginTop: "100px" }}
        >
          <Wrapper className="row align-items-center">
            <Wrapper className="col-md-6">
              <H1>ROAD MAP</H1>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper
          className=""
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <Wrapper className="roadmap_scroll_box container container-fluid">
            <Wrapper className="d-flex" style={{ flexDirection: "row" }}>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </RoadMapStyle>
    </>
  ) : (
    ""
  );
};

export default roadmap;
