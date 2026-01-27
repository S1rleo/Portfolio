import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Context
import { LanguageProvider } from '../context/LanguageContext';

// Components
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import LanguageSwitch from '../components/LanguageSwitch';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import DotNavigation from '../components/DotNavigation';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LanguageProvider>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <main>
                    <LanguageSwitch />
                    <Navigation />
                    <DotNavigation />
                    <Hero />
                    <Projects />
                    <Footer />
                </main>
            )}
        </LanguageProvider>
    );
}
