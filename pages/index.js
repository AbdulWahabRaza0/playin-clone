import Image from "next/Image";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Typed from "react-typed";
import Marquee from "react-fast-marquee";
import { H1, H2, H3, P } from "../Components/Typography";
import { Wrapper, HomeStyle } from "../Components/styles";
const index = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <>
      <Navbar title="Home" />
      <HomeStyle>
        <Wrapper className="container-fluid">
          <Wrapper className="row align-items-center home_res_margin">
            {/* for desktop version line? */}
            <Wrapper className="col-md-1 mt-3 mb-5 show_line_home">
              <Wrapper className="vl" style={{ marginLeft: "31px" }}></Wrapper>
            </Wrapper>
            {/* for font written on home page */}
            <Wrapper className="col-md-8">
              <H1 className="home_h1_res_size home_res_pad_top">
                <Typed
                  strings={["A NEW APPROACH TO SPORTS GAMING"]}
                  typeSpeed={150}
                  backSpeed={100}
                />
              </H1>
              {/* for paragraph written below h1 text */}
              <Wrapper className="row">
                <Wrapper className="col-md-8">
                  <P className="home_p_res_size home_res_pad_bottom display_para_desk">
                    Peer2Peer Sports Betting Meets Play2Earn Gaming Earn All The
                    Time. Every Time.
                  </P>
                  <P className="display_para_res home_p_res_size home_res_pad_bottom">
                    Peer2Peer Sports Betting Meets
                    <br /> Play2Earn Gaming
                    <br /> Earn All The Time. Every Time.
                  </P>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper className="col-md-3"></Wrapper>
        </Wrapper>

        {/* Marquee Section */}
        <Wrapper className="mt-5 mb-5">
          <Marquee
            play={true}
            pauseOnHover={true}
            className={`bg-black`}
            gradient={false}
          >
            <H2 className="marquee_text_res">
              - TOURNAMENT -<span className="text-success">REWARDS</span>- GAMES
              -<span className="text-success"> BET TO WIN </span>- TOURNAMENT -
              <span className="text-success"> REWARDS </span>- GAMES -
              <span className="text-success"> BET TO WIN </span>
            </H2>
          </Marquee>
        </Wrapper>

        {/* Game Xp Real Money */}
        <Wrapper className="container-fluid mt-5 mb-5">
          <Wrapper className="row" style={{ marginTop: "200px" }}>
            <Wrapper className="col-md-1"></Wrapper>
            <Wrapper className="col-md-4">
              <H3 className="text-center">
                IN GAME XP TO
                <br /> REAL MONEY
              </H3>
              <Wrapper
                style={{
                  marginTop: "-50px",
                  marginBottom: "50px",
                  marginLeft: "100px",
                  backgroundImage: `url("/assets/line.svg")`,
                  maxWidth: "400px",
                  height: "200px",
                }}
              >
                <P style={{ paddingTop: "100px", marginLeft: "60px" }}>
                  A Simple Gameplan:
                  <br />
                  In-Game Xp to Real $$$
                </P>
              </Wrapper>
            </Wrapper>
            <Wrapper className="col-md-4"></Wrapper>
          </Wrapper>
        </Wrapper>
      </HomeStyle>
    </>
  ) : (
    ""
  );
};

export default index;
