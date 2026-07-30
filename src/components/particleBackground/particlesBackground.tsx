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
        return null;
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
                        repulse: { distance: 80 },
                    },
                },
                particles: {
                    number: { value: 45, density: { enable: true, width: 1600, height: 900 } },
                    color: { value: '#A64D79' },
                    shape: { type: 'circle' },
                    size: { value: { min: 1, max: 3 } },
                    opacity: { value: 0.35 },
                    links: {
                        enable: true,
                        distance: 140,
                        color: '#6A1E55',
                        opacity: 0.25,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.6,
                        outModes: { default: 'out' },
                    },
                },
            }}
        />
    );
}
