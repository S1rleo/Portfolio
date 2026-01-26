import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { x: "100%" },
        open: { x: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
    };

    return (
        <>
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        className="menu-overlay"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <nav className="menu-links">
                            {['HOME', 'PROJECTS', 'CONTACT'].map((item, index) => (
                                <Motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="menu-link"
                                    initial={{ x: 80, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </Motion.a>
                            ))}
                        </nav>
                    </Motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
