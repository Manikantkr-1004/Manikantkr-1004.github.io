import { useEffect } from "react";

export const Background = ({theme}) => {

    useEffect(() => {
        document.documentElement.style.setProperty('--stars-color', theme ? '#000' : '#fff');
    }, [theme]);

    return (
        <div className="wrapper">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    );
};
