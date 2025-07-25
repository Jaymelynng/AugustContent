import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function PowerStartsHereSection() {
  const checklistItems = [
    { id: 'correct-mountain-climber', label: 'Photo 1: CORRECT Mountain Climber', type: 'photo' as const },
    { id: 'incorrect-mountain-climber', label: 'Photo 2: INCORRECT Mountain Climber', type: 'photo' as const },
    { id: 'roundoff-video', label: 'Video 1: The Roundoff', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        🎯 Power Starts Here
        <ContentBadge type="series" label="PHOTO + VIDEO | 2 PHOTOS, 1 VIDEO" />
      </h1>

      <div className="content-section">
        <h3>📅 August Content</h3>
      </div>

      <div className="desc">
        <h3>🎯 Post Visual</h3>
        <p>
          This post pulls back the curtain on the secret weapon behind a powerful roundoff: the 'mountain climber' setup. We will use a "right vs. wrong" comparison to show parents how one small change in shape can fuel an entirely different level of power, which I will edit after it's turned in. The goal is to create a mini-lesson that showcases our expert-level coaching.
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Content Notes</h3>
        <p>🎥 <strong>All three pieces of content (2 photos, 1 video) need to be filmed from the same place and angle.</strong> This is important so the comparison into the video works. If you can't film everything at once, set markers like tape on the floor to mark where the front and back foot positions are so we can maintain consistency.</p>
        
        <p>🛠️ <strong>The goal is to capture the clean, raw footage - I'll edit later on (adding arrows, angle lines, checkmarks, text overlays, etc.).</strong> I'll transform it into the final educational content piece.</p>
      </div>

      <UploadChecklist items={checklistItems} section="power-starts-here" />

      <div className="content-section">
        <h3>🎥 UPLOAD THESE 3 FILES:</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>1. Photo 1: The CORRECT Mountain Climber Position ✅</h4>
            <div className="content-type-badge photo-badge">✅ Correct Form</div>
            
            <p><strong>What to Capture:</strong></p>
            <ul>
              <li>✅ <strong>The Shape:</strong> Low and Loaded</li>
              <li>✅ <strong>The Knees:</strong> Both bent evenly, close to a 90-degree angle (≈90∘)</li>
              <li>✅ <strong>The Feeling:</strong> You should feel like a compressed spring or a slingshot pulled, ready to explode forward</li>
              <li><strong>Feet Straight:</strong> Not out to the side</li>
              <li><strong>Arms Straight by Ears:</strong> Arms straight, held tightly next to their ears</li>
              <li><strong>Looking Ahead:</strong> Eyes forward, head neutral</li>
              <li><strong>Knee Over Toe Alignment:</strong> From the side view</li>
            </ul>
            
            <div className="example-box">
              <strong>(bc I'm the why kid!)</strong> builds max energy from the ground up—think power loading zone or <strong>jump high, you have to sink down first.</strong> You can't get power from stiff, straight legs. This low, loaded position is the 'sinking down' that gathers all the energy from the floor needed for an explosive takeoff into the roundoff.
            </div>
          </div>

          <div className="upload-item">
            <h4>2. Photo 2: The INCORRECT Mountain Climber Position ❌</h4>
            <div className="content-type-badge photo-badge">❌ Incorrect Form</div>
            
            <p><strong>What to Capture:</strong></p>
            <ul>
              <li><strong>Hips sitting back or too high</strong></li>
              <li><strong>Uneven knee angles</strong> (one bent, one loosey goosey)</li>
              <li><strong>Front heel popped up or weight shifted back</strong></li>
              <li><strong>Arms bent or off alignment</strong> (not near ears)</li>
              <li><strong>Back leg straight</strong></li>
              <li><strong>Head dropped</strong></li>
            </ul>
            
            <div className="example-box">
              <strong>(bc I'm the why kid!)</strong> drains momentum—undercuts the roundoff and invites balance issues. Power leaks out instead of building up. (Like trying to shoot a rubber band that's already stretched out - no snap, no power!)
            </div>
          </div>

          <div className="upload-item">
            <h4>3. Video 1: The Roundoff</h4>
            <div className="content-type-badge video-badge">🎥 Power Demo</div>
            
            <p><strong>What to Capture:</strong></p>
            <ul>
              <li><strong>Roundoff take off directly from where the images were</strong> so I can edit together</li>
              <li><strong>To Show Power Direction (Bonus):</strong> If the athlete can bound backward out of the roundoff onto an 8-inch mat or rebound into a dramatic pike, that's even better. At minimum, they should show a few powerful backward bounds to prove the power is going in the right direction.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="requirements">
        <h3>🎯 The Bigger Message</h3>
        <p>
          This comparison shows parents the difference between <strong>power-building</strong> and <strong>power-leaking</strong> positions. One small shape change = entirely different level of performance. It's a perfect example of our expert coaching attention to detail.
        </p>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">⚡</span>
      </div>

      <GymSelector postType="mixed-content" />

      <div className="back-to-top-container">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top-btn">
          ⬆️ Back to Top
        </button>
      </div>
    </div>
  );
}