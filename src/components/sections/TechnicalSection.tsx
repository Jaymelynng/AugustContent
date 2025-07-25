import React from 'react';

export function TechnicalSection() {
  return (
    <div>
      <h1>Technical Standards</h1>

      <div className="requirements">
        <h3>📱 Video & Photo Specs</h3>
        <ul>
          <li><b>Photos:</b> High resolution, well-lit</li>
          <li><b>Format:</b> Vertical preferred for social (landscape also acceptable)</li>
          <li><b>Quality:</b> Clear, steady, in focus</li>
          <li><b>Composition:</b> Full body in frame</li>
        </ul>
      </div>

      <div className="requirements">
        <h3>Before Submitting - Check These:</h3>
        <ul>
          <li>Is the technique clean and safe?</li>
          <li>Is the angle respectful and not awkward?</li>
          <li>Is the moment authentic (not staged for the camera)?</li>
          <li>Is the background good?</li>
          <li>Is sound good?</li>
          <li>Is the lighting solid?</li>
        </ul>
      </div>

      <div className="golden-rule">
        <h3>💡 The Golden Rule</h3>
        <p>Before hitting record, ask yourself: <b>"Would I want this shared if it were my child?"</b> If yes—film it! If you hesitate, don't.</p>
      </div>

      <div className="back-to-top-container">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top-btn">
          ⬆️ Back to Top
        </button>
      </div>
    </div>
  );
}