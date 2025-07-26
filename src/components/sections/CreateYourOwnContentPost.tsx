import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

interface CreateYourOwnContentPostProps {
  onSectionChange?: (section: string) => void;
}

export function CreateYourOwnContentPost({ onSectionChange }: CreateYourOwnContentPostProps) {
  const checklistItems = [
    { id: 'custom-reel', label: 'Your Custom 30-60 Second Reel', type: 'video' as const },
  ];

  const handleGoToIdeasHub = () => {
    if (onSectionChange) {
      onSectionChange('create-your-own-content');
    }
  };

  return (
    <div>
      <h1>
        🎬 CREATE YOUR OWN CONTENT
        <ContentBadge type="video" label="CUSTOM REEL | 1 VIDEO" />
      </h1>

      <div className="content-section">
        <h3>📅 August Content - Final Post</h3>
        <p><strong>🎨 Theme:</strong> Your authentic voice and unique perspective</p>
        <p><strong>🖼️ Format:</strong> 30-60 second Reel</p>
        <p><strong>⏱️ Video Length:</strong> 30-60 seconds</p>
      </div>

      <div className="desc">
        <h3>🎯 Your Mission</h3>
        <p>
          Create one 30–60 second Reel that feels authentic and meaningful. Show us the gym through your eyes—your voice, your experience, your style.
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Guidelines at a Glance</h3>
        <ul>
          <li><strong>Age Appropriate:</strong> Content should reflect positive and supportive values.</li>
          <li><strong>Highlight Your Gym:</strong> Your reel should showcase your gym community, culture, or uniqueness.</li>
          <li><strong>Be You:</strong> Personality matters most. Create something that feels true to you!</li>
        </ul>
      </div>

      <div className="requirements">
        <h3>🗣️ Notes</h3>
        <div className="example-box">
          <em>"For this final August post, there's no specific shot list. The most important thing is that IT comes from you. We want to see the gym through your eyes. Have fun with it, get creative, and share a story that you're passionate about. We can't wait to see what you create!"</em> —Jayme
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="create-your-own-content-post" />

      <div className="content-section">
        <h3>🤹‍♀️ Need Inspiration?</h3>
        
        <div className="inspiration-link-section">
          <div className="inspiration-header">
            <h4>✨ Content Ideas to Spark Your Creativity</h4>
            <p>Browse by your current mood or search for anything that inspires you.</p>
            
            <div className="reminder-box">
              <strong>💡 Reminder:</strong> These are just starting points, not scripts. Use them as-is, tweak them, mix and match, or let them spark something completely different. There's no "right" way to use them—what matters is that it feels authentic to you.
            </div>
          </div>

          <div className="ideas-hub-access">
            <button 
              onClick={handleGoToIdeasHub}
              className="ideas-hub-btn"
            >
              🚀 Browse Content Ideas Hub
            </button>
            <p className="ideas-hub-description">
              Access our complete collection of ~150 interactive content prompts organized by mood and theme
            </p>
          </div>

          <div className="ideas-preview">
            <h5>🎲 What You'll Find:</h5>
            <div className="mood-preview-grid">
              <div className="mood-preview-item">
                <span className="mood-emoji">✨</span>
                <span>Everything (134)</span>
              </div>
              <div className="mood-preview-item">
                <span className="mood-emoji">🌟</span>
                <span>Progress Stories (18)</span>
              </div>
              <div className="mood-preview-item">
                <span className="mood-emoji">🎪</span>
                <span>Playful & Fun (44)</span>
              </div>
              <div className="mood-preview-item">
                <span className="mood-emoji">👨‍🏫</span>
                <span>Educational (28)</span>
              </div>
              <div className="mood-preview-item">
                <span className="mood-emoji">💫</span>
                <span>Community (18)</span>
              </div>
              <div className="mood-preview-item">
                <span className="mood-emoji">🔥</span>
                <span>Behind-the-Scenes (26)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>🎥 UPLOAD YOUR CUSTOM REEL:</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>Your Custom 30-60 Second Reel</h4>
            <div className="content-type-badge video-badge">🎬 Custom Content</div>
            
            <p><strong>What to Create:</strong></p>
            <ul>
              <li>A 30-60 second video that showcases your gym through your unique perspective</li>
              <li>Content that feels authentic and meaningful to you</li>
              <li>Something that highlights your gym's community, culture, or what makes it special</li>
              <li>Your personal voice and creative style</li>
            </ul>
            
            <p><strong>Technical Requirements:</strong></p>
            <ul>
              <li><strong>Length:</strong> 30-60 seconds</li>
              <li><strong>Quality:</strong> Clear, well-lit, steady footage</li>
              <li><strong>Content:</strong> Age-appropriate and positive</li>
              <li><strong>Focus:</strong> Your gym's unique story or culture</li>
            </ul>
            
            <div className="example-box">
              <strong>Remember:</strong> There's no wrong way to approach this. Trust your instincts, be creative, and show us what makes your gym special through your eyes!
            </div>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🎬</span>
      </div>

      <GymSelector postType="single" />

      <div className="back-to-top-container">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top-btn">
          ⬆️ Back to Top
        </button>
      </div>
    </div>
  );
}