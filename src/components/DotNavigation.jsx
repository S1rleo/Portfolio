import React, { useState, useEffect } from 'react';
import './DotNavigation.css';

const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Works' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

const DotNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [showLabel, setShowLabel] = useState(false);

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

        sections.forEach((section) => {
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
            <div className="nav-track"></div>
            {sections.map((section) => (
                <div
                    key={section.id}
                    className={`dot-wrapper ${activeSection === section.id ? 'active' : ''} ${(activeSection === section.id && showLabel) ? 'show-temp-label' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                >
                    <span className="dot-label">{section.label}</span>
                    <div className="dot"></div>
                </div>
            ))}
        </nav>
    );
};

export default DotNavigation;
