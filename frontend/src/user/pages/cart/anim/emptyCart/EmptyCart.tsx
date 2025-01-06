import Lottie from "lottie-web";
import empty from "./empty.json";
import { Style } from "./Style";
import { useRef, useEffect } from "react";

const EmptyCart = () => {
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (lottieRef.current) {
      const animationInstance = Lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: empty,
      });

      return () => {
        animationInstance.destroy();
      };
    }
  }, []);

  return  <Style ref={lottieRef} />
};

export default EmptyCart;