import Lottie from "lottie-web"
import { useEffect, useRef } from "react"
import { Style } from "./Style";
import error from "./error.json"

export const Error = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {   
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            loop: true,
            autoplay: true,
            animationData: error,
        });
        return () => {
            animationInstance.destroy();
        };
    }, []);

    return  <Style ref={lottieRef} />
};