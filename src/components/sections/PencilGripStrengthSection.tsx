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
        <h3>📅 August Content</h3>
      </div>

      <div className="desc">
        <h3>🎯 Post Visual</h3>
        <p>
          In gymnastics, bar work isn't just about hanging tough — it's building the grip strength that directly translates to pencil holding, which improves handwriting. We're demonstrating how grip strength from bars improves by visually linking overgrip, reverse grip, and mixed grip.
        </p>
      </div>

      <div className="requirements">
        <h3>📸 Grip Photo Instructions</h3>
        <p><strong>Total Photos:</strong> 7 square (1:1) images</p>
        <p><strong>For Each Grip (Overgrip, Reverse Grip, Mixed Grip):</strong></p>
        <ul>
          <li><strong>1 wide shot</strong> — full or upper body hanging from the bar</li>
          <li><strong>1 close-up</strong> — hands and fingers gripping the bar</li>
        </ul>
        <p><strong>Bonus:</strong></p>
        <ul>
          <li><strong>1 fun group photo</strong> of the full class hanging from the bar (any grips)</li>
        </ul>
        <p><strong>Tips:</strong></p>
        <ul>
          <li>Use bright, clean lighting</li>
          <li>Keep angles consistent and clear</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="pencil-grip-strength" />

      <div className="content-section">
        <h3>🎥 UPLOAD THESE 7 PHOTOS:</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>Overgrip – Full Shot</h4>
            <p>Student hanging in standard overgrip</p>
          </div>

          <div className="upload-item">
            <h4>Overgrip – Close-Up</h4>
            <p>Tight shot of hands showing the grip</p>
          </div>

          <div className="upload-item">
            <h4>Reverse Grip – Full Shot</h4>
            <p>Student hanging in reverse grip</p>
          </div>

          <div className="upload-item">
            <h4>Reverse Grip – Close-Up</h4>
            <p>Tight shot of hands showing the grip</p>
          </div>

          <div className="upload-item">
            <h4>Mixed Grip – Full Shot</h4>
            <p>Student hanging in mixed grip (one over, one under)</p>
          </div>

          <div className="upload-item">
            <h4>Mixed Grip – Close-Up</h4>
            <p>Tight shot of hands showing the grip</p>
          </div>

          <div className="upload-item">
            <h4>Group Hanging – Full Class</h4>
            <p>A group/ full class hanging</p>
            <p>➝ Any grip combo is fine — focus on fun and effort</p>
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