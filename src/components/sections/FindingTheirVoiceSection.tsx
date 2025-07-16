import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function FindingTheirVoiceSection() {
  const checklistItems = [
    { id: 'quiet-start', label: 'Photo 1: The Quiet Start', type: 'photo' as const },
    { id: 'gentle-invitation', label: 'Photo 2: The Gentle Invitation', type: 'photo' as const },
    { id: 'first-tries', label: 'Photo 3: First Tries', type: 'photo' as const },
    { id: 'growing-confidence', label: 'Photo 4: The Growing Confidence', type: 'photo' as const },
    { id: 'triumph-belonging', label: 'Photo 5: The Triumph & Belonging', type: 'photo' as const },
    { id: 'final-salute', label: 'Photo 6: The Final Salute (Centerpiece)', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        You don't need to be the loudest kid in the gym to have the strongest voice.
        <ContentBadge type="photo" label="PHOTO COLLAGE | 6 PHOTOS" />
      </h1>

      <div className="content-section">
        <h3>📅 August Content</h3>
      </div>

      <div className="desc">
        <h3>🎯 Post Visual</h3>
        <p>
          This post tells the visual story of how a quieter kiddo finds their strength and sense of belonging at the gym. Using a photo collage, we're showcasing the journey from quiet observation to triumphant, celebrated achievement.
        </p>
        <p>
          <strong>The message for parents is powerful: "You don't need to be the loudest kid in the gym to have the strongest voice."</strong>
        </p>
      </div>

      <div className="requirements">
        <h3>📌 Content Notes</h3>
        <p>This is a creative, "free rein" post. The goal is to capture the feeling of the story. The examples below are just ideas to spark your creativity.</p>
        <ul>
          <li>🖼️ <strong>Capture 6 photos in SQUARE (1:1) aspect ratio</strong></li>
          <li>☀️ <strong>Prioritize consistent, clean lighting across all photos</strong></li>
          <li>✅ <strong>Submit post-ready images</strong> — I will handle all the collage creation and text overlays in Canva</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="finding-their-voice" />

      <div className="content-section">
        <h3>🎥 UPLOAD 6 PHOTOS THAT TELL THIS STORY:</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>Photo 1: The Quiet Start</h4>
            <div className="content-type-badge photo-badge">🤫 The Beginning</div>
            <p><strong>What to capture:</strong> Capture a single moment that feels shy. The goal is to show the beginning of the journey.</p>
            <p><strong>Ideas:</strong></p>
            <ul>
              <li>A kiddo looking through the window from the lobby into the gym</li>
              <li>Hesitating at the door before entering the main gym floor</li>
              <li>Sitting quietly on a bench putting on their shoes while other kids are already playing</li>
              <li>Watching a class from the sidelines with a thoughtful expression</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>Photo 2: The Gentle Invitation</h4>
            <div className="content-type-badge photo-badge">🤝 The Connection</div>
            <p><strong>What to capture:</strong> Show a moment of connection where someone reaches out. This is the turning point.</p>
            <p><strong>Ideas:</strong></p>
            <ul>
              <li>A coach kneeling down to the student's level to talk to them one-on-one</li>
              <li>Another kiddo reaching out a hand to help them up or invite them to join</li>
              <li>A simple, reassuring smile or thumbs-up from a coach or parent across the room</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>Photo 3: First Tries</h4>
            <div className="content-type-badge photo-badge">💪 Taking Action</div>
            <p><strong>What to capture:</strong> Giving it a try.</p>
            <p><strong>Ideas:</strong></p>
            <ul>
              <li>A close-up of their foot stepping onto the beam for the first time</li>
              <li>A tight shot of their hands gripping the bar before a swing</li>
              <li>The moment they join the back of the line for warm-ups</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>Photo 4: The Growing Confidence</h4>
            <div className="content-type-badge photo-badge">🌱 Finding Their Footing</div>
            <p><strong>What to capture:</strong> Show them in their element, finding their footing. The shyness is fading, replaced by focus.</p>
            <p><strong>Ideas:</strong></p>
            <ul>
              <li>Playing and interacting in a warm-up game with a partner</li>
              <li>Playing a game with a group and smiling</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>Photo 5: The Triumph & Belonging</h4>
            <div className="content-type-badge photo-badge">🏆 The Big Payoff</div>
            <p><strong>What to capture:</strong> The big payoff moment.</p>
            <p><strong>Ideas:</strong></p>
            <ul>
              <li>Nailing a skill while the rest of the class cheers in the background</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>Photo 6: The Final Salute (The Centerpiece)</h4>
            <div className="content-type-badge photo-badge">🙋‍♀️ The Focal Point</div>
            <p><strong>What to capture:</strong> A single, powerful shot for the middle of the collage.</p>
            <p><strong>Description:</strong> A strong, confident salute pose. The student should look proud and centered. This image will be the focal point of the entire collage.</p>
          </div>
        </div>
      </div>

      <div className="tips-section">
        <h3>💡 Creative Tips for Storytelling</h3>
        <ul>
          <li><strong>Focus on emotions:</strong> The facial expressions and body language tell the story more than the specific activities</li>
          <li><strong>Consistent lighting:</strong> Try to maintain similar lighting conditions across all 6 photos for a cohesive collage</li>
          <li><strong>Natural moments:</strong> The best shots happen when kids aren't posing - capture authentic interactions</li>
          <li><strong>The journey matters:</strong> Each photo should feel like a natural progression from shy to confident</li>
        </ul>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🗣️</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}