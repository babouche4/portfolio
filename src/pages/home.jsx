import React from 'react';
import profilePic from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <section id="home" className="vh-100 d-flex align-items-center pt-5">
            <div className="container text-center">
                <img
                    src={profilePic}
                    alt="Moi"
                    className="rounded-circle shadow mb-4"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h1 className="fw-bold">Salut, moi c’est Quentin 👋</h1>
                <p className="lead text-muted mt-3">
                    Technicien Mesures Physiques
                </p>
                <div className="d-flex justify-content-center gap-4 mt-4 fs-3">
                    <a
                        href="https://www.linkedin.com/in/quentin-jade/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/babouche4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;

