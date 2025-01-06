import { Style } from "./Style";
import box from "./box.json";
import Lottie from "lottie-web";
import { useRef, useEffect } from "react";

export const Box: React.FC = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            loop: true,
            autoplay: true,
            animationData: box,
        }); 
        return () => {
            animationInstance.destroy();
        }
    }, []);
    
    return <Style ref={lottieRef} />;
};