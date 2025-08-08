import { useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadFull(engine);
        });
    }, []);

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        return null; // No particles on mobile devices
    }

    return (
        <Particles
            id="tsparticles"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
            options={{
                detectRetina: true,
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' },
                    },
                    modes: {
                        repulse: { distance: 70 },
                        push: { quantity: 1 },
                    },
                },
                particles: {
                    number: { value: 30, density: { enable: true } },
                    shape: {
                        type: 'image',
                        options: {
                            image: [
                                { src: '/d20.png' },
                                { src: '/d6.png' },
                                { src: '/d4.png' },
                            ]
                        }
                    },
                    size: { value: { min: 45, max: 45 } },
                    opacity: { value: 0.5 },

                    links: {
                        enable: false,
                    },

                    // Habilita rotación aleatoria y animada
                    rotate: {
                        value: { min: 0, max: 360 },
                        animation: {
                            enable: true,
                            speed: 10,
                            sync: false
                        },
                        direction: 'random',
                    },

                    move: {
                        enable: true,
                        speed: 2,
                        outModes: { default: 'out' },
                    },
                },
            }}
        />
    );
}
