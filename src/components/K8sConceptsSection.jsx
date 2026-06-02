import React from 'react';

const K8sConceptsSection = () => {
    const concepts = [
        {
            title: 'Pods',
            description: 'Die kleinsten bereitstellbaren Einheiten in Kubernetes. Ein Pod kapselt einen oder mehrere Container, Speicherressourcen und eine eindeutige Netzwerk-IP.'
        },
        {
            title: 'Nodes',
            description: 'Ein Worker-Rechner in Kubernetes (virtuell oder physisch). Jede Node enthält die notwendigen Dienste, um Pods auszuführen, wie die Container-Runtime und das Kubelet.'
        },
        {
            title: 'Services',
            description: 'Eine Abstraktion, die eine Gruppe von Pods als Netzwerkdienst definiert. Ermöglicht eine stabile IP-Adresse und Lastverteilung zwischen den Pods.'
        },
        {
            title: 'Deployments',
            description: 'Beschreibt den gewünschten Zustand für Pods und ReplicaSets. Der Deployment-Controller ändert den aktuellen Zustand schrittweise in den gewünschten Zustand.'
        },
        {
            title: 'Labels & Selectors',
            description: 'Schlüssel-Wert-Paare, die an Objekte geheftet werden. Selectors ermöglichen es, eine Gruppe von Objekten basierend auf ihren Labels zu identifizieren und zu verwalten.'
        },
        {
            title: 'Namespaces',
            description: 'Virtuelle Cluster innerhalb eines physischen Clusters. Sie dienen zur Trennung von Ressourcen zwischen verschiedenen Projekten oder Teams.'
        },
        {
            title: 'Ingress',
            description: 'Verwaltet den externen Zugriff auf Dienste im Cluster, typischerweise via HTTP. Bietet Lastverteilung, SSL-Terminierung und namensbasiertes virtuelles Hosting.'
        },
        {
            title: 'ConfigMaps & Secrets',
            description: 'Dienen zur Speicherung von Konfigurationsdaten und sensiblen Informationen (wie Passwörter oder API-Keys) getrennt vom Anwendungs-Code.'
        },
        {
            title: 'Volumes',
            description: 'Ein Verzeichnis, auf das die Container in einem Pod zugreifen können. Volumes lösen das Problem der Datenpersistenz in flüchtigen Containern.'
        }
    ];

    return (
        <section id="concepts" className="summary-section" style={{ marginBottom: '4rem' }}>
            <h2>Core Konzepte</h2>
            <p style={{ marginBottom: '1.5rem' }}>Die grundlegenden Bausteine von Kubernetes im Überblick:</p>
            <div className="literature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {concepts.map((concept, index) => (
                    <article className="card" key={index}>
                        <div className="card-content">
                            <h3 style={{ color: 'var(--k8s-blue)', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                                {concept.title}
                            </h3>
                            <p>{concept.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default K8sConceptsSection;
