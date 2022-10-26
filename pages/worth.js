import Navbar from "../Components/Navbar";
import Head from "next/Head";
import { useState, useEffect } from "react";
const worth = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="Worth" />
      <h1>Hello Worth</h1>
    </>
  ) : (
    ""
  );
};

export default worth;
