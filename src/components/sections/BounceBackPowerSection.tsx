import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BounceBackPowerSection() {
  const checklistItems = [
    { id: 'wobble-save', label: 'Video 1: The Wobble & Save', type: 'video' as const },
    { id: 'refocus-moment', label: 'Video 2: The Re-Focus Moment', type: 'video' as const },
    { id: 'praise-recovery', label: 'Video 3: The Praise for Recovery', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        📌 POST #3: Bounce-Back Power
        <ContentBadge type="video" label="VIDEO REEL | 3 CLIPS" />
      </h1>

      <div className="content-section">
        <h3>📅 August Content</h3>
        <p><strong>🎨 Theme:</strong> Gymnastics builds resilience in real time.</p>
        <p><strong>🖼️ Format:</strong> Video Reel (3 short clips edited together)</p>
        <p><strong>⏱️ Final Video Length:</strong> Approximately 10–15 seconds</p>
      </div>

      <div className="desc">
        <h3>🎯 Concept & Goal</h3>
        <p>
          This post captures the powerful, teachable moment after a mistake. We're showing parents that we don't just coach skills; we coach resilience. By capturing the process of a wobble, a refocus, and a proud recovery, we're communicating that gymnastics builds the emotional strength kids need to handle challenges both in and out of the gym.
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Your Task</h3>
        <p>Please capture three separate, short video clips. Your goal is to capture these moments authentically during practice. If you can't, use the "Direct Like a Pro" scripts below to help stage the moments naturally.</p>
      </div>

      <UploadChecklist items={checklistItems} section="bounce-back-power" />

      <div className="content-section">
        <h3>🔽 Reel Shot List & Instructions</h3>

        <div className="balance-videos">
          <div className="balance-video-item">
            <div className="video-number">1</div>
            <div className="video-content">
              <h4>✅ Video 1: The Wobble & Save</h4>
              <div className="video-badge">⏱️ ~5–10 seconds</div>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>A gymnast performing a skill (e.g., beam cartwheel, handstand) where they visibly wobble or slip, but fight to regain control and finish the skill with strength.</p>
                
                <h5>📌 Checklist:</h5>
                <ul>
                  <li>The mistake and the successful recovery must both be visible</li>
                  <li>The child's face should show focus and determination, not panic</li>
                </ul>
                
                <h5>🗣️ Direct Like a Pro:</h5>
                <div className="example-box">
                  "Can you try that skill again? This time, if you feel a little wobbly, adjust so fast like you normally would and keep going. I want to see how you save it!"
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">2</div>
            <div className="video-content">
              <h4>✅ Video 2: The Re-Focus Moment</h4>
              <div className="video-badge">⏱️ ~3–5 seconds</div>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>A quiet, authentic shot of a child preparing for their next turn after an imperfect attempt (e.g., chalking hands, taking a deep breath).</p>
                
                <h5>📌 Checklist:</h5>
                <ul>
                  <li>The energy of the shot should be calm and determined, not defeated</li>
                  <li>This is a quiet, thoughtful "reset" moment</li>
                </ul>
                
                <h5>🗣️ Direct Like a Pro:</h5>
                <div className="example-box">
                  "Okay, for this next shot, just get ready to go again like you normally would. Show me your game face!"
                </div>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">3</div>
            <div className="video-content">
              <h4>✅ Video 3: The Praise for Recovery</h4>
              <div className="video-badge">⏱️ ~3–5 seconds</div>
              
              <div className="scene-description">
                <h5>🎯 What to Capture:</h5>
                <p>A coach giving a genuine, positive reaction that praises the effort and recovery.</p>
                
                <h5>📌 Checklist:</h5>
                <ul>
                  <li>Think high-five, fist bump, a class cheering or chanting for them, or a proud nod</li>
                  <li>The connection between coach and child should feel authentic and supportive</li>
                </ul>
                
                <h5>🗣️ Direct Like a Pro:</h5>
                <div className="example-box">
                  "Perfect! Now give them that celebration you always do when someone nails a comeback!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tips-section">
        <h3>💡 Pro Tips for Authentic Capture</h3>
        <ul>
          <li><strong>Timing is everything:</strong> Keep your camera ready during regular practice - the best moments happen naturally</li>
          <li><strong>Focus on emotions:</strong> The facial expressions and body language tell the resilience story</li>
          <li><strong>Coach involvement:</strong> Make sure the supportive coaching interaction feels genuine and celebratory</li>
          <li><strong>Quality over perfection:</strong> A slightly imperfect but authentic moment is better than a staged perfect one</li>
        </ul>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">💪</span>
      </div>

      <GymSelector postType="balance-videos" />
    </div>
  );
}