import React, { useState } from 'react';

const K8sConceptsSection = () => {
    // State für die aktuell ausgewählte Kategorie (Index)
    const [activeTab, setActiveTab] = useState(0);

    const conceptCategories = [
        {
            categoryName: "Cluster-Grundlagen",
            description: "Die Architektur und die zentralen Bausteine eines Kubernetes-Clusters.",
            items: [
                {
                    title: "Cluster",
                    description: "Eine Gruppe von Maschinen (Nodes), die gemeinsam Container-Anwendungen ausführen und verwalten."
                },
                {
                    title: "Nodes",
                    description: "Physische oder virtuelle Maschinen im Cluster. Worker Nodes führen Anwendungen aus, während die Control Plane den Cluster steuert."
                },
                {
                    title: "Control Plane",
                    description: "Das Gehirn des Clusters. Verwaltet den gewünschten Zustand, plant Pods auf Nodes und überwacht den Cluster."
                },
                {
                    title: "Namespaces",
                    description: "Virtuelle Unterteilungen innerhalb eines Clusters zur Trennung von Projekten, Teams oder Umgebungen."
                }
            ]
        },

        {
            categoryName: "Workloads & Anwendungen",
            description: "Objekte zur Ausführung und Verwaltung containerisierter Anwendungen.",
            items: [
                {
                    title: "Pods",
                    description: "Die kleinste deploybare Einheit in Kubernetes. Ein Pod enthält einen oder mehrere Container mit gemeinsamer Netzwerk- und Speicherumgebung."
                },
                {
                    title: "Deployments",
                    description: "Definieren den gewünschten Zustand einer Anwendung und ermöglichen Updates, Rollbacks und Skalierung."
                },
                {
                    title: "ReplicaSets",
                    description: "Sorgen dafür, dass immer eine festgelegte Anzahl von Pod-Instanzen verfügbar ist."
                },
                {
                    title: "StatefulSets",
                    description: "Für zustandsbehaftete Anwendungen wie Datenbanken. Jeder Pod besitzt eine feste Identität und dauerhaft zugeordneten Speicher."
                },
                {
                    title: "DaemonSets",
                    description: "Stellen sicher, dass auf ausgewählten Nodes jeweils genau eine Instanz eines Pods läuft, z. B. für Monitoring oder Logging."
                },
                {
                    title: "Jobs & CronJobs",
                    description: "Jobs führen einmalige Aufgaben aus. CronJobs starten diese regelmäßig nach einem definierten Zeitplan."
                }
            ]
        },

        {
            categoryName: "Netzwerk & Kommunikation",
            description: "Komponenten für die Kommunikation innerhalb und außerhalb des Clusters.",
            items: [
                {
                    title: "Services",
                    description: "Bieten eine stabile Netzwerkadresse für Pods und verteilen Anfragen automatisch auf mehrere Instanzen."
                },
                {
                    title: "Ingress",
                    description: "Steuert den externen Zugriff auf Anwendungen über HTTP/HTTPS und ermöglicht Routing anhand von Domains oder Pfaden."
                },
                {
                    title: "DNS",
                    description: "Ermöglicht die interne Namensauflösung von Services und vereinfacht die Kommunikation zwischen Anwendungen."
                }
            ]
        },

        {
            categoryName: "Konfiguration & Persistenz",
            description: "Mechanismen zur Verwaltung von Einstellungen und Daten.",
            items: [
                {
                    title: "ConfigMaps",
                    description: "Speichern Konfigurationswerte getrennt vom Anwendungscode."
                },
                {
                    title: "Secrets",
                    description: "Speichern sensible Daten wie Passwörter, API-Keys oder Zertifikate."
                },
                {
                    title: "Volumes",
                    description: "Persistenter Speicher, der Containern innerhalb eines Pods zur Verfügung gestellt wird."
                },
                {
                    title: "Persistent Volumes (PV)",
                    description: "Vom Cluster bereitgestellte Speicherressourcen."
                },
                {
                    title: "Persistent Volume Claims (PVC)",
                    description: "Anforderungen von Anwendungen an persistenten Speicher."
                }
            ]
        },

        {
            categoryName: "Skalierung & Automatisierung",
            description: "Werkzeuge zur automatischen Anpassung und effizienten Ressourcennutzung.",
            items: [
                {
                    title: "Horizontal Pod Autoscaler (HPA)",
                    description: "Passt die Anzahl der Pods automatisch anhand von Metriken wie CPU- oder Speicherauslastung an."
                },
                {
                    title: "Resource Requests & Limits",
                    description: "Definieren die minimalen und maximalen CPU- und Speicherressourcen für Container."
                },
                {
                    title: "Self-Healing",
                    description: "Kubernetes ersetzt ausgefallene Pods automatisch und stellt den gewünschten Zustand wieder her."
                }
            ]
        },

        {
            categoryName: "Organisation & Sicherheit",
            description: "Mechanismen zur Strukturierung und Absicherung von Anwendungen.",
            items: [
                {
                    title: "Labels & Selectors",
                    description: "Schlüssel-Wert-Paare zur Gruppierung und Auswahl von Kubernetes-Objekten."
                },
                {
                    title: "RBAC",
                    description: "Role-Based Access Control regelt, welche Benutzer oder Dienste auf bestimmte Ressourcen zugreifen dürfen."
                }
            ]
        }
    ];

    return (
        <section id="concepts" className="summary-section" style={{ marginBottom: '4rem', fontFamily: 'sans-serif' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Core Konzepte</h2>
                <p style={{ color: '#666', margin: 0 }}>Wählen Sie einen Bereich, um die entsprechenden Kubernetes-Bausteine zu sehen:</p>
            </div>

            {/* Interaktive Tab-Navigation */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                borderBottom: '1px solid #e0e0e0',
                paddingBottom: '1rem'
            }}>
                {conceptCategories.map((category, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            style={{
                                padding: '0.6rem 1.2rem',
                                fontSize: '0.95rem',
                                fontWeight: isActive ? '600' : '400',
                                color: isActive ? '#fff' : '#555',
                                backgroundColor: isActive ? 'var(--k8s-blue, #1976d2)' : '#f5f5f5',
                                border: isActive ? '1px solid var(--k8s-blue, #1976d2)' : '1px solid #e0e0e0',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease-in-out'
                            }}
                        >
                            {category.categoryName}
                        </button>
                    );
                })}
            </div>

            {/* Anzeige der aktivierten Kategorie */}
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '1.05rem', color: '#555', fontStyle: 'italic', margin: 0 }}>
                        {conceptCategories[activeTab].description}
                    </p>
                </div>

                <div className="literature-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {conceptCategories[activeTab].items.map((concept, index) => (
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
        </section>
    );
};

export default K8sConceptsSection;