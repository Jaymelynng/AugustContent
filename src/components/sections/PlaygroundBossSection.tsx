import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function PlaygroundBossSection() {
  const checklistItems = [
    { id: 'ring-swing', label: 'Video 1: Ring Swing ➝ Monkey Bars', type: 'video' as const },
    { id: 'rope-climb', label: 'Video 2: Rope Climb ➝ Rock Wall', type: 'video' as const },
    { id: 'trampoline', label: 'Video 3: Trampoline ➝ Trampoline Park', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        🧗‍♂️ POST #4: Become A Boss On The Playground
        <ContentBadge type="video" label="VIDEO REEL | 3 VIDEOS" />
      </h1>

      <div className="content-section">
        <h3>📅 August Content</h3>
      </div>

      <div className="desc">
        <h3>🎯 Post Visual</h3>
        <p>
          A dynamic video reel showing how gymnastics translates to being a superstar on the playground. Each gym skill will mirror a playground movement:
        </p>
        <ul>
          <li><strong>Monkey Bars</strong></li>
          <li><strong>Rock Wall</strong></li>
          <li><strong>Trampoline Park</strong></li>
        </ul>
        <p>
          Each clip will momentarily freeze mid-motion to highlight how the gymnastics skill connects to real-world play. This gives parents a clear visual of how gymnastics builds practical strength, coordination, and confidence.
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Video Content to Capture</h3>
        <p>Each of the 3 videos should be:</p>
        <ul>
          <li><strong>15–20 seconds long</strong></li>
          <li><strong>Include multiple angles or shots</strong></li>
          <li><strong>Edited by you into one complete video clip</strong></li>
          <li><strong>No overlays needed</strong> — we'll add transitions and visuals later</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="playground-boss" />

      <div className="content-section">
        <h3>🎥 UPLOAD THESE 3 VIDEOS:</h3>

        <div className="balance-videos">
          <div className="balance-video-item">
            <div className="video-number">1</div>
            <div className="video-content">
              <h4>Ring Swing ➝ Monkey Bars</h4>
              <div className="video-badge">🐒 Monkey Bars Connection</div>
              
              <div className="scene-description">
                <h5>Gym Skill: Ring swing</h5>
                <p><strong>Playground Translation:</strong> Monkey bars</p>
                <p><strong>Video Length:</strong> 15–20 seconds (include multiple shots)</p>
                
                <p><strong>Description:</strong> Film a student swinging across the rings on your ninja course.</p>
                
                <p><strong>Alternative:</strong> No rings? Film a student hanging on one side of a bar. Have them let go with one hand, look under their armpit, turn and grab the bar facing the other direction, then repeat on the other side. (Think: basic blind change drill)</p>
                
                <p><strong>FYI:</strong> This clip will freeze briefly to highlight the monkey bar connection — you don't need to edit this, just so you get the idea.</p>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">2</div>
            <div className="video-content">
              <h4>Rope Climb ➝ Rock Wall</h4>
              <div className="video-badge">🧗 Rock Wall Connection</div>
              
              <div className="scene-description">
                <h5>Gym Skill: Rope climb</h5>
                <p><strong>Playground Translation:</strong> Rock wall</p>
                <p><strong>Video Length:</strong> 15–20 seconds (include multiple shots)</p>
                
                <p><strong>Description:</strong> Film students climbing the rope with proper form.</p>
                
                <p><strong>Alternative:</strong> If no rope is available, film kids doing pull-ups, assisted pull-ups, or chin-up holds. Show multiple kids and angles.</p>
                
                <p><strong>FYI:</strong> This clip will freeze briefly to highlight the rock wall connection — you don't need to edit this, just so you get the idea.</p>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">3</div>
            <div className="video-content">
              <h4>Trampoline ➝ Trampoline Park</h4>
              <div className="video-badge">🤸 Trampoline Park Connection</div>
              
              <div className="scene-description">
                <h5>Gym Skill: Trampoline or tumble track passes</h5>
                <p><strong>Playground Translation:</strong> Trampoline park</p>
                <p><strong>Video Length:</strong> 15–20 seconds (include multiple shots)</p>
                
                <p><strong>Description:</strong> Film students doing jumps, passes, or fun skills. Can be one child or a montage of several clips.</p>
                
                <p><strong>Alternative:</strong> If a full pass isn't possible, combine shorter clips of individual skills.</p>
                
                <p><strong>FYI:</strong> This clip will freeze briefly to highlight the trampoline park connection — you don't need to edit this, just so you get the idea.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🧗‍♂️</span>
      </div>

      <GymSelector postType="balance-videos" />
    </div>
  );
}