import React, { useState } from 'react';

const K8sConceptsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const conceptCategories = [
        {
            categoryName: "Cluster-Grundlagen",
            description: "Die Architektur und die zentralen Bausteine eines Kubernetes-Clusters.",
            items: [
                { title: "Cluster", description: "Eine Gruppe von Maschinen (Nodes), die gemeinsam Container-Anwendungen ausführen und verwalten." },
                { title: "Nodes", description: "Physische oder virtuelle Maschinen im Cluster. Worker Nodes führen Anwendungen aus, während die Control Plane den Cluster steuert." },
                { title: "Control Plane", description: "Das Gehirn des Clusters. Verwaltet den gewünschten Zustand, plant Pods auf Nodes und überwacht den Cluster." },
                { title: "Namespaces", description: "Virtuelle Unterteilungen innerhalb eines Clusters zur Trennung von Projekten, Teams oder Umgebungen." }
            ]
        },
        {
            categoryName: "Workloads & Anwendungen",
            description: "Objekte zur Ausführung und Verwaltung containerisierter Anwendungen.",
            items: [
                { title: "Pods", description: "Die kleinste deploybare Einheit in Kubernetes. Ein Pod enthält einen oder mehrere Container mit gemeinsamer Netzwerk- und Speicherumgebung." },
                { title: "Deployments", description: "Definieren den gewünschten Zustand einer Anwendung und ermöglichen Updates, Rollbacks und Skalierung." },
                { title: "ReplicaSets", description: "Sorgen dafür, dass immer eine festgelegte Anzahl von Pod-Instanzen verfügbar ist." },
                { title: "StatefulSets", description: "Für zustandsbehaftete Anwendungen wie Datenbanken. Jeder Pod besitzt eine feste Identität und dauerhaft zugeordneten Speicher." },
                { title: "DaemonSets", description: "Stellen sicher, dass auf ausgewählten Nodes jeweils genau eine Instanz eines Pods läuft, z. B. für Monitoring oder Logging." },
                { title: "Jobs & CronJobs", description: "Jobs führen einmalige Aufgaben aus. CronJobs starten diese regelmäßig nach einem definierten Zeitplan." }
            ]
        },
        {
            categoryName: "Netzwerk & Kommunikation",
            description: "Komponenten für die Kommunikation innerhalb und außerhalb des Clusters.",
            items: [
                { title: "Services", description: "Bieten eine stabile Netzwerkadresse für Pods und verteilen Anfragen automatisch auf mehrere Instanzen." },
                { title: "Ingress", description: "Steuert den externen Zugriff auf Anwendungen über HTTP/HTTPS und ermöglicht Routing anhand von Domains oder Pfaden." },
                { title: "DNS", description: "Ermöglicht die interne Namensauflösung von Services und vereinfacht die Kommunikation zwischen Anwendungen." }
            ]
        },
        {
            categoryName: "Konfiguration & Persistenz",
            description: "Mechanismen zur Verwaltung von Einstellungen und Daten.",
            items: [
                { title: "ConfigMaps", description: "Speichern Konfigurationswerte getrennt vom Anwendungscode." },
                { title: "Secrets", description: "Speichern sensible Daten wie Passwörter, API-Keys oder Zertifikate." },
                { title: "Volumes", description: "Persistenter Speicher, der Containern innerhalb eines Pods zur Verfügung gestellt wird." },
                { title: "Persistent Volumes (PV)", description: "Vom Cluster bereitgestellte Speicherressourcen." },
                { title: "Persistent Volume Claims (PVC)", description: "Anforderungen von Anwendungen an persistenten Speicher." }
            ]
        },
        {
            categoryName: "Skalierung & Automatisierung",
            description: "Werkzeuge zur automatischen Anpassung und effizienten Ressourcennutzung.",
            items: [
                { title: "Horizontal Pod Autoscaler (HPA)", description: "Passt die Anzahl der Pods automatisch anhand von Metriken wie CPU- oder Speicherauslastung an." },
                { title: "Resource Requests & Limits", description: "Definieren die minimalen und maximalen CPU- und Speicherressourcen für Container." },
                { title: "Self-Healing", description: "Kubernetes ersetzt ausgefallene Pods automatisch und stellt den gewünschten Zustand wieder her." }
            ]
        },
        {
            categoryName: "Organisation & Sicherheit",
            description: "Mechanismen zur Strukturierung und Absicherung von Anwendungen.",
            items: [
                { title: "Labels & Selectors", description: "Schlüssel-Wert-Paare zur Gruppierung und Auswahl von Kubernetes-Objekten." },
                { title: "RBAC", description: "Role-Based Access Control regelt, welche Benutzer oder Dienste auf bestimmte Ressourcen zugreifen dürfen." }
            ]
        }
    ];

    return (
        <section id="concepts" className="summary-section">
            <div className="concepts-header">
                <h2>Core Konzepte</h2>
                <p>Wählen Sie einen Bereich, um die entsprechenden Kubernetes-Bausteine zu sehen:</p>
            </div>

            <div className="tab-navigation">
                {conceptCategories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                    >
                        {category.categoryName}
                    </button>
                ))}
            </div>

            <div className="fade-in">
                <p className="category-description">
                    {conceptCategories[activeTab].description}
                </p>

                <div className="literature-grid">
                    {conceptCategories[activeTab].items.map((concept, index) => (
                        <article className="concept-card" key={index}>
                            <h4>{concept.title}</h4>
                            <p>{concept.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default K8sConceptsSection;
