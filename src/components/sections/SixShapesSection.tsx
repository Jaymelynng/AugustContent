import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function SixShapesSection() {
  const checklistItems = [
    { id: 'straight-body', label: 'Slide 1: Straight Body', type: 'photo' as const },
    { id: 'hollow-body', label: 'Slide 2: Hollow Body', type: 'photo' as const },
    { id: 'arch-position', label: 'Slide 3: Arch Position', type: 'photo' as const },
    { id: 'tuck-shape', label: 'Slide 4: Tuck Shape', type: 'photo' as const },
    { id: 'pike-shape', label: 'Slide 5: Pike Shape', type: 'photo' as const },
    { id: 'straddle-shape', label: 'Slide 6: Straddle Shape', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        THE 6 SHAPES THAT BUILD EVERY GYMNAST
        <ContentBadge type="photo" label="PHOTO CAROUSEL | 6 PHOTOS" />
      </h1>

      <div className="content-section">
        <h3>📅 Post Title: THE 6 SHAPES THAT BUILD EVERY GYMNAST</h3>
        <p><strong>🎨 Theme:</strong> Mastering the basics: The simple shapes that form the foundation of every skill.</p>
        <p><strong>🖼️ Format:</strong> Photo Carousel — Seven slides: one title slide, plus six shape comparisons.</p>
      </div>

      <div className="desc">
        <h3>🎯 Concept & Goal</h3>
        <p>
          This post educates parents on the six foundational body shapes in gymnastics. Each slide will feature a side-by-side comparison:
        </p>
        <ul>
          <li><strong>Left:</strong> A gymnast demonstrating the basic shape</li>
          <li><strong>Right:</strong> An advanced skill performed by a high-level gymnast that relies on that same shape</li>
        </ul>
        <p>
          <strong>Goal:</strong> Build trust by showing our systematic approach — and helping parents understand the why behind fundamental drills.
        </p>
      </div>

      <div className="requirements">
        <h3>🔥 Jayme's Notes (Strategy & Copy)</h3>
        <p><strong>Data Point:</strong> Comparison-style carousels are highly effective. They create "Aha!" moments that increase post saves and boost educational engagement.</p>
        <p><strong>Data Point:</strong> Comparison-style - goal is to create "Aha!" moments that increase interest and boost educational engagement.</p>
        
        <p><strong>Search Data / Google Trends:</strong></p>
        <ul>
          <li><strong>Primary keyword:</strong> gymnastics basics</li>
          <li><strong>Monthly search volume:</strong> about 12,000</li>
          <li><strong>Trend insight:</strong> Spikes during January and August–September, when parents are searching during enrollment windows.</li>
        </ul>
        
        <p><strong>Hook Idea:</strong> "What's the secret ingredient in almost every gymnastics skill? One of these 6 shapes."</p>
        
        <p><strong>Caption Idea:</strong> "Why do we obsess over the brave basics? Because every advanced skill is built on a strong foundational shape. From handstands to dismounts — everything starts here. Swipe to see the blueprint in action!" <strong>Hashtags:</strong> #BraveBasics #GymnasticsFoundations</p>
        
        <p><strong>Editing Notes:</strong> Slides two through seven will use a side-by-side graphic format:</p>
        <ul>
          <li><strong>Left:</strong> "The Foundational Shape"</li>
          <li><strong>Right:</strong> "The Advanced Skill"</li>
          <li><strong>Overlay Text:</strong> "Same Shape, Same Power"</li>
        </ul>
      </div>

      <div className="requirements">
        <h3>🎯 What to Capture</h3>
        <p>Six clean, technically strong photos of a gymnast holding each of the six foundational shapes listed below. Jayme will create the title slide and source the advanced skill photos to pair with each shape.</p>
      </div>

      <UploadChecklist items={checklistItems} section="six-shapes" />

      <div className="content-section">
        <h3>🔽️ Photo Series Instructions</h3>

        <div className="upload-details">
          <div className="upload-item">
            <h4>🟩 Slide 1: Straight Body</h4>
            <div className="content-type-badge photo-badge">📏 Foundation Shape</div>
            
            <p><strong>Photo to Capture:</strong> A gymnast in a straight-body handstand against a wall, or standing tall in aligned posture.</p>
            
            <p><strong>Technique Check:</strong></p>
            <ul>
              <li>Full-body line from wrists to toes</li>
              <li>Arms by ears</li>
              <li>Ribs tucked</li>
              <li>Hips stacked</li>
              <li>Legs tight and straight</li>
              <li>Head neutral</li>
            </ul>
            
            <p><strong>Will Be Paired With:</strong> An advanced skill that uses this shape.</p>
            <div className="example-box">
              <strong>Example/idea:</strong> Freestanding Handstand, Roundoff Entry, Layout Vault
            </div>
          </div>

          <div className="upload-item">
            <h4>🟪 Slide 2: Hollow Body</h4>
            <div className="content-type-badge photo-badge">🌙 Foundation Shape</div>
            
            <p><strong>Photo to Capture:</strong> Side-profile of a gymnast holding a strong hollow shape on the floor.</p>
            
            <p><strong>Technique Check:</strong></p>
            <ul>
              <li>Slightly rounded back</li>
              <li>Ribs down</li>
              <li>Bellybutton pulled to spine</li>
              <li>Legs tight and straight</li>
              <li>Arms by ears or at sides — not grabbing legs</li>
              <li>Head neutral</li>
            </ul>
            
            <p><strong>Will Be Paired With:</strong> An advanced skill that uses this shape.</p>
            <div className="example-box">
              <strong>Example/idea:</strong> Double Layout, Peak of the Backswing or Top of a Giant
            </div>
          </div>

          <div className="upload-item">
            <h4>🟨 Slide 3: Arch Position</h4>
            <div className="content-type-badge photo-badge">🌈 Foundation Shape</div>
            
            <p><strong>Photo to Capture:</strong> Side-profile of a gymnast holding a clean arch hold</p>
            
            <p><strong>Technique Check:</strong></p>
            <ul>
              <li>Chest lifted</li>
              <li>Thighs off the ground</li>
              <li>Legs together and straight</li>
              <li>Arms by ears</li>
              <li>Feet pointed</li>
              <li>Balanced curve from shoulders to hips</li>
              <li>Head neutral</li>
            </ul>
            
            <p><strong>Will Be Paired With:</strong> An advanced skill that uses this shape.</p>
            <div className="example-box">
              <strong>Example:</strong> Back Handspring, Tap Swing
            </div>
          </div>

          <div className="upload-item">
            <h4>🟦 Slide 4: Tuck Shape</h4>
            <div className="content-type-badge photo-badge">🔵 Foundation Shape</div>
            
            <p><strong>Photo to Capture:</strong> A gymnast seated in a tight tuck position, knees to chest.</p>
            
            <p><strong>Technique Check:</strong></p>
            <ul>
              <li>Knees pulled tightly in</li>
              <li>Feet together</li>
              <li>Chin tucked</li>
              <li>Hands around shins</li>
              <li>Upright and compact</li>
            </ul>
            
            <p><strong>Will Be Paired With:</strong> An advanced skill that uses this shape.</p>
            <div className="example-box">
              <strong>Example/idea:</strong> front/back salto
            </div>
          </div>

          <div className="upload-item">
            <h4>🟧 Slide 5: Pike Shape</h4>
            <div className="content-type-badge photo-badge">📐 Foundation Shape</div>
            
            <p><strong>Photo to Capture:</strong> A gymnast performing a clean pike stretch — either seated or standing.</p>
            
            <p><strong>Technique Check:</strong></p>
            <ul>
              <li>Legs straight and together</li>
              <li>Knees flat on the floor</li>
              <li>Toes pointed</li>
              <li><strong>If in a forward stretch:</strong> arms should be beside the legs on the floor — not grabbing — and reaching past the toes</li>
              <li><strong>If sitting upright:</strong> arms should stretch out to the sides with a flat back</li>
              <li>Hips should form a clear 90-degree angle</li>
            </ul>
            
            <p><strong>Will Be Paired With:</strong> An advanced skill that uses this shape.</p>
            <div className="example-box">
              <strong>Example/idea:</strong> Toe-On, Piked Tkatchev, Double Pike
            </div>
          </div>

          <div className="upload-item">
            <h4>🔴 Slide 6: Straddle Shape</h4>
            <div className="content-type-badge photo-badge">⚠️ Foundation Shape</div>
            
            <p><strong>Photo to Capture:</strong> A gymnast in a clean straddle sit (upright position)</p>
            <p><strong>Angle:</strong> 75 to 90 degrees from the side — no front shots for obvious reasons.</p>
            
            <p><strong>Technique Check:</strong></p>
            <ul>
              <li>Legs turned out — knees and toes pointed up</li>
              <li>Sitting tall with a straight back</li>
              <li>Arms out to the sides reaching for toes</li>
              <li>The gymnast should not be leaning forward or in a pancake stretch</li>
            </ul>
            
            <div className="important-warning">
              <span className="warning-icon">⚠️</span>
              <span className="warning-text">
                <strong>Safety Note:</strong> Side View Only — Never shoot from the front or any angle that could be inappropriate. The gymnast should be sitting upright, not leaning forward.
              </span>
            </div>
            
            <p><strong>Will Be Paired With:</strong> An advanced skill that uses this shape.</p>
            <div className="example-box">
              <strong>Example/idea:</strong> Straddle Jump, Straddle Tkatchev (release over bar), Stalder, Straddle Press Handstand
            </div>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🏗️</span>
      </div>

      <GymSelector postType="multiple-photos" />

      <div className="back-to-top-container">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top-btn">
          ⬆️ Back to Top
        </button>
      </div>
    </div>
  );
}