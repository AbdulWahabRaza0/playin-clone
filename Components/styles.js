import styles from "styled-components";
export const Global = styles.div`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
*{
    font-family: 'Lato', sans-serif;
   
}
`;
export const HomeStyle = styles.div` 
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
background-color:black !important;
width:100%;
margin:auto; 
height:100%; 
overflow:auto;
.display_para_res{
    display:none;
}
.home_res_pad_top{
margin-top:-200px !important;
}
.display_para_desk{
    display:block;
}
.vl{
    border: 1px solid #fff !important;
    width:1px !important;
      height: 700px !important;
    }
    @media screen and (max-width: 768px) {
        .show_line_home{
            display:none;
        }
        .display_para_res{
            display:block;
        }
        .home_res_margin{
            text-align: center !important;
        }
        .display_para_desk{
            display:none;
        }
        .home_res_pad_top{
            margin-left:60px !important;
            margin-right:60px !important;
            margin-top:120px !important;
        }
        .home_res_pad_bottom{
            margin-top:20px !important;
            margin-left:25px !important;
            margin-right:25px !important;
            padding-bottom:10% !important;
        }
        .home_h1_res_size{
            font-size:28px !important;
        }
        .home_p_res_size{
            font-size:20px !important;
        }
        .marquee_text_res{
            font-size:24px !important;
        }
        .res_center_content{
            text-align: center !important;
        }

      }
`;
export const Wrapper = styles.div` 

`;
export const Nav = styles.nav`
.add_style_open_list{
    padding-top:80px !important;
    padding-bottom:250px !important;
    font-size:26px !important;
}
.left_margin{
    margin-left:40px;
}
@media screen and (max-width: 768px) {
    .left_margin{
        margin-left:30px;
    }
  }
`;
export const WorthStyle = styles.div` 
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
background-color:black !important;
width:100%;
margin:auto; 
height:100%; 
overflow:auto;
.worth_box5_res{
    margin-left:-70px;
}
@media screen and (max-width: 768px) {

    .display_para_res{
        display:block;
    }
    .home_res_margin{
        text-align: center !important;
    }
    .display_para_desk{
        display:none;
    }
    .home_res_pad_top{
        margin-left:60px !important;
        margin-right:60px !important;
        padding-top:20% !important;
    }
    .home_res_pad_bottom{
        margin-top:20px !important;
        margin-left:25px !important;
        margin-right:25px !important;
        padding-bottom:10% !important;
    }
    .img_hover{
        width:100px !important;
        transform: scale(1.5) !important;
        position: relative !important;
    }
    .worth_box5_res{
        margin-left:0px !important;
    }
    .worth_h1_res_size{
        font-size:36px !important;
    }
    .home_p_res_size{
        font-size:20px !important;
    }
    .marquee_text_res{
        font-size:24px !important;
    }
    .res_center_content{
        text-align: center !important;
    }

  }
`;
export const RoadMapStyle = styles.div` 
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
background-color:black !important;
width:100%;
margin:auto; 
height:100%; 
overflow:auto;
.roadmap_scroll_box{
    overflow:scroll;
}
.roadmap_scroll_box::-webkit-scrollbar {
    display: none;
  }
  

  .roadmap_scroll_box {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }
@media screen and (max-width: 768px) {

    .display_para_res{
        display:block;
    }
    .home_res_margin{
        text-align: center !important;
    }
    .display_para_desk{
        display:none;
    }
    .home_res_pad_top{
        margin-left:60px !important;
        margin-right:60px !important;
        padding-top:20% !important;
    }
    .home_res_pad_bottom{
        margin-top:20px !important;
        margin-left:25px !important;
        margin-right:25px !important;
        padding-bottom:10% !important;
    }
    .img_hover{
        width:100px !important;
        transform: scale(1.5) !important;
        position: relative !important;
    }
    .worth_box5_res{
        margin-left:0px !important;
    }
    .worth_h1_res_size{
        font-size:36px !important;
    }
    .home_p_res_size{
        font-size:20px !important;
    }
    .marquee_text_res{
        font-size:24px !important;
    }
    .res_center_content{
        text-align: center !important;
    }

  }

`;
export const A = styles.a``;
export const Button = styles.button``;
export const Span = styles.span``;
export const Ul = styles.ul``;
export const Input = styles.input``;
export const Li = styles.li`
font-size:${(props) => props.size || ""};
.active{
    color:#49ffa4 !important;
}
.no-active{
    color:gray !important;
}
.link{
    text-decoration:none !important;
}
`;
