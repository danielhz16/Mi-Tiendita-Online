import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import update from "./update.json";
import { Style } from "./Style";

export const Update = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {   
        if (!lottieRef.current) return;
        Lottie.loadAnimation({
            container: lottieRef.current,    
            animationData: update,
            loop: true,
            autoplay: true,
            name: "update",
        });
        return () => {
            Lottie.destroy("update");
        }
    }, []);

    return <Style ref={lottieRef} />;
};