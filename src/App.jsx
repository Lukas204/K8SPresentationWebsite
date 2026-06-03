import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { OfficialArchitectureSection, ProjectArchitectureSection } from './components/ArchitectureSection';
import K8sConceptsSection from './components/K8sConceptsSection';
import LiteratureSection from './components/LiteratureSection';
import KaaSSection from './components/KaaSSection';
import CommentSection from './components/CommentSection';

function App() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  // FIXED: Renamed state variables to match your modal logic below
  const [modalImage, setModalImage] = useState(null);

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
        <Navbar />

        {modalImage && (
            <div
                className="modal-overlay"
                onClick={() => setModalImage(null)}
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
                  src={modalImage}
                  alt="Architektur Grossansicht"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    cursor: 'default'
                  }}
              />
            </div>
        )}

        <Header />

        <main>
          <OfficialArchitectureSection onOpenModal={(url) => setModalImage(url)} />
          <K8sConceptsSection />
          <ProjectArchitectureSection onOpenModal={(url) => setModalImage(url)} />
          <LiteratureSection />
          <KaaSSection />
          <CommentSection
              comments={comments}
              author={author}
              setAuthor={setAuthor}
              content={content}
              setContent={setContent}
              handleSubmit={handleSubmit}
          />
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
