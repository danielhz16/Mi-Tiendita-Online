import notResults from "./notResults.json";
import { Style } from "./Style";
import Lottie from "lottie-web";
import { useRef, useEffect } from "react";

export const NotResults: React.FC = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            loop: true,
            autoplay: true,
            animationData: notResults,
        }); 
        return () => {
            animationInstance.destroy();
        }
    }, []);
    
    return <Style ref={lottieRef} />;
};