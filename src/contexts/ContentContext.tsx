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