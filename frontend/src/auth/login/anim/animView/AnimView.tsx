import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animView from "./animView.json"; 
import { Box, Style } from "./Style"; 
import logo from "../../../../assets/logoDark - copia.png"

interface AnimViewProps {
  view: boolean;
}

export const AnimView: React.FC<AnimViewProps> = ({ view }) => {
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lottieRef.current) return;

    const animationInstance = Lottie.loadAnimation({
      container: lottieRef.current, 
      renderer: "svg", 
      loop: false, 
      autoplay: view, 
      animationData: animView,
    });

    return () => {
      animationInstance.destroy();
    };
  }, [view]);

  return (
    <div>
      <Style ref={lottieRef} />
      <Box> 
        <img src={logo} />
      </Box>
    </div>
  );
};
