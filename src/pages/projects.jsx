import React from 'react';
import { FaCode, FaFlask, FaDumbbell, FaGlobe, FaBrain, FaGamepad } from 'react-icons/fa';

const Passions = () => {
    const passions = [
        {
            icon: <FaCode className="text-primary fs-1" />,
            title: "Programmation",
            desc: "J’aime concevoir des outils utiles et automatiser des tâches.",
        },
        {
            icon: <FaFlask className="text-success fs-1" />,
            title: "Sciences",
            desc: "Curieux de nature, je m'intéresse à la physique, la chimie et au monde qui nous entoure.",
        },
        {
            icon: <FaDumbbell className="text-danger fs-1" />,
            title: "Sport",
            desc: " Le sport m’aide à rester en forme physiquement.",
        },
        {
            icon: <FaGamepad className="text-warning fs-1" />,
            title: "Jeux vidéo",
            desc: "Une façon sympa de se détendre.",
        },
        {
            icon: <FaBrain className="text-info fs-1" />,
            title: "Défis logiques",
            desc: "J’aime résoudre des énigmes, c’est à la fois amusant et ça fait réfléchir.",
        },
        {
            icon: <FaGlobe className="text-secondary fs-1" />,
            title: "Découverte",
            desc: "Je suis toujours partant pour apprendre de nouvelles choses.",
        },
    ];

    return (
        <section
            id="passions"
            className="py-5 text-center artistic-bg"
            style={{ borderTop: '1px solid #d6e1f3' }}
        >
            <div className="container position-relative" style={{ zIndex: 1 }}>
                <h2 className="fw-bold mb-5">🎯 Mes Passions</h2>
                <div className="row">
                    {passions.map((passion, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                                <div className="mb-3">{passion.icon}</div>
                                <h5 className="fw-semibold">{passion.title}</h5>
                                <p className="text-muted">{passion.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <svg
                    className="position-absolute w-100"
                    style={{ top: 0, left: 0, zIndex: 0, opacity: 0.05 }}
                    height="100%"
                >
                    <circle cx="10%" cy="20%" r="60" fill="#b39ddb" />
                    <circle cx="90%" cy="30%" r="40" fill="#80deea" />
                    <circle cx="50%" cy="80%" r="70" fill="#a5d6a7" />
                </svg>
        
        </section>
    );
};

export default Passions;
