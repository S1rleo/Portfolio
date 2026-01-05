import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';
import videoLoading from '../assets/LOADING.mp4';

const LoadingScreen = ({ onComplete }) => {
    return (
        <div className="loading-screen">
            <video
                src={videoLoading}
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
