import React, { useState, useEffect } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchComments();
    // Auto-Refresh: Alle 5 Sekunden nach neuen Kommentaren suchen
    const interval = setInterval(fetchComments, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments');
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author || !content) return;
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, content }),
      });
      if (res.ok) {
        setAuthor('');
        setContent('');
        fetchComments();
      }
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  return (
    <div className="app">
      {showModal && (
        <div 
          className="modal-overlay" 
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out'
          }}
        >
          <img 
            src="https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg" 
            alt="Offizielle K8s Architektur Vergrößert"
            style={{ maxWidth: '90%', maxHeight: '90%', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}
          />
        </div>
      )}

      <header>
        <h1>Kubernetes Handout</h1>
        <p>Begleitmaterialien und weiterführende Informationen zur Präsentation</p>
        <div style={{ marginTop: '1rem' }}>
          <a 
            href="https://github.com/Lukas204/K8SPresentationWebsite" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'underline', fontSize: '0.9rem' }}
          >
            GitHub Repository ansehen
          </a>
        </div>
      </header>

      <main>

        <section id="official-architecture" className="summary-section">
          <h2>Offizielle K8s-Architektur</h2>
          <div className="architecture-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>Das konzeptionelle Modell eines Kubernetes-Clusters:</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1rem' }}>(Zum Vergrößern auf das Bild klicken)</p>
            <img
                src="https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg"
                alt="Offizielle Kubernetes Cluster Architektur"
                onClick={() => setShowModal(true)}
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
              Grafik von <a href="https://kubernetes.io/docs/concepts/architecture/" target="_blank" rel="noopener noreferrer">The Kubernetes Authors</a>, lizenziert unter <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.
            </p>
          </div>
        </section>

        <section id="summary" className="summary-section">
          <h2>Zusammenfassung der Slides</h2>
          <div className="summary-placeholder">
            <p>An dieser Stelle wird später eine detaillierte Zusammenfassung der Präsentations-Slides eingefügt.</p>
            <ul>
              <li>Grundlagen & Architektur</li>
              <li>Objekte (Pods, Services, Deployments)</li>
              <li>Networking & Storage</li>
              <li>Deployment-Strategien</li>
            </ul>
          </div>
        </section>

        <section id="literature">
          <h2>Weiterführende Literatur</h2>
          <div className="literature-grid">
            <article className="card">
              <div className="card-img">
                <img src="https://www.oreilly.com/covers/urn:orm:book:9781098110192/296w/?format=webp" alt="Kubernetes: Up and Running Cover" />
              </div>
              <div className="card-content">
                <h3>Kubernetes: Up & Running</h3>
                <p>Brendan Burns, Joe Beda, Kelsey Hightower (O'Reilly)</p>
                <span className="badge">Englisch</span>
                <a href="https://github.com/rohitg00/DevOps_Books/blob/main/O'Reilly%20Kubernetes%20Up%20and%20Running.pdf" className="card-link" target="_blank" rel="noopener noreferrer">PDF auf GitHub ansehen</a>
              </div>
            </article>

            <article className="card">
              <div className="card-img">
                <img src="https://dpunkt.de/wp-content/uploads/2024/03/13976.jpg" alt="Kubernetes (dpunkt) Cover" />
              </div>
              <div className="card-content">
                <h3>Kubernetes (3. Auflage)</h3>
                <p>Stefan Kert, Hans-Jürgen Wolter (dpunkt.verlag)</p>
                <span className="badge">Deutsch</span>
                <span className="badge">HAW Bibliothek verfügbar (Online)</span>
                <a href="https://dpunkt.de/produkt/kubernetes-3/" className="card-link" target="_blank" rel="noopener noreferrer">Details beim Verlag</a>
              </div>
            </article>
            <article className="card">
              <div className="card-img">
                <img src="https://opensource.com/sites/default/files/styles/medium/public/pictures/osdc_cheatsheet-kubernetes-2021.4.16.png?itok=BUvxtu5X" alt="Kubernetes Cheat Sheet" />
              </div>
              <div className="card-content">
                <h3>Kubernetes Cheat Sheet</h3>
                <p>Schnellreferenz für die wichtigsten Befehle (kubectl, Objekte, YAML)</p>
                <span className="badge">Englisch</span>
                <span className="badge">Quick Ref</span>
                <a href="https://opensource.com/sites/default/files/gated-content/osdc_cheatsheet-kubernetes-2021.4.16.pdf" className="card-link" target="_blank" rel="noopener noreferrer">PDF Cheat Sheet öffnen</a>
              </div>
            </article>
            <article className="card">
              <div className="card-img">
                <img src="https://www.bsi.bund.de/SiteGlobals/Frontend/Images/logo.svg?__blob=normal&v=4" alt="BSI IT-Grundschutz" style={{ padding: '20px', objectFit: 'contain', backgroundColor: '#f5f5f5' }} />
              </div>
              <div className="card-content">
                <h3>BSI IT-Grundschutz: APP.4.4 Kubernetes</h3>
                <p>Offizieller Sicherheitsbaustein (Edition 2022) für den Schutz von Informationen in Kubernetes-Clustern.</p>
                <span className="badge">Deutsch</span>
                <span className="badge">BSI Standard</span>
                <span className="badge">Sicherheit</span>
                <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2022/06_APP_Anwendungen/APP_4_4_Kubernetes_Edition_2022.pdf?__blob=publicationFile&v=3" className="card-link" target="_blank" rel="noopener noreferrer">BSI Baustein-PDF öffnen</a>
              </div>
            </article>
          </div>
        </section>

        <section id="architecture" className="summary-section">
          <h2>System-Architektur (Dieses Projekt)</h2>
          <div className="architecture-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>Visualisierung des Kubernetes-Setups inkl. Cloudflare, HPA und git-sync:</p>
            <img 
              src="https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/Lukas204/K8SPresentationWebsite/main/architecture.puml" 
              alt="Kubernetes Architektur Diagramm" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            />
            <p className="summary-placeholder" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
              Das Diagramm wird live via PlantUML aus der <code>architecture.puml</code> gerendert.
            </p>
          </div>
        </section>

        <section id="kaas" className="summary-section" style={{ marginBottom: '3rem' }}>
          <h2>Kubernetes as a Service (KaaS)</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Managed Kubernetes-Lösungen nehmen dem Nutzer die Verwaltung der Control Plane ab. Da auch die Worker Nodes in der Cloud laufen und ein cloudbasierter Load Balancer die Verkehrsverteilung übernimmt, verbleibt der gesamte Infrastruktur-Aufwand beim Provider. Hier sind die drei marktführenden Anbieter:
          </p>
          <div className="literature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <article className="card">
              <div className="card-img" style={{ padding: '40px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" style={{ height: '80px', width: 'auto' }} />
              </div>
              <div className="card-content">
                <h3>Amazon EKS</h3>
                <p>Elastic Kubernetes Service - Der Marktführer mit tiefer AWS-Integration.</p>
                <a href="https://aws.amazon.com/eks/" className="card-link" target="_blank" rel="noopener noreferrer">Zu AWS EKS</a>
              </div>
            </article>

            <article className="card">
              <div className="card-img" style={{ padding: '40px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud Logo" style={{ height: '80px', width: 'auto' }} />
              </div>
              <div className="card-content">
                <h3>Google GKE</h3>
                <p>Google Kubernetes Engine - Pionier der K8s-Technologie mit höchstem Automatisierungsgrad.</p>
                <a href="https://cloud.google.com/kubernetes-engine" className="card-link" target="_blank" rel="noopener noreferrer">Zu Google GKE</a>
              </div>
            </article>

            <article className="card">
              <div className="card-img" style={{ padding: '40px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure Logo" style={{ height: '80px', width: 'auto' }} />
              </div>
              <div className="card-content">
                <h3>Azure AKS</h3>
                <p>Azure Kubernetes Service - Optimale Wahl für Unternehmen mit Microsoft-Ökosystem.</p>
                <a href="https://azure.microsoft.com/services/kubernetes-service/" className="card-link" target="_blank" rel="noopener noreferrer">Zu Azure AKS</a>
              </div>
            </article>
          </div>
        </section>

        <section id="comments" className="comments-section">
          <h2>Kommentare</h2>
          <form className="comment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Dein Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <textarea
              placeholder="Dein Kommentar"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <button type="submit">Senden</button>
          </form>

          <div className="comment-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-date">{new Date(comment.createdAt).toLocaleString()}</span>
                </div>
                <p className="comment-content">{comment.content}</p>
              </div>
            ))}
            {comments.length === 0 && <p className="summary-placeholder">Noch keine Kommentare vorhanden.</p>}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Kubernetes Präsentation</p>
        <div className="legal-links">
          <a href="https://legal.michelstinkt.win/impressum.html" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a href="https://legal.michelstinkt.win/datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
