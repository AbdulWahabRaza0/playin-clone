import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import Head from "next/Head";
const about = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="About" />
      <h1>Hello About</h1>
    </>
  ) : (
    ""
  );
};

export default about;
