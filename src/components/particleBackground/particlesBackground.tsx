import { useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadFull(engine);
        });
    }, []);

    const particlesProps = {

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
                    number: { value: 60, density: { enable: true } },
                    shape: {
                        type: 'image',
                        options: {
                            image: [
                                { src: '/d20.png', width: 30, height: 30 },
                                { src: '/d6.png', width: 20, height: 20 },
                                { src: '/d4.svg', width: 20, height: 20 },
                            ]
                        }
                    },
                    size: { value: { min: 20, max: 30 } },
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
