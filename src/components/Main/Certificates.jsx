import React, { useState } from 'react';
import './Certificates.css';

/* Modal */
import Modal from "../../pages/Project/Modal";

/* Icons */
const VerifiedIcon = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

/* Images */
const certsImg = require.context('../../img', true);

// Certificate Data based on user filenames and reference design
const certificates = [
    {
        id: 1,
        title: "Internship Completion Certificate",
        category: "EXPERIENCE",
        watermark: "INT",
        issuer: "Paarsh Infotech Pvt. Ltd.",
        date: "2024",
        color: "var(--green)",
        image: "internship.png"
    },
    {
        id: 2,
        title: "OfficeMaster on Microsoft Office using ChatGPT and AI tools",
        category: "CERTIFICATION",
        watermark: "OFFICE",
        //issuer: "Microsoft",
        date: "2025",
        color: "var(--secundario)",
        image: "microsoftoffice.png"
    },
    {
        id: 3,
        title: "Gen-AI Engineering Mastermind",
        category: "PROGRAMMING",
        watermark: "AI",
        issuer: "Outskill",
        date: "2026",
        color: "var(--green)",
        image: "gen-ai.png"
    }
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className="proyectos mas-proyect certificates-section" id="certificates">
            <h2 className="heading">
                Certificates
            </h2>

            <div className="certificates-grid">
                {certificates.map((cert) => (
                    <div 
                        className="cert-card" 
                        key={cert.id}
                        onClick={() => setSelectedCert(cert)}
                        data-aos="fade-up"
                        data-aos-delay={`${cert.id * 100}`}
                    >
                        <div className="cert-watermark">{cert.watermark}</div>
                        
                        <div className="cert-badge-wrapper">
                            <div className="cert-badge-glow" style={{ backgroundColor: cert.color }}></div>
                            <div className="cert-badge-icon">
                                <VerifiedIcon color={cert.color} />
                            </div>
                        </div>

                        <div className="cert-category-wrapper">
                            <div className="cert-line" style={{ backgroundColor: cert.color }}></div>
                            <span className="cert-category">{cert.category}</span>
                        </div>

                        <h3 className="cert-title">{cert.title}</h3>

                        <div className="cert-divider"></div>

                        <div className="cert-footer">
                            <div className="cert-issuer">
                                <div className="cert-meta-label">ISSUER</div>
                                <div className="cert-meta-value">{cert.issuer}</div>
                            </div>
                            <div className="text-right">
                                <div className="cert-meta-label">ISSUED</div>
                                <div className="cert-meta-value">{cert.date}</div>
                            </div>
                        </div>

                        <div className="cert-action">
                            <span className="verify-text">
                                VIEW ASSET <ExternalLinkIcon />
                            </span>
                            <div className="cert-action-dash" style={{ backgroundColor: cert.color }}></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for viewing certificate image */}
            <Modal
                estado={selectedCert !== null}
                cambiarEstado={() => setSelectedCert(null)}
            >
                {selectedCert && (
                    <div className="content-modal">
                        <div className="pw-content">
                            <div className="eins-modal-preview">
                                <img src={certsImg(`./${selectedCert.image}`)} alt={selectedCert.title} style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <div className="eins-modal-text">
                                <p>{selectedCert.title} Certificate</p>
                                <p>This document verifies the successful completion and certification of {selectedCert.title}.</p>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default React.memo(Certificates);
