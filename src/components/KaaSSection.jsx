import React from 'react';

const KaaSSection = () => (
  <section id="kaas" className="summary-section" style={{ marginBottom: '4rem' }}>
    <h2>Kubernetes as a Service (KaaS)</h2>
    <p style={{ marginBottom: '1.5rem' }}>
      Managed Lösungen reduzieren den Administrationsaufwand drastisch:
    </p>
    <div className="literature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <article className="card">
        <div className="card-img" style={{ padding: '30px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" style={{ height: '60px', width: 'auto' }} />
        </div>
        <div className="card-content">
          <h3>Amazon EKS</h3>
          <p>Marktführer mit tiefer AWS-Integration.</p>
          <a href="https://aws.amazon.com/eks/" className="card-link" target="_blank" rel="noopener noreferrer">Zu AWS EKS</a>
        </div>
      </article>

      <article className="card">
        <div className="card-img" style={{ padding: '30px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud Logo" style={{ height: '60px', width: 'auto' }} />
        </div>
        <div className="card-content">
          <h3>Google GKE</h3>
          <p>Pionier mit höchstem Automatisierungsgrad.</p>
          <a href="https://cloud.google.com/kubernetes-engine" className="card-link" target="_blank" rel="noopener noreferrer">Zu Google GKE</a>
        </div>
      </article>

      <article className="card">
        <div className="card-img" style={{ padding: '30px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure Logo" style={{ height: '60px', width: 'auto' }} />
        </div>
        <div className="card-content">
          <h3>Azure AKS</h3>
          <p>Beste Wahl für Microsoft-Ökosysteme.</p>
          <a href="https://azure.microsoft.com/services/kubernetes-service/" className="card-link" target="_blank" rel="noopener noreferrer">Zu Azure AKS</a>
        </div>
      </article>
    </div>
  </section>
);

export default KaaSSection;
