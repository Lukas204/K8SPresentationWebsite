import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import { OfficialArchitectureSection, ProjectArchitectureSection } from './components/ArchitectureSection';
import K8sConceptsSection from './components/K8sConceptsSection';
import LiteratureSection from './components/LiteratureSection';
import KaaSSection from './components/KaaSSection';
import CommentSection from './components/CommentSection';
import { useComments } from './hooks/useComments';

function App() {
  const [modalImage, setModalImage] = useState(null);
  const commentProps = useComments();

  return (
      <div className="app">
        <Navbar />
        <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
        <Header />

        <main>
          <OfficialArchitectureSection onOpenModal={setModalImage} />
          <K8sConceptsSection />
          <ProjectArchitectureSection onOpenModal={setModalImage} />
          <LiteratureSection />
          <KaaSSection />
          <CommentSection {...commentProps} />
        </main>

        <Footer />
      </div>
  );
}

export default App;
