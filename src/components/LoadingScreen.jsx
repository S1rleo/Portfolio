import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds loading
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, duration + 500); // Wait a bit after 100%

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="loader-content">
                <h1 className="counter">{Math.round(count)}%</h1>
                <div className="loader-bar">
                    <motion.div
                        className="loader-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${count}%` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
