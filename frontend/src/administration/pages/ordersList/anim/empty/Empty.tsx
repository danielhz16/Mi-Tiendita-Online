import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { Style } from "./Style";
import empty from "./empty.json";

export const Empty = () => {
  const lottiRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lottiRef.current) return;
    const animationInstance = Lottie.loadAnimation({
      container: lottiRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: empty,
    });
    return () => {
      animationInstance.destroy();
    };
  }, []);

  return <Style ref={lottiRef} />;
};