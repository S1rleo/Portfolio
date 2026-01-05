import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    return (
        <div className="loading-screen">
            <video
                src="/src/assets/LOADING.mp4"
                autoPlay
                muted
                playsInline
                onEnded={onComplete}
                className="loading-video"
            />
        </div>
    );
};

export default LoadingScreen;
