import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import DotNavigation from '../components/DotNavigation';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <main>
                    <Navigation />
                    <DotNavigation />
                    <Hero />
                    <About />
                    <Portfolio />
                    <Featured />
                    <Footer />
                </main>
            )}
        </>
    );
}
