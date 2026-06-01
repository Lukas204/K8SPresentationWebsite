import React from 'react';

const LiteratureSection = () => (
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
          <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2022/06_APP_Anwendungen/APP_4_4_Kubernetes_Edition_2022.pdf?__blob=publicationFile&v=3" className="card-link" target="_blank" rel="noopener noreferrer">BSI Baustein öffnen</a>
        </div>
      </article>

      <article className="card">
        <div className="card-img">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg" alt="BSI IT-Grundschutz" style={{ padding: '20px', objectFit: 'contain', backgroundColor: '#f5f5f5' }} />
        </div>
        <div className="card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#326CE5' }}>
          <span style={{ fontSize: '3rem', color: 'white' }}>K8s</span>
        </div>
        <div className="card-content">
          <h3>Kubernetes Dokumentation</h3>
          <p>Die offizielle Dokumentation für Kubernetes.</p>
          <span className="badge">Englisch</span>
          <a href="https://kubernetes.io/docs/home/" className="card-link" target="_blank" rel="noopener noreferrer">Offizielle Dokumentation öffnen</a>
        </div>
      </article>
    </div>
  </section>
);

export default LiteratureSection;
