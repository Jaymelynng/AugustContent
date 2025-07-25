import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function HighFiveThatMattersSection() {
  const checklistItems = [
    { id: 'effort-clip-1', label: 'Effort Clip #1', type: 'video' as const },
    { id: 'effort-clip-2', label: 'Effort Clip #2', type: 'video' as const },
    { id: 'effort-clip-3', label: 'Effort Clip #3', type: 'video' as const },
    { id: 'encouragement-clip-1', label: 'Encouragement Clip #1', type: 'video' as const },
    { id: 'encouragement-clip-2', label: 'Encouragement Clip #2', type: 'video' as const },
    { id: 'encouragement-clip-3', label: 'Encouragement Clip #3', type: 'video' as const },
    { id: 'celebration-clip-1', label: 'Celebration Clip #1', type: 'video' as const },
    { id: 'celebration-clip-2', label: 'Celebration Clip #2', type: 'video' as const },
    { id: 'celebration-clip-3', label: 'Celebration Clip #3', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        The High-Five That Matters (Reel Version)
        <ContentBadge type="video" label="DYNAMIC VIDEO REEL | 9 CLIPS" />
      </h1>

      <div className="content-section">
        <h3>📅 Post Title: The High-Five That Matters</h3>
        <p><strong>🎨 Theme:</strong> Effort. Encouragement. Celebration. The rhythm of a great practice.</p>
        <p><strong>🖼️ Format:</strong> Dynamic Video Reel (Montage Style)</p>
      </div>

      <div className="desc">
        <h3>🎯 Concept & Goal</h3>
        <p>
          This fast-paced montage Reel tells a three-act story about our coaching philosophy. By showcasing a rapid succession of nine distinct "skill-and-praise" moments, the goal is to show parents the complete emotional support system we provide for every stage of learning.
        </p>
      </div>

      <div className="requirements">
        <h3>🔥 Jaymes Notes (Strategy & Copy)</h3>
        <p><strong>Data Point:</strong> Fast-paced montages with a clear, repetitive rhythm perform very well on Reels, encouraging multiple views.</p>
        
        <p><strong>Hook Idea:</strong> "Effort. Encouragement. Celebration. Repeat."</p>
        
        <p><strong>Caption Idea:</strong> "The rhythm of a great practice. We're there to high-five the effort, fist bump the courage, and celebrate the win. Every step of the journey matters. #CoachAthleteBond #GymnasticsLife #TrustTheProcess"</p>
        
        <p><strong>Editing Note:</strong> The final Reel will be a fast-paced montage constructed from the nine short, pre-edited clips provided by the team.</p>
      </div>

      <div className="requirements">
        <h3>🎯 What to Capture</h3>
        <p>Please create and upload NINE (9) separate, short video clips in total, as detailed below. Each clip should be a short edit of a skill attempt immediately followed by the coach's reaction.</p>
      </div>

      <UploadChecklist items={checklistItems} section="high-five-that-matters" />

      <div className="content-section">
        <h3>🔽 Reel Shot List & Instructions</h3>

        <div className="balance-videos">
          <div className="balance-video-item">
            <div className="video-number">1</div>
            <div className="video-content">
              <h4>✅ Category 1: The "Effort" High-Five (3 Clips Total)</h4>
              <div className="video-badge">💪 Effort Over Perfection</div>
              
              <div className="scene-description">
                <h5>Explanation:</h5>
                <p>The goal for this category is to capture moments that show we praise effort over perfection. Each clip should feature a student trying hard on a skill but not succeeding perfectly, and then immediately receiving a genuine, positive high-five from their coach for the attempt.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Effort Clip #1</strong></h5>
                    <p>A student attempts a handstand that falls over, followed by an immediate high-five.</p>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Effort Clip #2</strong></h5>
                    <p>A student attempts a cartwheel with bent legs, followed by an immediate high-five.</p>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Effort Clip #3</strong></h5>
                    <p>A third, different example of a high-effort, imperfect skill followed by an immediate high-five.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">2</div>
            <div className="video-content">
              <h4>✅ Category 2: The "Encouragement" Fist Bump (3 Clips Total)</h4>
              <div className="video-badge">👊 Pre-Challenge Support</div>
              
              <div className="scene-description">
                <h5>Explanation:</h5>
                <p>This category is about capturing the quiet, focused moment of encouragement before a challenge. Each clip should show a coach giving a student a supportive fist bump right before the student attempts a skill that is new or intimidating for them.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Encouragement Clip #1</strong></h5>
                    <p>A coach gives a fist bump, and the student begins a beam skill.</p>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Encouragement Clip #2</strong></h5>
                    <p>A coach gives a fist bump, and the student prepares for a bar skill.</p>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Encouragement Clip #3</strong></h5>
                    <p>A third, different example of a coach giving a fist bump for encouragement before a challenging skill.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">3</div>
            <div className="video-content">
              <h4>✅ Category 3: The "Success" Celebration (3 Clips Total)</h4>
              <div className="video-badge">🎉 Shared Joy</div>
              
              <div className="scene-description">
                <h5>Explanation:</h5>
                <p>This category captures the shared joy of a successful breakthrough. Each clip should show a student successfully nailing a skill, followed immediately by a big, authentic celebration with their coach or team.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Celebration Clip #1</strong></h5>
                    <p>A student sticks a skill, followed by an excited double high-five from the coach.</p>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Celebration Clip #2</strong></h5>
                    <p>A student completes a skill, and the whole class in the background cheers.</p>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Celebration Clip #3</strong></h5>
                    <p>A third, different example of a successful skill followed by a genuine, joyful celebration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🙌</span>
      </div>

      <GymSelector postType="multiple-videos" />

      <div className="back-to-top-container">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top-btn">
          ⬆️ Back to Top
        </button>
      </div>
    </div>
  );
}