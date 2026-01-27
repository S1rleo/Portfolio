import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './Projects.css';

// Project Assets - Urban Echoes
import hiphop1 from '../assets/projects/hiphop/1.webp';
import hiphopHeartless from '../assets/projects/hiphop/HEARTLESS.webp';
import hiphopMaudito from '../assets/projects/hiphop/MAUDITO.webp';
import hiphopPng from '../assets/projects/hiphop/PNG.webp';
import hiphopVspast from '../assets/projects/hiphop/VSPAST.webp';
import hiphopWugori from '../assets/projects/hiphop/WUGORI.webp';

// Project Assets - Urban Echoes #2
import hiphop2 from '../assets/projects/hiphop2/2.webp';
import hiphopAmeal from '../assets/projects/hiphop2/AMEAL.webp';
import hiphopJoint from '../assets/projects/hiphop2/JOINT.webp';
import hiphopLali from '../assets/projects/hiphop2/LALI.webp';
import hiphopMikelenite from '../assets/projects/hiphop2/MIKELENITE.webp';
import hiphopXtinto from '../assets/projects/hiphop2/XTINTO.webp';
import titlesImgPt from '../assets/projects/TITULOS.png';
import titlesImgEn from '../assets/projects/TITULOS_en.png';

// Project data with translation keys
const getProjectsData = (language) => [
    {
        id: 1,
        title: t('projects', 'urbanEchoesTitle', language),
        category: t('projects', 'urbanEchoesCategory', language),
        type: "image",
        thumbnail: hiphop1,
        images: [hiphop1, hiphopWugori, hiphopHeartless, hiphopPng, hiphopMaudito, hiphopVspast],
        description: t('projects', 'urbanEchoesDescription', language)
    },
    {
        id: 2,
        title: t('projects', 'urbanEchoes2Title', language),
        category: t('projects', 'urbanEchoes2Category', language),
        type: "image",
        thumbnail: hiphop2,
        images: [hiphop2, hiphopLali, hiphopAmeal, hiphopXtinto, hiphopJoint, hiphopMikelenite],
        description: t('projects', 'urbanEchoes2Description', language)
    }
];


const ProjectCard = ({ project, onClick }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (project.type === 'video' && videoRef.current) {
            videoRef.current.play().catch(e => console.log("Auto-play prevented"));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (project.type === 'video' && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="project-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(project)}
        >
            <div className="project-media-container">
                {project.type === 'video' && project.videoSrc ? (
                    <video
                        ref={videoRef}
                        src={project.videoSrc}
                        className="project-video"
                        muted
                        loop
                        playsInline
                        poster={project.thumbnail}
                    />
                ) : (
                    <img src={project.thumbnail} alt={project.title} className="project-img" />
                )}
            </div>

            <div className="project-overlay">
                <div className="project-info">
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                </div>
            </div>
        </div>
    );
};

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '20%' : '-20%',
            opacity: 0,
            scale: 1.05,
            filter: 'blur(8px)',
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                x: { type: "spring", stiffness: 260, damping: 26 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                filter: { duration: 0.3 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '20%' : '-20%',
            opacity: 0,
            scale: 0.95,
            filter: 'blur(8px)',
            transition: {
                x: { type: "spring", stiffness: 260, damping: 26 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                filter: { duration: 0.2 }
            }
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
    };

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        paginate(1);
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        paginate(-1);
    };

    return (
        <div className="carousel">
            <div className="carousel-container">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="carousel-img"
                        draggable={false}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
            </div>

            {images.length > 1 && (
                <>
                    <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous">‹</button>
                    <button className="carousel-control next" onClick={nextSlide} aria-label="Next">›</button>
                    <div className="carousel-dots">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (idx !== currentIndex) {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-body">
                    <div className="modal-gallery">
                        {project.images ? (
                            <Carousel images={project.images} />
                        ) : (
                            <img src={project.thumbnail} alt={project.title} className="modal-main-img" />
                        )}
                    </div>
                    <div className="modal-info">
                        <p className="modal-category">{project.category}</p>
                        <h2 className="modal-title">{project.title}</h2>
                        <div className="modal-description">
                            {project.description.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { language } = useLanguage();
    const projectsData = getProjectsData(language);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    return (
        <section id="projects-gallery" className="projects-section">
            <div className="projects-header">
                <img src={language === 'pt' ? titlesImgPt : titlesImgEn} alt="My Work - Selected Projects" className="header-titles-img" />
            </div>

            <div className="projects-grid">
                {projectsData.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
