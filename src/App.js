import React from "react";
import "./index.scss";
import Header from "./Components/Layout/Header/Header";
import AboutUsSection from "./Components/sections/AboutUsSection/AboutUsSection";
import useGetDeviceOs from "./hooks/useGetDeviceOs";
import RotatePage from "./Components/Pages/ErrorPages/RotatePage/RotatePage";
import Card from "./Components/Ui/Card/Card";
import Image from "./assets/Images/office.jpg";
function App() {
  const device = useGetDeviceOs();

  return (
    <>
      {(device === "andriod" || device === "ios") && <RotatePage />}
      <div data-os={device} className="app">
        <Header />
        <AboutUsSection />
        <AboutUsSection />
        <AboutUsSection />

        <div
          style={{ display: "grid", gridTemplateColumns: device==="andriod"||device==="ios"?"repeat(2,1fr)":"repeat(3,1fr)" }}
          className="container"
        >
          <Card>
            <img
              src={Image}
              style={{
                width: "100%",
                objectFit: "cover",
                aspectRatio: "1/1",
                borderRadius: "0.5rem",
              }}
            />
            <p>لورم ایپسون</p>
          </Card>
          <Card>
            <img
              src={Image}
              style={{
                width: "100%",
                objectFit: "cover",
                aspectRatio: "1/1",
                borderRadius: "0.5rem",
              }}
            />
            <p>لورم ایپسون</p>
          </Card>
          <Card>
            <img
              src={Image}
              style={{
                width: "100%",
                objectFit: "cover",
                aspectRatio: "1/1",
                borderRadius: "0.5rem",
              }}
            />
            <p>لورم ایپسون</p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
