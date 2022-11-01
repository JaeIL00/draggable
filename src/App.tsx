import React, { useRef, useState } from "react";
import styled from "styled-components";
import Beautiful from "./components/Beautiful";

const App = () => {
  // 접속 기기 확인
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // Draggable
  // let [dragValue, setDragValue] = useState<any>();
  // const element = useRef() as React.RefObject<HTMLDivElement>;

  // const realMove = () => {
  //   element.current!.style.position = "absolute";
  //   element.current!.onmousedown = () => {
  //     setDragValue(element.current);
  //   };
  // };

  // document.onmousemove = (event) => {
  //   let x = event.pageX;
  //   let y = event.pageY;

  //   dragValue.style.left = x + "px";
  //   dragValue.style.top = y + "px";
  // };
  // document.onmouseup = () => {
  //   setDragValue(null);
  // };

  if (!isMobile()) {
    return (
      <>
        {/* <Beautiful />; */}
        {/* <Ball ref={element} onMouseDown={realMove}></Ball>;   */}
      </>
    );
  } else <div>PC로 접속해주세요</div>;
};

const Ball = styled.div`
  background-color: orange;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
`;

export default App;
