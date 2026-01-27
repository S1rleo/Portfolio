import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './DotNavigation.css';
import sidebarImg from '../assets/layout/sidebar.webp';

const sectionIds = [
    { id: 'home', labelKey: 'aboutMe' },
    { id: 'projects-gallery', labelKey: 'projects' },
    { id: 'contact', labelKey: 'contact' }
];

const DotNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [showLabel, setShowLabel] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(prev => {
                        if (prev !== entry.target.id) {
                            setShowLabel(true);
                        }
                        return entry.target.id;
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionIds.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (showLabel) {
            const timer = setTimeout(() => setShowLabel(false), 2000); // 2 seconds visibility
            return () => clearTimeout(timer);
        }
    }, [showLabel, activeSection]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="dot-navigation">
            {sectionIds.map((section) => (
                <div
                    key={section.id}
                    className={`dot-wrapper ${activeSection === section.id ? 'active' : ''} ${(activeSection === section.id && showLabel) ? 'show-temp-label' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                >
                    <span className="dot-label">{t('nav', section.labelKey, language)}</span>
                    <img src={sidebarImg} alt="" className="dot" />
                </div>
            ))}
        </nav>
    );
};

export default DotNavigation;
