import React, { useState } from 'react';
import { Home, Camera, Video, Award, Users, Brain, FileText, Settings, Upload } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  // Home Base
  { id: 'intro', label: 'Welcome', icon: Home, category: 'home' },
  
  // Content Assignments
  { id: 'back-to-school-balance', label: 'Back to School Balance', icon: Camera, category: 'content' },
  { id: 'pencil-grip-strength', label: 'Pencil Grip Strength', icon: Camera, category: 'content' },
  { id: 'playground-boss', label: 'Become A Boss On The Playground', icon: Video, category: 'content' },
  { id: 'bounce-back-power', label: 'Bounce-Back Power', icon: Video, category: 'content' },
  { id: 'finding-their-voice', label: 'Finding Their Voice', icon: Camera, category: 'content' },
  { id: 'power-starts-here', label: 'Power Starts Here', icon: Award, category: 'content' },
  
  // Guides
  { id: 'guidelines', label: 'Guidelines', icon: FileText, category: 'guides' },
  { id: 'technical', label: 'Technical', icon: Settings, category: 'guides' },
  { id: 'submission', label: 'Submission', icon: Upload, category: 'guides' },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileVisible(!isMobileVisible);
  };

  const renderSection = (category: string, title: string, items: typeof navigationItems) => (
    <div className="nav-section">
      <div className="nav-section-title">{title}</div>
      {items
        .filter(item => item.category === category)
        .map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
    </div>
  );

  return (
    <>
      <button 
        className="mobile-nav-toggle"
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      
      <aside className={`sidebar ${isMobileVisible ? 'mobile-visible' : 'mobile-hidden'}`}>
      <div className="sidebar-header">
        <h2>August Content</h2>
      </div>
      
      <ul className="nav-list">
        {renderSection('home', 'Welcome', navigationItems)}
        {renderSection('content', 'Content', navigationItems)}
        {renderSection('guides', 'Guides', navigationItems)}
      </ul>
    </aside>
    </>
  );
}