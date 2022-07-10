import React, { useEffect, useRef, useState } from "react";
import Button from "./../../Ui/Button/Button";
import Meal from "./../../../assets/Images/meal23.jpg";
import classes from "./Header.module.scss";
import useGetDeviceOs from "../../../hooks/useGetDeviceOs";
const Header = () => {
  const headerRef = useRef();
  const [isTop, setIsTop] = useState(false);
  const [hidden, setIsHidden] = useState(false);

  const device = useGetDeviceOs();

  useEffect(() => {
    const array = [];
    window.addEventListener("scroll", function (e) {
      array.push(e.target.scrollingElement.scrollTop);
      if (array.length > 2) {
        array.shift();
      }
      if (e.target.scrollingElement.scrollTop > 100) {
        setIsTop(true);
      }
      if (e.target.scrollingElement.scrollTop < 100) {
        setIsTop(false);
      }
      if (e.target.scrollingElement.scrollTop > 200) {
        if (array[0] > array[1]) {
          setIsHidden(false);
        }
        if (array[0] < array[1]) {
          setIsHidden(true);
        }
      }
    });
    return window.removeEventListener("scroll", function (e) {
      console.log("end", e.target.scrollingElement.clientHeight);
    });
  }, []);

  return (
    <>
      <header
        className={`${classes.header} ${
          isTop ? classes.headerBg : classes.headernoBg
        } ${hidden ? classes.hidden : ""}`}
        ref={headerRef}
      >
        <h1>فودیتو</h1>
        {/* <div>{device}</div> */}
        {device === "andriod" || device === "ios" ? null : (
          <Button>سبد خرید</Button>
        )}
      </header>
      <div className={classes.banner}>
        <img src={Meal} alt="header" loading="lazy"   />
        <div className={classes.bannerControl}>
          <div className={classes.bannerText}>
            <h1>سفارش آنلاین غذا</h1>
            <h3>با منوی آنلاین</h3>
          </div>
          <Button variant="secondary">سفارش دهید</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
