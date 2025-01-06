import { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import add from "./add.json";
import { Style } from "./Style";

export const Add = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            animationData: add,
            loop: true,
            autoplay: true,
            name: "add",
        });
        return () => {
            animationInstance.destroy();
        };
    }, []);

    return <Style ref={lottieRef} />;
};