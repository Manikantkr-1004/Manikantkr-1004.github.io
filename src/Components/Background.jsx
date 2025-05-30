import { useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // You can use loadFull from "tsparticles" if you want all features.

export const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Load only the slim bundle for smaller size. Use loadFull for all features.
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            fpsLimit: 120,
            fullScreen: {
                enable: true,
                zIndex: -1 // This puts the canvas behind everything else
            },
            interactivity: {
                events: {
                    onClick: { enable: false, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                    resize: true,
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 100, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#808080" },
                links: {
                    color: "#fe9119",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 1000 },
                    value: 20,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
        }),
        [],
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};
