import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function PencilGripStrengthSection() {
  const checklistItems = [
    { id: 'overgrip-full', label: 'Overgrip – Full Shot', type: 'photo' as const },
    { id: 'overgrip-closeup', label: 'Overgrip – Close-Up', type: 'photo' as const },
    { id: 'reverse-full', label: 'Reverse Grip – Full Shot', type: 'photo' as const },
    { id: 'reverse-closeup', label: 'Reverse Grip – Close-Up', type: 'photo' as const },
    { id: 'mixed-full', label: 'Mixed Grip – Full Shot', type: 'photo' as const },
    { id: 'mixed-closeup', label: 'Mixed Grip – Close-Up', type: 'photo' as const },
    { id: 'group-hanging', label: 'Group/Class Hanging', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        POST #2: PENCIL GRIP STRENGTH FROM BARS
        <ContentBadge type="photo" label="PHOTO Collage | 7 PHOTOS" />
      </h1>

      <div className="content-section">
        <h3>Friday, August 8</h3>
      </div>

      <div className="desc">
        <h3>🎯 Post Visual:</h3>
        <p>
          We're showing how grip strength from bar work sets the foundation for pencil control and neat handwriting. By visually linking overgrip, reverse grip, and mixed grip to hand and finger strength, we reinforce how gymnastics primes writing readiness.
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Visual Capture Instructions</h3>
        <p><strong>Photo Count:</strong> Take 7 total images in square (1:1) format</p>
        <p><strong>Grip Coverage:</strong> For each grip (Overgrip, Reverse Grip, Mixed Grip):</p>
        <ul>
          <li>📷 <strong>Wide Shot:</strong> Full or upper body hanging from the bar</li>
          <li>✋ <strong>Close-Up:</strong> Tight crop on hands and fingers gripping the bar</li>
        </ul>
        <p><strong>Lighting & Angles:</strong> Use clean, well-lit shots to emphasize finger placement and hand activation</p>
        <p><strong>Bonus Photo:</strong> One vibrant group/class photo with kids hanging together — any mix of grips works</p>
        <p>🌟 Aim for energy, effort, and visible joy</p>
      </div>

      <UploadChecklist items={checklistItems} section="pencil-grip-strength" />

      <div className="content-section">
        <h3>🎥 UPLOAD THESE 7 PHOTOS:</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>Overgrip – Full Shot</h4>
            <p>Full shot of kiddo hanging in standard overgrip. Big smile! Think of creative angles.</p>
          </div>

          <div className="upload-item">
            <h4>Overgrip – Close-Up</h4>
            <p>Zoom in on the hands to show the grip.</p>
          </div>

          <div className="upload-item">
            <h4>Reverse Grip – Full Shot</h4>
            <p>Full shot of kiddo hanging in reverse grip (palms facing them). Big smile! Think of creative angles.</p>
          </div>

          <div className="upload-item">
            <h4>Reverse Grip – Close-Up</h4>
            <p>Zoom in on the hands to show the grip.</p>
          </div>

          <div className="upload-item">
            <h4>Mixed Grip – Full Shot</h4>
            <p>Full shot of kiddo hanging in mixed grip (one over, one under). Big smile! Think of creative angles.</p>
          </div>

          <div className="upload-item">
            <h4>Mixed Grip – Close-Up</h4>
            <p>Zoom in on the hands to show the contrast in grip.</p>
          </div>

          <div className="upload-item">
            <h4>Group/Class Hanging</h4>
            <p>Multiple kids hanging from bars together — mix of grips is fine. Focus on fun, teamwork, and effort.</p>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">💪</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}