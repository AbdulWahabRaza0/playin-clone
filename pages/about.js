import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
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
