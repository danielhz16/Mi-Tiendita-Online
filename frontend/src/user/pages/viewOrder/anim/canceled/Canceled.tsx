import { Style, Text } from "./Style";
import canceled from "./canceled.json";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

export const Canceled: React.FC = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            loop: true,
            autoplay: true,
            animationData: canceled,
        }); 
        return () => {
            animationInstance.destroy();
        }
    }, []);
    
    return <div>
    <Text>Orden cancelada</Text>
     <Style ref={lottieRef} />
    </div>
};