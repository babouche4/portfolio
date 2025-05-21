import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const TimelineItem = ({ title, company, type, date, align = "left" }) => (
    <motion.div
        className={`timeline-item ${align}`}
        variants={itemVariants}
    >
        <div className="timeline-dot"></div>
        <div className="timeline-content shadow-sm">
            <h5 className="fw-bold">{title}</h5>
            <h6 className="text-muted">{company} · {type}</h6>
            <p className="text-muted">{date}</p>
        </div>
    </motion.div>
);

const Experiences = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section id="experiences" className="py-5" style={{borderTop: '1px solid #d6e1f3' }}>
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">Mon parcours</h2>

                <motion.div
                    ref={ref}
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <TimelineItem
                        title="Agent d'entretien"
                        company="Mairie de Canteleu"
                        type="CDD"
                        date="janv. 2021 – janv. 2021"
                        align="left"
                    />

                    <TimelineItem
                        title="Agent d'entretien des espaces verts"
                        company="Mairie de Canteleu"
                        type="CDD"
                        date="avril 2020 & juillet 2021"
                        align="right"
                    />

                    <TimelineItem
                        title="Gestionnaire de Domotique"
                        company="Mairie de Saint Paër"
                        type="Stage"
                        date="avril 2024 – juin 2024"
                        align="left"
                    />

                    <TimelineItem
                        title="Technicien métrologie"
                        company="SYSNAV"
                        type="Stage"
                        date="oct. 2024 – mars 2025"
                        align="right"
                    />

                </motion.div>
            </div>
        </section>
    );
};

export default Experiences;
