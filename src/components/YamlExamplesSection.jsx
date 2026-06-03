import React from 'react';

const YamlExamplesSection = () => {
  const deploymentYaml = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80`;

  const serviceYaml = `apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer`;

  return (
    <section id="yaml-examples" className="summary-section">
      <h2>YAML Anatomie</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Kubernetes-Objekte werden deklarativ über YAML-Dateien definiert. Hier sind die gängigsten Beispiele:
      </p>
      <div className="literature-grid">
        <div className="concept-card">
          <h4>Deployment</h4>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Verwaltet die Replikation und Updates von Pods.</p>
          <pre className="code-block">
            <code>{deploymentYaml}</code>
          </pre>
        </div>
        <div className="concept-card">
          <h4>Service</h4>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Macht Pods über das Netzwerk erreichbar.</p>
          <pre className="code-block">
            <code>{serviceYaml}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default YamlExamplesSection;
