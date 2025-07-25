import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function ProgressionPyramidSection() {
  const checklistItems = [
    { id: 'tabletop-shape', label: 'Clip 1: Tabletop Shape', type: 'video' as const },
    { id: 'elevated-bridge-pushup', label: 'Clip 2A: The Elevated Bridge (Push-up)', type: 'video' as const },
    { id: 'elevated-bridge-rockers', label: 'Clip 2B: The Elevated Bridge (Rockers)', type: 'video' as const },
    { id: 'knee-bridge-wall', label: 'Clip 3A: The Knee Bridge (Wall Prep)', type: 'video' as const },
    { id: 'knee-bridge-full', label: 'Clip 3B: The Knee Bridge (Full Skill)', type: 'video' as const },
    { id: 'cheese-mat-backbend', label: 'Clip 4A: Cheese Mat Backbend (Shape)', type: 'video' as const },
    { id: 'cheese-mat-rockers', label: 'Clip 4B: Cheese Mat Backbend (Rockers)', type: 'video' as const },
    { id: 'standing-backbend-vertical', label: 'Clip 5: Standing Backbend to Vertical', type: 'video' as const },
    { id: 'independent-back-walkover', label: 'Clip 6: Independent Back Walkover', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        The Progression Pyramid Reel
        <ContentBadge type="video" label="CINEMATIC REEL | 6 CLIPS" />
      </h1>

      <div className="content-section">
        <h3>📅 Post Title: The Progression Pyramid</h3>
        <p><strong>🎨 Theme:</strong> We don't rush success. We build it right, with expert guidance at every step.</p>
        <p><strong>🖼️ Format:</strong> Cinematic Reel</p>
      </div>

      <div className="desc">
        <h3>🎯 Concept & Goal</h3>
        <p>
          This Reel showcases our methodical coaching by breaking down the back walkover into a detailed progression. The goal is to build trust with parents by demonstrating our expert-level attention to technical detail and the safe, step-by-step process that builds complex skills.
        </p>
      </div>

      <div className="requirements">
        <h3>🔥 Jayme's Notes (Strategy & Copy)</h3>
        <p>A BWO isn't one big skill. It's a series of small, teachable wins stacked together.</p>
        
        <p><strong>Data Point:</strong> Videos with clear, step-by-step progressions are very "savable" and show coaching expertise.</p>
        <p>"The Progression Pyramid" and "The 5 Shapes That Build Every Gymnast" are designed to highlight this deep foundational knowledge.</p>
        <p><strong>Editing Note:</strong> Clips for Step 2, Step 3, and Step 4 will be edited to appear side-by-side in the final Reel to show direct micro-progressions.</p>
        
        <p><strong>Hook Idea:</strong> "How is a back walkover built? It starts with the smallest, safest steps."</p>
        
        <p><strong>Caption Idea:</strong> "Every big skill is a journey of small, mindful steps. Here's our path to the back walkover, where we build the foundation, the strength, and the confidence needed for success. #ProgressionPyramid #BackWalkover #GymnasticsTechnique"</p>
      </div>

      <UploadChecklist items={checklistItems} section="progression-pyramid" />

      <div className="content-section">
        <h3>🔽 Reel Shot List</h3>

        <div className="balance-videos">
          <div className="balance-video-item">
            <div className="video-number">1</div>
            <div className="video-content">
              <h4>✅ Clip 1: Tabletop Shape</h4>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>A child holding the foundational Tabletop learning position.</p>
                
                <h5>📌 Checklist:</h5>
                <ul>
                  <li><strong>Technique Cues:</strong> Correct foundational shape is shown.</li>
                  <li><strong>Coach's Role (Optional):</strong> A coach can be in the frame pointing to key positions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">2</div>
            <div className="video-content">
              <h4>✅ Clip 2: The Elevated Bridge (Push-up vs. Rockers)</h4>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>Two separate clips for a side-by-side edit.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Clip 2A (The Push-Up)</strong></h5>
                    <p><strong>What to Capture:</strong> A child pushing up into a bridge on a panel mat.</p>
                    <p><strong>📌 Checklist:</strong></p>
                    <ul>
                      <li><strong>Technique Cues:</strong> Feet straight, elbows in by ears, and both hands and feet stay put without adjustments during the push-up.</li>
                      <li><strong>Coach's Role (Optional):</strong> Pointing out corrections.</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Clip 2B (The Rockers)</strong></h5>
                    <p><strong>What to Capture:</strong> The child is already in the bridge and rocks three times ("Rock one, rock two, rock three"), pushing their armpits over their wrists.</p>
                    <p><strong>📌 Checklist:</strong></p>
                    <ul>
                      <li><strong>Technique Cues:</strong> Feet and hands stay in one place ("no ants in the pants"); head stays neutral (avoid pulling chin to chest).</li>
                      <li><strong>Coach's Role (Optional):</strong> Can be holding a target or their hand as a visual cue of how far to rock.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">3</div>
            <div className="video-content">
              <h4>✅ Clip 3: The Knee Bridge (Wall Prep vs. Full Skill)</h4>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>Two separate clips for a side-by-side edit.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Clip 3A (The Wall Prep)</strong></h5>
                    <p><strong>What to Capture:</strong> A child pushes hips forward, reaches back to a wall, and returns.</p>
                    <p><strong>📌 Checklist:</strong></p>
                    <ul>
                      <li><strong>Technique Cues:</strong> Arms squeezing by ears, body moves as one unit, and head remains neutral as hips rock forward.</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Clip 3B (The Full Knee Bridge)</strong></h5>
                    <p><strong>What to Capture:</strong> The child performs a full knee bridge to the floor and back up.</p>
                    <p><strong>📌 Checklist:</strong></p>
                    <ul>
                      <li><strong>Technique Cues:</strong> Arms stay by ears through the entire motion and the body remains one unit.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">4</div>
            <div className="video-content">
              <h4>✅ Clip 4: Cheese Mat Backbend (Shape vs. Rockers)</h4>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>Two separate video clips shown on screen at the same time.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Clip 4A (The Backbend)</strong></h5>
                    <p><strong>What to Capture:</strong> A child performs a standing backbend onto the cheese mat.</p>
                    <p><strong>📌 Checklist:</strong></p>
                    <ul>
                      <li><strong>Technique Cues:</strong> Feet straight, arms by ears, and showing control by placing hands on the mat, not falling.</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'var(--main-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h5><strong>Clip 4B (The Rockers)</strong></h5>
                    <p><strong>What to Capture:</strong> A separate clip of the child, already in the bridge on the mat, performing "Rock one. Rock two, rock three".</p>
                    <p><strong>📌 Checklist:</strong></p>
                    <ul>
                      <li><strong>Technique Cues:</strong> Feet and hands remain stationary, controlled rocking motion.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">5</div>
            <div className="video-content">
              <h4>✅ Clip 5: Standing Backbend to Vertical</h4>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>A child performing a standing backbend on their own and lifting one leg up to a vertical position.</p>
                
                <h5>📌 Checklist:</h5>
                <ul>
                  <li><strong>Visual Cues:</strong> This shot should show increasing independence and control.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">6</div>
            <div className="video-content">
              <h4>✅ Clip 6: Independent Back Walkover</h4>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>The final clip of the child doing the full back walkover by themself.</p>
                
                <h5>📌 Checklist:</h5>
                <ul>
                  <li><strong>Visual Cues:</strong> This is the "payoff" shot. It should look confident, successful, and fluid. The finish can show a toe pointing forward, a leg up, or for a team gymnast, the three phases of leg above horizontal from split to needle to finish.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🏗️</span>
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