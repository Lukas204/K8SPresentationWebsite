import React from 'react';

const CommentSection = ({ comments, author, setAuthor, content, setContent, handleSubmit }) => (
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
);

export default CommentSection;
