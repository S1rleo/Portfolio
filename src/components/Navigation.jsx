import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { x: "100%" },
        open: { x: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
    };

    const menuItems = [
        { labelKey: 'aboutMe', id: 'home' },
        { labelKey: 'projects', id: 'projects-gallery' },
        { labelKey: 'contact', id: 'contact' }
    ];

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
                            {menuItems.map((item, index) => (
                                <Motion.a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="menu-link"
                                    initial={{ x: 80, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    onClick={toggleMenu}
                                >
                                    {t('nav', item.labelKey, language)}
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
