import React from 'react';

const KeyTakeawaysSection = () => {
  const takeaways = [
    {
      title: "Deklaratives Modell",
      description: "Man beschreibt den Zielzustand (Was), nicht den Weg dorthin (Wie). Kubernetes kümmert sich um die Umsetzung."
    },
    {
      title: "Self-Healing",
      description: "Fällt ein Container aus, startet Kubernetes ihn automatisch neu oder verschiebt ihn auf einen gesunden Node."
    },
    {
      title: "Skalierbarkeit",
      description: "Anwendungen können je nach Last sekundenschnell vergrößert oder verkleinert werden (HPA)."
    }
  ];

  return (
    <section id="takeaways" className="summary-section">
      <h2>Key Takeaways</h2>
      <div className="literature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {takeaways.map((item, index) => (
          <div key={index} className="concept-card">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTakeawaysSection;
