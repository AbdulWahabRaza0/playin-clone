import Navbar from "../Components/Navbar";
import Head from "next/Head";
import { useState, useEffect } from "react";
const roadmap = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="Road Map" />
      <h1>Hello RoadMap</h1>
    </>
  ) : (
    ""
  );
};

export default roadmap;
