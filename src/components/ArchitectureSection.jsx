import React from 'react';

const ArchitectureSection = ({ onOpenModal }) => (
    <>
        {/* 1. Offizielle Architektur */}
        <section id="official-architecture" className="summary-section" style={{ marginBottom: '4rem' }}>
            <h2>Offizielles K8s-Konzept</h2>
            <div className="architecture-container" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>Das theoretische Modell eines Kubernetes-Clusters:</p>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1.5rem' }}>(Zum Vergrößern auf das Bild klicken)</p>
                <img
                    src="https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg"
                    alt="Offizielle Architektur"
                    {/* FIXED: Wrapped in an arrow function */}
                    onClick={() => onOpenModal("https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg")}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        padding: '20px',
                        background: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        cursor: 'zoom-in'
                    }}
                />
                <p className="summary-placeholder" style={{ marginTop: '1rem', fontSize: '0.75rem' }}>
                    Grafik © <a href="https://kubernetes.io/docs/concepts/architecture/" target="_blank" rel="noopener noreferrer">The Kubernetes Authors</a> (CC BY 4.0).
                </p>
            </div>
        </section>

        {/* 2. Eigene Architektur */}
        <section id="architecture" className="summary-section" style={{ marginBottom: '4rem' }}>
            <h2>Projekt-Architektur (Dieses Setup)</h2>
            <div className="architecture-container" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>Visualisierung der konkreten Implementierung inkl. Cloudflare, HPA und git-sync:</p>
                <img
                    src="https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/Lukas204/K8SPresentationWebsite/main/architecture.puml"
                    {/* FIXED: Wrapped in an arrow function */}
                    onClick={() => onOpenModal("https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/Lukas204/K8SPresentationWebsite/main/architecture.puml")}
                    alt="Projekt Architektur"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', cursor: 'zoom-in'}}
                />
                <p className="summary-placeholder" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
                    Live-Rendering via PlantUML.
                </p>
            </div>
        </section>
    </>
);

export default ArchitectureSection;