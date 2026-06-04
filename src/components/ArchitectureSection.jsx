import React from 'react';
import architectureSvg from '../assets/architecture.svg';

export const OfficialArchitectureSection = ({ onOpenModal }) => (
    <section id="official-architecture" className="summary-section">
        <h2>Offizielles K8s-Konzept</h2>
        <div className="architecture-container">
            <p style={{ marginBottom: '0.5rem' }}>Das theoretische Modell eines Kubernetes-Clusters:</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1.5rem' }}>(Zum Vergrößern auf das Bild klicken)</p>
            <img
                src="https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg"
                alt="Offizielle Architektur"
                onClick={() => onOpenModal("https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg")}
                className="architecture-image official"
            />
            <p className="architecture-attribution">
                Grafik © <a href="https://kubernetes.io/docs/concepts/architecture/" target="_blank" rel="noopener noreferrer">The Kubernetes Authors</a> (CC BY 4.0).
            </p>
        </div>
    </section>
);

export const ProjectArchitectureSection = ({ onOpenModal }) => (
    <section id="architecture" className="summary-section">
        <h2>Projekt-Architektur (Dieses Setup)</h2>
        <div className="architecture-container">
            <p style={{ marginBottom: '1.5rem' }}>Visualisierung der konkreten Implementierung inkl. Cloudflare, HPA und git-sync:</p>
            <img
                src={architectureSvg}
                onClick={() => onOpenModal(architectureSvg)}
                alt="Projekt Architektur"
                className="architecture-image"
            />
            <p className="architecture-attribution" style={{ fontSize: '0.8rem' }}>
                Statisch gerendert via PlantUML.
            </p>
        </div>
    </section>
);

const ArchitectureSection = ({ onOpenModal }) => (
    <>
        <OfficialArchitectureSection onOpenModal={onOpenModal} />
        <ProjectArchitectureSection onOpenModal={onOpenModal} />
    </>
);

export default ArchitectureSection;
