import { useEffect, useRef } from "react";
import { Style } from "./Style";
import cat from "./cat.json";
import Lottie from "lottie-web";

export const Cat = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {   
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            loop: true,
            autoplay: true,
            animationData: cat,
        });
        return () => {
            animationInstance.destroy();
        };
    }, []);

    return <Style ref={lottieRef} />;
};