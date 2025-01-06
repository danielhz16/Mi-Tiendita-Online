import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { Style } from "./Style";
import notFound from "./notFound.json";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Btn } from "./Style";

export const NotFound = () => {
    const lottieRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {   
        if (!lottieRef.current) return;
        const animationInstance = Lottie.loadAnimation({
            container: lottieRef.current,
            loop: true,
            autoplay: true,
            animationData: notFound,
        });
        return () => {
            animationInstance.destroy();
        };
    }, []);

    return (
 <>
    <Style ref={lottieRef} />
    <Btn>
    <Button label="Regresar" onClick={() => navigate("/")} className="btn" />
    </Btn>
</>
    );

};