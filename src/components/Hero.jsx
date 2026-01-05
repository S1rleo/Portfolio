import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './Hero.css';
import heroBg from '../assets/CVback.jpg';
import { Experience } from './Experience';

const Hero = () => {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="glow-aura" />

            <div className="hero-content container">
                <div className="model-container">
                    <Canvas
                        gl={{ alpha: true, antialias: true }}
                        camera={{ position: [0, 0, 3], fov: 50 }}
                        style={{ width: '100%', height: '100%', background: 'transparent' }}
                    >
                        <Suspense fallback={null}>
                            <Experience />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;
