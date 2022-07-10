import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./RotatePage.module.scss";
function RotatePage() {
  const [state, setState] = useState(0);

  // useEffect(() => {
  // if(state<=0 && state<10){
  //     const timer = setTimeout(() => {
  //      const interval= setInterval(()=>{
  //       setState((perv) => perv + 1);
  //      },1000)
  //      return ()=>clearInterval(interval)
  //     }, 500);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  //   if(state>=10 && state>0){
  //     const timer = setTimeout(() => {
  //       const interval= setInterval(()=>{
  //         setState((perv) => perv - 1);
  //        },1000)
  //        return ()=>clearInterval(interval)
  //       }, 500);
  //       return () => {
  //         clearTimeout(timer);
  //       };
  //   }
  // }, []);

  useEffect(() => {
    // console.log(state);
    if (state <= 0) {
      const timer = setInterval(() => {
        setState((perv) => perv + 1);
      }, 100);
      setTimeout(() => clearInterval(timer), 10000);
    }
    if (state >= 100) {
      const timer = setInterval(() => {
        setState((perv) => perv - 1);
      }, 100);
      setTimeout(() => clearInterval(timer), 10000);
    }
  }, [state]);

  console.log(state);
  return (
    <div
      className={styles.container}
      style={{
        background: `radial-gradient(circle at ${state}% -10%,
        #fff ${state}%,#f4f5 ${state + 50}%) ,radial-gradient(circle at ${
          state + 10
        }% 50%,
          #fff ${state}%,#5ff5 ${state + 20}%) ,radial-gradient(circle at ${
          state + 20
        }% -15%,
            #fff ${state}%,#0005 ${state + 30}%)
            ,radial-gradient(circle at ${state + 50}% -15%,
              #fff ${state}%,#00d5 ${state + 30}%)
            `,
        color: state > 10 ? "#000" : "#fff",
        // transform:`scale(1.${state})`,
        transition: "all 500ms linear",
      }}
      
    > {state}
      <h1>دستگاه خود را به حالت افقی نگه دارید.</h1>
    </div>
  );
}

export default RotatePage;
