import Lottie from "lottie-web";
import delivery from "./delivery.json";
import { useRef, useEffect } from "react";
import { Style } from "./Style";

export const Delivery: React.FC = () => {
 const lottieRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
   if (!lottieRef.current) return;
   const animationInstance = Lottie.loadAnimation({
     container: lottieRef.current,
     renderer: "svg",
     loop: true,
     autoplay: true,
     animationData: delivery,
   });
   return () => {
     animationInstance.destroy();
   }; 
 }, []);
 return <Style ref={lottieRef} />;
}