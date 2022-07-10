import { useEffect, useMemo, useState } from "react";

// const useGetDeviceOs = function () {
//   const [deviceOs, setDeviceOs] = useState(null);
//   const getDeviceInformation = function () {
//     let OSName = "Unknown OS";
//     let userOs = navigator.userAgent;
//     if (userOs.indexOf("Win") !== -1) OSName = "windows";
//     if (userOs.indexOf("Linux") !== -1) OSName = "linux";
//     if (userOs.indexOf("X11") !== -1) OSName = "unix";
//     if (userOs.indexOf("Mac") !== -1) OSName = "macOs";
//     if (userOs.indexOf("Android") !== -1) OSName = "andriod";
//     if (userOs.indexOf("iPhone") !== -1) OSName = "ios";
//     setDeviceOs(OSName);
//     console.log(OSName);
//   };
//   useEffect(getDeviceInformation, []);
//   return deviceOs;
// };

const useGetDeviceOs = function () {
  const os = useMemo(() => {
    let OSName = "Unknown OS";
    let userOs = navigator.userAgent;
    if (userOs.indexOf("Win") !== -1) OSName = "windows";
    if (userOs.indexOf("Linux") !== -1) OSName = "linux";
    if (userOs.indexOf("X11") !== -1) OSName = "unix";
    if (userOs.indexOf("Mac") !== -1) OSName = "macOs";
    if (userOs.indexOf("Android") !== -1) OSName = "andriod";
    if (userOs.indexOf("iPhone") !== -1) OSName = "ios";
    return OSName;
  }, []);
  return os;
};

export default useGetDeviceOs;
