import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContentMonth {
  id: string;
  name: string;
  year: number;
  month: number;
  title: string;
  subtitle: string;
  isActive: boolean;
  created_at: string;
  sections: ContentSection[];
}

interface ContentSection {
  id: string;
  order: number;
  title: string;
  type: 'video' | 'photo' | 'series';
  description: string;
  requirements: string[];
  items: ContentItem[];
}

interface ContentItem {
  id: string;
  label: string;
  type: 'video' | 'photo';
}

interface ContentContextType {
  currentMonth: ContentMonth | null;
  availableMonths: ContentMonth[];
  isLoading: boolean;
  switchToMonth: (monthId: string) => void;
  createNewMonth: (monthData: Partial<ContentMonth>) => Promise<void>;
  updateCurrentMonth: (updates: Partial<ContentMonth>) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Default August content structure
const defaultAugustContent: ContentMonth = {
  id: 'august-2025',
  name: 'august',
  year: 2025,
  month: 8,
  title: 'August Content Mission',
  subtitle: 'Back-to-School Content Strategy',
  isActive: true,
  created_at: new Date().toISOString(),
  sections: [
    {
      id: 'back-to-school-balance',
      order: 1,
      title: 'POST #1: Back to School Balance',
      type: 'photo',
      description: 'Create a 4-photo carousel demonstrating how beam balance builds school confidence.',
      requirements: ['Square (1:1) aspect ratio', 'School-themed props', 'High resolution', 'Camera-ready quality'],
      items: [
        { id: 'balance1', label: 'Photo 1: Uphill Challenge Walk', type: 'photo' },
        { id: 'balance2', label: 'Photo 2: Single-Foot Balance Mastery', type: 'photo' },
        { id: 'balance3', label: 'Photo 3: Skill-Building Game', type: 'photo' },
        { id: 'balance4', label: 'Photo 4: Creative School Connection', type: 'photo' }
      ]
    },
    {
      id: 'pencil-grip-strength',
      order: 2,
      title: 'POST #2: Pencil Grip Strength from Bars',
      type: 'photo',
      description: 'Create a 7-photo collage demonstrating how grip strength from bars builds handwriting readiness.',
      requirements: ['Square (1:1) aspect ratio', 'Clean, well-lit shots', 'Wide shots and close-ups', 'Energy and effort visible'],
      items: [
        { id: 'overgrip-full', label: 'Overgrip – Full Shot', type: 'photo' },
        { id: 'overgrip-closeup', label: 'Overgrip – Close-Up', type: 'photo' },
        { id: 'reverse-full', label: 'Reverse Grip – Full Shot', type: 'photo' },
        { id: 'reverse-closeup', label: 'Reverse Grip – Close-Up', type: 'photo' },
        { id: 'mixed-full', label: 'Mixed Grip – Full Shot', type: 'photo' },
        { id: 'mixed-closeup', label: 'Mixed Grip – Close-Up', type: 'photo' },
        { id: 'group-hanging', label: 'Group/Class Hanging', type: 'photo' }
      ]
    },
    {
      id: 'bounce-back-power',
      order: 3,
      title: 'POST #3: Bounce-Back Power',
      type: 'video',
      description: 'Create a 3-clip video reel showing how gymnastics builds resilience through wobbles, recovery, and coach support.',
      requirements: ['10-15 seconds total', 'Authentic moments during practice', 'Clear recovery visible', 'Supportive coaching interaction'],
      items: [
        { id: 'wobble-save', label: 'Video 1: The Wobble & Save', type: 'video' },
        { id: 'refocus-moment', label: 'Video 2: The Re-Focus Moment', type: 'video' },
        { id: 'praise-recovery', label: 'Video 3: The Praise for Recovery', type: 'video' }
      ]
    },
    {
      id: 'finding-their-voice',
      order: 4,
      title: 'You don\'t need to be the loudest kid in the gym to have the strongest voice.',
      type: 'photo',
      description: 'Create a 6-photo collage showing how a quieter child finds their strength and sense of belonging at the gym.',
      requirements: ['Square (1:1) aspect ratio', 'Consistent, clean lighting', 'Post-ready images', 'Story progression from quiet to confident'],
      items: [
        { id: 'quiet-start', label: 'Photo 1: The Quiet Start', type: 'photo' },
        { id: 'gentle-invitation', label: 'Photo 2: The Gentle Invitation', type: 'photo' },
        { id: 'first-tries', label: 'Photo 3: First Tries', type: 'photo' },
        { id: 'growing-confidence', label: 'Photo 4: The Growing Confidence', type: 'photo' },
        { id: 'triumph-belonging', label: 'Photo 5: The Triumph & Belonging', type: 'photo' },
        { id: 'final-salute', label: 'Photo 6: The Final Salute (Centerpiece)', type: 'photo' }
      ]
    },
    {
      id: 'power-starts-here',
      order: 5,
      title: 'Power Starts Here',
      type: 'series',
      description: 'Create a 2-photo + 1-video comparison showing the secret weapon behind a powerful roundoff: the mountain climber setup.',
      requirements: ['Same filming angle for all content', 'Clean, raw footage for editing', 'Clear correct vs incorrect positioning', 'Consistent camera position'],
      items: [
        { id: 'correct-mountain-climber', label: 'Photo 1: CORRECT Mountain Climber', type: 'photo' },
        { id: 'incorrect-mountain-climber', label: 'Photo 2: INCORRECT Mountain Climber', type: 'photo' },
        { id: 'roundoff-video', label: 'Video 1: The Roundoff', type: 'video' }
      ]
    },
    {
      id: 'progression-pyramid',
      order: 6,
      title: 'The Progression Pyramid Reel',
      type: 'video',
      description: 'Create a cinematic reel showcasing the methodical coaching approach by breaking down the back walkover into detailed progressions.',
      requirements: ['Cinematic reel format', 'Step-by-step progression', 'Expert coaching demonstration', 'Safe, methodical approach'],
      items: [
        { id: 'tabletop-shape', label: 'Clip 1: Tabletop Shape', type: 'video' },
        { id: 'elevated-bridge-pushup', label: 'Clip 2A: The Elevated Bridge (Push-up)', type: 'video' },
        { id: 'elevated-bridge-rockers', label: 'Clip 2B: The Elevated Bridge (Rockers)', type: 'video' },
        { id: 'knee-bridge-wall', label: 'Clip 3A: The Knee Bridge (Wall Prep)', type: 'video' },
        { id: 'knee-bridge-full', label: 'Clip 3B: The Knee Bridge (Full Skill)', type: 'video' },
        { id: 'cheese-mat-backbend', label: 'Clip 4A: Cheese Mat Backbend (Shape)', type: 'video' },
        { id: 'cheese-mat-rockers', label: 'Clip 4B: Cheese Mat Backbend (Rockers)', type: 'video' },
        { id: 'standing-backbend-vertical', label: 'Clip 5: Standing Backbend to Vertical', type: 'video' },
        { id: 'independent-back-walkover', label: 'Clip 6: Independent Back Walkover', type: 'video' }
      ]
    },
    {
      id: 'high-five-that-matters',
      order: 7,
      title: 'The High-Five That Matters',
      type: 'video',
      description: 'Create a fast-paced montage reel showcasing our coaching philosophy through nine distinct "skill-and-praise" moments.',
      requirements: ['Dynamic video reel format', 'Montage style', 'Nine separate short clips', 'Effort, encouragement, and celebration themes'],
      items: [
        { id: 'effort-clip-1', label: 'Effort Clip #1', type: 'video' },
        { id: 'effort-clip-2', label: 'Effort Clip #2', type: 'video' },
        { id: 'effort-clip-3', label: 'Effort Clip #3', type: 'video' },
        { id: 'encouragement-clip-1', label: 'Encouragement Clip #1', type: 'video' },
        { id: 'encouragement-clip-2', label: 'Encouragement Clip #2', type: 'video' },
        { id: 'encouragement-clip-3', label: 'Encouragement Clip #3', type: 'video' },
        { id: 'celebration-clip-1', label: 'Celebration Clip #1', type: 'video' },
        { id: 'celebration-clip-2', label: 'Celebration Clip #2', type: 'video' },
        { id: 'celebration-clip-3', label: 'Celebration Clip #3', type: 'video' }
      ]
    },
    {
      id: 'six-shapes',
      order: 8,
      title: 'THE 6 SHAPES THAT BUILD EVERY GYMNAST',
      type: 'photo',
      description: 'Create a 6-photo carousel showcasing the foundational body shapes that form the basis of every gymnastics skill.',
      requirements: ['Clean, technically strong photos', 'Side-profile shots for hollow and arch', 'Side view only for straddle (75-90 degrees)', 'Proper technique demonstration'],
      items: [
        { id: 'straight-body', label: 'Slide 1: Straight Body', type: 'photo' },
        { id: 'hollow-body', label: 'Slide 2: Hollow Body', type: 'photo' },
        { id: 'arch-position', label: 'Slide 3: Arch Position', type: 'photo' },
        { id: 'tuck-shape', label: 'Slide 4: Tuck Shape', type: 'photo' },
        { id: 'pike-shape', label: 'Slide 5: Pike Shape', type: 'photo' },
        { id: 'straddle-shape', label: 'Slide 6: Straddle Shape', type: 'photo' }
      ]
    },
    {
      id: 'create-your-own-content-post',
      order: 9,
      title: 'CREATE YOUR OWN CONTENT',
      type: 'video',
      description: 'Create one 30–60 second Reel that feels authentic and meaningful. Show us the gym through your eyes—your voice, your experience, your style.',
      requirements: ['30-60 seconds length', 'Age-appropriate content', 'Highlight your gym community/culture', 'Authentic and personal perspective'],
      items: [
        { id: 'custom-reel', label: 'Your Custom 30-60 Second Reel', type: 'video' }
      ]
    }
  ]
};

export function ContentProvider({ children }: { children: ReactNode }) {
  const [currentMonth] = useState<ContentMonth>(defaultAugustContent);
  const [availableMonths] = useState<ContentMonth[]>([defaultAugustContent]);
  const [isLoading] = useState(false);

  const switchToMonth = (monthId: string) => {
    // For now, we only have August content
    console.log('Switching to month:', monthId);
  };

  const createNewMonth = async (monthData: Partial<ContentMonth>) => {
    // For now, this is a no-op since we're keeping it simple
    console.log('Creating new month:', monthData);
  };

  const updateCurrentMonth = async (updates: Partial<ContentMonth>) => {
    // For now, this is a no-op since we're keeping it simple
    console.log('Updating current month:', updates);
  };

  return (
    <ContentContext.Provider value={{
      currentMonth,
      availableMonths,
      isLoading,
      switchToMonth,
      createNewMonth,
      updateCurrentMonth
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}