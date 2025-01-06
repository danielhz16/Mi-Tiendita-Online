import Lottie from "lottie-web";
import register from "./Register.json";
import { useRef, useEffect } from "react";
import { Style } from "./Style";

export const RegisterAnim = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!lottieRef.current) return;

        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            autoplay: true,
            loop: true,
            animationData: register,
        });
         animationInstance.setSpeed(0.5);
        return () => {
            animationInstance.destroy(); 
        };
    }, []);  

    return <Style ref={lottieRef} />;
};
