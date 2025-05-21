import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="py-5 text-center"
            style={{borderTop: '1px solid #d6e1f3' }}
        >
            <div className="container">
                <h2 className="fw-bold mb-4">À propos de moi</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="lead">
                            Je m'appelle Quentin, je suis en 3ème année de BUT Mesures Physiques. Passionné par la science, 
                            la technique et l’innovation, je m’intéresse particulièrement à la métrologie, l’instrumentation 
                            et le contrôle qualité.
                            J’aime transformer des données en informations utiles, et des idées en solutions concrètes, que 
                            ce soit par le biais de projets expérimentaux, d’analyses techniques ou d’outils numériques 
                            adaptés aux besoins du terrain. 
                        </p>
                        <p>
                            Curieux de nature, j’ai toujours aimé comprendre comment les choses fonctionnent, et le
                            développement m’a donné ce terrain de jeu parfait où je peux apprendre sans cesse tout en
                            bâtissant du concret.
                        </p>
                        <p>
                            Que ce soit en entreprise ou dans mes projets personnels, j’accorde une grande importance 
                            à la rigueur, à la clarté des méthodes et au travail en équipe.
                            Je suis convaincu que la technique est avant tout un outil au service de la <strong>précision, 
                            de l'efficacité et de l’innovation.</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
