import Lottie from "lottie-web";
import { useRef, useEffect } from "react";
import { Style } from "./Style";
import tanks from "./tanks.json";

export const Tanks: React.FC = () => {
const lottieRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    if (!lottieRef.current) return;
    const animationInstance = Lottie.loadAnimation({
        container: lottieRef.current,
        loop: true,
        autoplay: true,
        animationData: tanks,
    });
    return () => {
        animationInstance.destroy();
    };
})

return <Style ref={lottieRef} />
}