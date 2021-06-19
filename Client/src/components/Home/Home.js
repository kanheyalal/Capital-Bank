import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import lottie from "lottie-web";

const Home = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./money.json"),
    });
  }, []);
  return (
    <div className={classes.home}>
      <div className={classes.container}>
      <div className={classes.header}>
            <p className={classes.head}>Stay connected to your accounts 24/7</p>
            <p className={classes.content}>secure online and mobile banking for your every day financial needs</p>
            <div className={classes.openAccountBtnDiv}>
            <Link className={classes.openAccount} to="/create-account">create account</Link>

            </div>
      </div>
      <div className={classes.image}>
        <div className={classes.lottie}>
          <div className="container" ref={container}></div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Home;
