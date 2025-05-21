import React from 'react';
import {
    FaGitAlt,
    FaLinux,
    FaDatabase,
    FaCuttlefish,
    FaMicroscope,
    FaWaveSquare,
    FaCode
} from 'react-icons/fa';
import {
    SiPython,
    SiLabview,
    SiArduino,
    SiVercel,
    SiJetbrains
} from 'react-icons/si';

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-5 text-center"
            style={{ borderTop: '1px solid #d6e1f3' }}
        >
            <div className="container">
                <h2 className="fw-bold mb-5">Mes Compétences</h2>

                <div className="row justify-content-center">
                    {/* Techniques & Logiciels Scientifiques */}
                    <div className="col-md-4 mb-4">
                        <h4 className="text-primary mb-3">🔬 Techniques & Logiciels</h4>
                        <div className="d-flex flex-wrap justify-content-center gap-3 fs-2">
                            <FaMicroscope title="Instrumentation" />
                            <SiLabview title="LabVIEW" />
                            <FaWaveSquare title="MATLAB / Octave" />
                            <SiArduino title="Arduino" />
                        </div>
                    </div>

                    {/* Programmation & Automatisation */}
                    <div className="col-md-4 mb-4">
                        <h4 className="text-primary mb-3">📊 Programmation</h4>
                        <div className="d-flex flex-wrap justify-content-center gap-3 fs-2">
                            <SiPython title="Python" />
                            <FaCuttlefish title="C++" />
                            <FaDatabase title="SQL" />
                        </div>
                    </div>

                    {/* Outils & Environnements */}
                    <div className="col-md-4 mb-4">
                        <h4 className="text-primary mb-3">🧰 Outils & Environnements</h4>
                        <div className="d-flex flex-wrap justify-content-center gap-3 fs-2">
                            <FaGitAlt title="Git / GitHub" />
                            <FaLinux title="Linux" />
                            <FaCode title="VS Code" />
                            <SiJetbrains title="JetBrains" />
                            <SiVercel title="Vercel" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
