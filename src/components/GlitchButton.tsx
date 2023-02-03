'use client'
import React, {useState} from "react";
import {useTestStore} from "@/hooks/useTestStore";

interface Props {
    label: string;
}

export const GlitchButton: React.FC<Props> = ({label}) => {
    const [isGlitching, setIsGlitching] = useState(false);
    // @ts-ignore
    const {hit, increment, reset} = useTestStore();

    const handleClick = () => {
        if (hit >= 5) {
            reset();
            alert("You've hit the button 5 times!");
            return;
        }
        increment();
        console.log(hit);
        setIsGlitching(true);
        setTimeout(() => {
            setIsGlitching(false);
        }, 2500);
    };

    return (
        <button
            className={`glitch-button ${isGlitching ? "glitching" : ""}`}
            onClick={handleClick}
            data-text="Jamie"
        >
            {label}
            {hit}
        </button>
    );
};