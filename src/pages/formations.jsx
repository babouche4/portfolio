import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Formations = () => {
    return (
            <section
                id="formations"
                className="pt-5 pb-5"
                style={{borderTop: '1px solid #d6e1f3'}}
            >
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">Mes Formations</h2>

                    <div
                        className="list-group list-group-flush text-start mx-auto"
                        style={{maxWidth: '600px'}}
                    >
                        <div className="list-group-item bg-transparent border-0 d-flex align-items-center gap-2">
                            <FaGraduationCap className="text-primary"/>
                            <span className="fw-medium">Classe Préparatoire ATS Blaise Pascal 2025 - 2026</span>
                        </div>

                        <div className="list-group-item bg-transparent border-top d-flex align-items-center gap-2">
                            <FaGraduationCap className="text-primary"/>
                            <span className="fw-medium">BUT Mesures Physiques 2022 - 2025</span>
                        </div>
                        
                        <div className="list-group-item bg-transparent border-top d-flex align-items-center gap-2">
                            <FaGraduationCap className="text-primary"/>
                            <span className="fw-medium">Lycée Blaise Pascal 2019 - 2022</span>
                        </div>

                    </div>
                </div>
            </section>
    );
};

export default Formations;
