import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { WorthStyle, Wrapper } from "../Components/styles";
import { H1, H2, H3, H4, POrg, HR } from "../Components/Typography";
import Image from "next/Image";
const worth = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="Worth" />
      <WorthStyle>
        <Wrapper className="container container-fluid">
          <Wrapper className="row" style={{ marginTop: "100px" }}>
            <Wrapper className="ml-4 col-md-5">
              <H1 className="worth_h1_res_size">
                OUR
                <br />
                WORTH
              </H1>
            </Wrapper>
            <Wrapper className="col-md-1"></Wrapper>
            <Wrapper className="col-md-5 ml-4">
              <POrg
                color="white"
                style={{ fontWeight: "360", fontSize: "20px" }}
              >
                We are guided by a shared vision:
                <br />
                <br />
                to revolutionize fandom, champion global communities and embrace
                greatness one play at a time, through seamless adoption of
                decentralized technology.
              </POrg>
            </Wrapper>
          </Wrapper>
          <HR color="#49ffa4" />
          <HR color="#49ffa4" />
        </Wrapper>

        {/* Generating Boxes */}

        <Wrapper className="container container-fluid mt-5 mb-5">
          <Wrapper className="row">
            <Wrapper className="col-md-5">
              <Wrapper
                className="mt-5"
                style={{ borderRadius: "10px", border: "1px solid #49ffa4" }}
              >
                <H1 className="ml-3">01</H1>
                <H4 className="ml-3">Vision and Control</H4>
                <Wrapper
                  style={{
                    backgroundImage: `url("/assets/eyes.svg")`,
                    maxWidth: "500px",
                    height: "350px",
                  }}
                ></Wrapper>
              </Wrapper>
            </Wrapper>

            <Wrapper className="col-md-7">
              <Wrapper
                className="mt-5"
                style={{ borderRadius: "10px", border: "1px solid #49ffa4" }}
              >
                <H1 className="ml-3">02</H1>
                <H4 className="ml-3">Community</H4>
                <Wrapper
                  style={{
                    backgroundImage: `url("/assets/three.svg")`,
                    maxWidth: "550px",
                    height: "350px",
                  }}
                ></Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </WorthStyle>
    </>
  ) : (
    ""
  );
};

export default worth;
