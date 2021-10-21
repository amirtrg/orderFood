import React from "react";
import Button from "./../../Ui/Button/Button";
import Meal from "./../../../assets/Images/meal23.jpg";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>فودیتو</h1>
        <Button>سبد خرید</Button>
      </header>
      <div className={classes.banner}>
        <img src={Meal} />
        <div className={classes.bannerControl}>
        <div className={classes.bannerText}>
          <h1>
        
        سفارش آنلاین غذا 
        </h1>
          <h3>تنها با چند کلیک ساده</h3>
          </div>
          <Button variant="secondary">سفارش دهید</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
