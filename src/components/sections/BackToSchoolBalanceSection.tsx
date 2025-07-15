import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BackToSchoolBalanceSection() {
  const checklistItems = [
    { id: 'balance1', label: 'Photo 1: Class Walking Uphill on Beam – Book Balance Challenge', type: 'photo' as const },
    { id: 'balance2', label: 'Photo 2: Forward Shot – One-Foot Balance', type: 'photo' as const },
    { id: 'balance3', label: 'Photo 3: Game Example – Skill Through Play', type: 'photo' as const },
    { id: 'balance4', label: 'Photo 4: Final Balance Pose – "I\'m Ready" Moment', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        POST #1: Back to School, Back to Balance
        <ContentBadge type="photo" label="PHOTO CAROUSEL | 4 SQUARE PHOTOS" />
      </h1>

      <div className="content-section">
        <h3>📅 August Content</h3>
      </div>

      <div className="desc">
        <h3>🎯 Post Visual</h3>
        <p>
          Four square photos that showcase how beam balance builds confidence and directly translates to school readiness. Kids walking uphill on beams with books balanced on their heads create a powerful metaphor:
        </p>
        <p>
          <strong>"If they can conquer this level of balance and focus, they're ready for anything school throws at them."</strong>
        </p>
        <p>
          Each image tells a story — from concentration to play to composure — connecting gymnastics movement to real-world skills kids need for the classroom.
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Content Notes</h3>
        <ul>
          <li>🖼️ <strong>Take 4 photos in square (1:1) aspect ratio</strong></li>
          <li>☀️ <strong>Prioritize clean lighting and visible kid expressions</strong></li>
          <li>📐 <strong>Make posture and balance visually impressive</strong> — aim for the "Wow, my kid could do that" reaction</li>
          <li>⚙️ <strong>Check camera settings before shooting</strong> — pixel enhancement and rotation create delays</li>
          <li>✅ <strong>Submit post-ready images</strong> to streamline editing and carousel design</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="back-to-school-balance" />

      <div className="content-section">
        <h3>🎥 UPLOAD THESE 4 PHOTOS (With Storylines)</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>1. Uphill Beam Walk with Props – Multitasking & Sensory Control</h4>
            <div className="content-type-badge photo-badge">📚 Multitasking & Sensory Control</div>
            <ul>
              <li>Clean visual line of incline: Use a floor beam with a trapezoid or carpet beam to show the incline</li>
              <li>Balancing an object on their head with arms extended. If you have any school-themed props to balance, that would be fantastic!</li>
              <li>The shot should be wide from the side, showing the whole class and the beam on the incline</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>2. One-Foot Beam Balance – "Steady Focus"</h4>
            <div className="content-type-badge photo-badge">🦶 Steady Focus</div>
            <ul>
              <li>A kiddo balancing confidently on one foot</li>
              <li>Shot from the front to show narrow beam width and control</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>3. Beam Game Action – "Problem-Solving Play"</h4>
            <div className="content-type-badge photo-badge">🎯 Problem-Solving Play</div>
            <ul>
              <li>Capture a playful challenge like hula hoop balance or pit-throw game</li>
              <li>Look for excitement, thinking faces, or teamwork</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>4. Final Balance Pose – "I'm Ready" Moment</h4>
            <div className="content-type-badge photo-badge">🎒 I'm Ready</div>
            <ul>
              <li>"I've got this" energy</li>
              <li>A confident finish — lunge pose after landing, or strong jump with strong arms mid-air</li>
              <li>Big proud smile, arms strong or overhead</li>
              <li>Feels like a victory moment — "I nailed it"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">⚖️</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}