import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="glow-aura" /> {/* Background Glow */}

            <div className="hero-content container">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-title"
                >
                    PORTFOLIO <br />
                    <span className="outline-text">CREATIVE</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="hero-subtitle"
                >
                    VISUAL EXPERIENCE
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
