import styles from "styled-components";
export const H1 = styles.h1` 
font-size:76px !important;

color:white !important;
`;
export const H2 = styles.h2`
font-size:56px !important;
color:white !important;
`;
export const H3 = styles.h3`
font-size:45px !important;
color:white !important;
`;
export const H4 = styles.h4`
color:white !important;
font-weight:350 !important;
`;
export const H3Box = styles.h3`
color:${(props) => props.color || "white"};
`;
export const P = styles.p`
  font-size:24px !important;
  color:${(props) => props.color || "gray"};
  `;
export const P2 = styles.p`
  font-size:22px !important;
  color:${(props) => props.color || "gray"};
  `;
export const POrg = styles.p`
  color:${(props) => props.color || "gray"};
  `;
export const HR = styles.hr`
color:${(props) => props.color || "gray"};
  `;
