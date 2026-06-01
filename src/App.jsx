import React, { useState, useEffect } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchComments();
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

        <section id="architecture" className="summary-section">
          <h2>System-Architektur</h2>
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
