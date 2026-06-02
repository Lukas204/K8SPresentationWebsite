import React from 'react';

const K8sConceptsSection = () => {
    const concepts = [
        {
            title: 'Pods',
            description: 'Die kleinsten bereitstellbaren Einheiten in Kubernetes. Ein Pod kapselt einen oder mehrere Container, Speicherressourcen und eine eindeutige Netzwerk-IP.'
        },
        {
            title: 'Nodes',
            description: 'Eine physische oder virtuelle Maschine innerhalb des Clusters. Man unterscheidet primär zwischen Worker Nodes (für Anwendungs-Pods) und Control Plane Nodes (für die Cluster-Verwaltung).'
        },
        {
            title: 'Control Plane',
            description: 'Die Steuerungsebene des Clusters, die typischerweise auf dedizierten Control Plane Nodes ausgeführt wird. Sie verwaltet den globalen Zustand des Clusters und beinhaltet Kernkomponenten wie den API-Server, etcd und den Scheduler.'
        },
        {
            title: 'Control Plane (Master)',
            description: 'Die Steuerungsebene des Clusters. Sie trifft globale Entscheidungen (z. B. Scheduling) und erkennt/reagiert auf Cluster-Ereignisse. Beinhaltet Komponenten wie den API-Server, etcd, Scheduler und Controller Manager.'
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
            title: 'ReplicaSets',
            description: 'Stellt sicher, dass zu jedem Zeitpunkt eine bestimmte Anzahl von Pod-Replikaten ausgeführt wird. Wird meist nicht direkt, sondern im Hintergrund von Deployments verwaltet.'
        },
        {
            title: 'StatefulSets',
            description: 'Ähnlich wie Deployments, jedoch speziell für zustandsbehaftete (stateful) Anwendungen. Sie garantieren die Reihenfolge bei der Bereitstellung und eine eindeutige, persistente Identität für jeden Pod.'
        },
        {
            title: 'DaemonSets',
            description: 'Stellt sicher, dass auf allen (oder bestimmten) Nodes im Cluster eine Kopie eines bestimmten Pods läuft. Ideal für systemnahe Aufgaben wie Log-Sammlung oder Monitoring-Agenten.'
        },
        {
            title: 'Jobs & CronJobs',
            description: 'Ein Job führt einen oder mehrere Pods aus, bis eine bestimmte Aufgabe erfolgreich abgeschlossen ist. CronJobs tun dies zeitgesteuert nach einem festgelegten Zeitplan.'
        },
        {
            title: 'Horizontal Pod Autoscaler (HPA)',
            description: 'Skaliert die Anzahl der Pods in einem Deployment, ReplicaSet oder StatefulSet automatisch hoch oder herunter, basierend auf der CPU-Auslastung oder anderen benutzerdefinierten Metriken.'
        },
        {
            title: 'Labels & Selectors',
            description: 'Schlüssel-Wert-Paare, die an Objekte geheftet werden. Selectors ermöglichen es, eine Gruppe von Objekten basierend auf ihren Labels zu identifizieren und zu verwalten.'
        },
        {
            title: 'Namespaces',
            description: 'Virtuelle Cluster innerhalb eines physischen Clusters. Sie dienen zur Trennung von Ressourcen zwischen verschiedenen Projekten, Umgebungen oder Teams.'
        },
        {
            title: 'Ingress',
            description: 'Verwaltet den externen Zugriff auf Dienste im Cluster, typischerweise via HTTP/HTTPS. Bietet Lastverteilung, SSL-Terminierung und namensbasiertes virtuelles Hosting.'
        },
        {
            title: 'ConfigMaps & Secrets',
            description: 'Dienen zur Speicherung von Konfigurationsdaten und sensiblen Informationen (wie Passwörter oder API-Keys) getrennt vom Anwendungs-Code.'
        },
        {
            title: 'Volumes',
            description: 'Ein Verzeichnis, auf das die Container in einem Pod zugreifen können. Volumes lösen das Problem der Datenpersistenz in flüchtigen Containern.'
        },
        {
            title: 'PersistentVolumes (PV) & PersistentVolumeClaims (PVC)',
            description: 'Erweitern das Volume-Konzept für dauerhaften Speicher. Ein PV ist eine vom Administrator bereitgestellte Speicherressource, während ein PVC die Speicheranforderung eines Benutzers an diese Ressource ist.'
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
