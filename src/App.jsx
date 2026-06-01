import React, { useState, useEffect } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchComments();
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
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-brand">K8s Handout</a>
          <ul className="nav-links">
            <li><a href="#official-architecture">Konzept</a></li>
            <li><a href="#architecture">Projekt-Setup</a></li>
            <li><a href="#literature">Literatur</a></li>
            <li><a href="#kaas">KaaS</a></li>
            <li><a href="#comments">Diskussion</a></li>
          </ul>
        </div>
      </nav>

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
            zIndex: 2000,
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
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: '0.9', fontSize: '1rem' }}>
            Dieses Handout dient als interaktive Ergänzung zur Präsentation. Hier finden Sie alle Diagramme, Literaturverweise und eine Übersicht zu Managed Service Providern.
          </p>
          <a 
            href="https://github.com/Lukas204/K8SPresentationWebsite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-link"
            style={{ 
              color: 'white', 
              backgroundColor: 'rgba(0,0,0,0.3)', 
              padding: '0.8rem 1.5rem', 
              borderRadius: '6px', 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <svg height="20" width="20" viewBox="0 0 16 16" fill="white"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            GitHub Repository
          </a>
        </div>
      </header>

      <main>
        {/* 1. Offizielle Architektur */}
        <section id="official-architecture" className="summary-section" style={{ marginBottom: '4rem' }}>
          <h2>Offizielles K8s-Konzept</h2>
          <div className="architecture-container" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>Das theoretische Modell eines Kubernetes-Clusters:</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1.5rem' }}>(Zum Vergrößern auf das Bild klicken)</p>
            <img 
              src="https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg" 
              alt="Offizielle Architektur" 
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
              alt="Projekt Architektur" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            />
            <p className="summary-placeholder" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
              Live-Rendering via PlantUML.
            </p>
          </div>
        </section>

        {/* 3. Literatur */}
        <section id="literature" style={{ marginBottom: '4rem' }}>
          <h2>Literatur & Ressourcen</h2>
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
                <span className="badge">HAW Bibliothek</span>
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
                <h3>BSI IT-Grundschutz</h3>
                <p>Offizieller Sicherheitsbaustein APP.4.4 für Kubernetes-Cluster.</p>
                <span className="badge">Deutsch</span>
                <span className="badge">Sicherheit</span>
                <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2022/06_APP_Anwendungen/APP_4_4_Kubernetes_Edition_2022.pdf" className="card-link" target="_blank" rel="noopener noreferrer">BSI Baustein öffnen</a>
              </div>
            </article>
          </div>
        </section>

        {/* 4. KaaS */}
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

        {/* 5. Kommentare */}
        <section id="comments" className="comments-section">
          <h2>Diskussion & Fragen</h2>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>Stellen Sie hier Ihre Fragen zum Thema:</p>
          <form className="comment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <textarea
              placeholder="Ihre Frage..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="4"
            ></textarea>
            <button type="submit">Absenden</button>
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
            {comments.length === 0 && <p className="summary-placeholder">Noch keine Beiträge vorhanden.</p>}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Kubernetes Präsentation • Lukas</p>
        <div className="legal-links" style={{ marginTop: '1rem' }}>
          <a href="https://legal.michelstinkt.win/impressum.html" target="_blank" rel="noopener noreferrer">Impressum</a>
          <a href="https://legal.michelstinkt.win/datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
