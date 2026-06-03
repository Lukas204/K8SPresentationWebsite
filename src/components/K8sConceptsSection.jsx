import React from 'react';

const K8sConceptsSection = () => {
    // Die Konzepte wurden in logische Gruppen unterteilt und Duplikate entfernt
    const conceptCategories = [
        {
            categoryName: "Infrastruktur & Architektur",
            description: "Die physischen und logischen Grundbausteine des Clusters.",
            items: [
                {
                    title: 'Nodes',
                    description: 'Eine physische oder virtuelle Maschine im Cluster. Man unterscheidet zwischen Worker Nodes (für Anwendungs-Pods) und Control Plane Nodes (für die Cluster-Verwaltung).'
                },
                {
                    title: 'Control Plane',
                    description: 'Die Steuerungsebene des Clusters. Sie trifft globale Entscheidungen (z. B. Scheduling) und reagiert auf Cluster-Ereignisse. Beinhaltet Komponenten wie den API-Server, etcd, Scheduler und Controller Manager.'
                },
                {
                    title: 'Namespaces',
                    description: 'Virtuelle Cluster innerhalb eines physischen Clusters zur isolation und Trennung von Ressourcen zwischen verschiedenen Projekten, Umgebungen oder Teams.'
                }
            ]
        },
        {
            categoryName: "📦 Workloads & Applikationen",
            description: "Objekte, mit denen Sie Ihre Container ausführen und verwalten.",
            items: [
                {
                    title: 'Pods',
                    description: 'Die kleinste bereitstellbare Einheit in K8s. Ein Pod kapselt einen oder mehrere Container, gemeinsame Speicherressourcen und eine eindeutige Netzwerk-IP.'
                },
                {
                    title: 'Deployments',
                    description: 'Beschreibt den gewünschten Zustand für Pods und ReplicaSets. Der Deployment-Controller sorgt im Hintergrund für die schrittweise Aktualisierung und Skalierung.'
                },
                {
                    title: 'ReplicaSets',
                    description: 'Stellt sicher, dass zu jedem Zeitpunkt eine exakt definierte Anzahl von Pod-Replikaten ausgeführt wird. Wird meist automatisch von Deployments gesteuert.'
                },
                {
                    title: 'StatefulSets',
                    description: 'Speziell für zustandsbehaftete (stateful) Anwendungen. Sie garantieren eine feste, persistente Identität und eine geordnete Bereitstellung der Pods.'
                },
                {
                    title: 'DaemonSets',
                    description: 'Stellt sicher, dass auf allen (oder bestimmten) Nodes im Cluster genau eine Kopie eines Pods läuft (ideal für Logging- oder Monitoring-Agenten).'
                },
                {
                    title: 'Jobs & CronJobs',
                    description: 'Jobs führen Pods aus, bis eine bestimmte Aufgabe erfolgreich abgeschlossen ist. CronJobs starten diese Aufgaben zeitgesteuert nach einem festgelegten Zeitplan.'
                }
            ]
        },
        {
            categoryName: "Netzwerk & Zugriff",
            description: "Komponenten, die die Kommunikation nach innen und außen regeln.",
            items: [
                {
                    title: 'Services',
                    description: 'Abstraktion, die eine Gruppe von Pods als Netzwerkdienst definiert. Ermöglicht eine stabile IP-Adresse und automatische Lastverteilung (Load Balancing).'
                },
                {
                    title: 'Ingress',
                    description: 'Verwaltet den externen Zugriff auf Dienste im Cluster (meist HTTP/HTTPS). Bietet SSL-Terminierung, Routing-Regeln und namensbasiertes virtuelles Hosting.'
                }
            ]
        },
        {
            categoryName: "Konfiguration & Speicher",
            description: "Wie Ihre Anwendungen Daten sichern und Einstellungen laden.",
            items: [
                {
                    title: 'ConfigMaps & Secrets',
                    description: 'Dienen zur Speicherung von Konfigurationsdaten (ConfigMaps) und sensiblen Infos wie Passwörtern (Secrets) – strikt getrennt vom eigentlichen Anwendungscode.'
                },
                {
                    title: 'Volumes',
                    description: 'Ein Verzeichnis, auf das Container in einem Pod zugreifen können, um das Problem der Datenflüchtigkeit in Containern zu lösen.'
                },
                {
                    title: 'PV & PVC',
                    description: 'PersistentVolumes (PV) sind vom Admin bereitgestellte Speicherressourcen. PersistentVolumeClaims (PVC) sind die "Anforderungen" der Nutzer an diesen Speicher.'
                }
            ]
        },
        {
            categoryName: "Automatisierung & Metadaten",
            description: "Werkzeuge zur Organisation und dynamischen Anpassung.",
            items: [
                {
                    title: 'Horizontal Pod Autoscaler (HPA)',
                    description: 'Skaliert die Anzahl der Pods in einem Deployment oder StatefulSet automatisch basierend auf der aktuellen CPU-Auslastung oder anderen Metriken.'
                },
                {
                    title: 'Labels & Selectors',
                    description: 'Schlüssel-Wert-Paare (Labels), die an Objekten haften. Selectors erlauben es, diese Objekte basierend auf den Labels gezielt abzufragen und zu verknüpfen.'
                }
            ]
        }
    ];

    return (
        <section id="concepts" className="summary-section" style={{ marginBottom: '4rem', fontFamily: 'sans-serif' }}>
            <header style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Core Konzepte</h2>
                <p style={{ color: '#666' }}>Die grundlegenden Bausteine von Kubernetes nach Themengebieten sortiert:</p>
            </header>

            {conceptCategories.map((category, catIndex) => (
                <div key={catIndex} style={{ marginBottom: '3rem' }}>
                    <div style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.4rem', margin: 0, color: '#333' }}>{category.categoryName}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#777', margin: '0.25rem 0 0 0' }}>{category.description}</p>
                    </div>

                    <div className="literature-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {category.items.map((concept, index) => (
                            <article className="card" key={index} style={{
                                background: '#fff',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div className="card-content">
                                    <h4 style={{
                                        color: 'var(--k8s-blue, #1976d2)',
                                        margin: '0 0 0.75rem 0',
                                        fontSize: '1.1rem',
                                        fontWeight: '600'
                                    }}>
                                        {concept.title}
                                    </h4>
                                    <p style={{
                                        fontSize: '0.925rem',
                                        lineHeight: '1.5',
                                        color: '#444',
                                        margin: 0
                                    }}>
                                        {concept.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default K8sConceptsSection;