import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ContentIdea {
  id: string;
  title: string;
  hook: string;
  visualIdea: string;
  mood: string;
}

const allContentIdeas: ContentIdea[] = [
  // Progress Ideas (inspired-by-progress)
  {
    id: 'handstand-progress',
    title: 'Handstand Progress Tracker',
    hook: 'Week 1: wall tap. Week 4: 6-sec freestand! Swipe to watch the glow-up.',
    visualIdea: 'Side-by-side comparison of then vs. now',
    mood: 'inspired-by-progress'
  },
  {
    id: 'scared-to-soaring',
    title: 'From Scared to Soaring',
    hook: '3 weeks ago she was scared to try. Today? Watch her FLY!',
    visualIdea: 'Before footage of hesitation, after footage of confidence',
    mood: 'inspired-by-progress'
  },
  {
    id: 'breakthrough-face',
    title: 'The Breakthrough Face',
    hook: 'This is what \'impossible\' becoming \'I did it\' looks like...',
    visualIdea: 'Close-up on a child\'s face during their breakthrough moment',
    mood: 'inspired-by-progress'
  },
  {
    id: 'persistence-payoff',
    title: 'The Persistence Payoff',
    hook: 'She tried 47 times. Number 48 was MAGIC!',
    visualIdea: 'Montage of attempts leading to success',
    mood: 'inspired-by-progress'
  },
  {
    id: 'birthday-shoutout',
    title: 'Community Birthday Shoutout',
    hook: '🎂 Happy Birthday to our [Month] stars! Drop them some love below.',
    visualIdea: 'Birthday gymnasts doing their favorite skills',
    mood: 'inspired-by-progress'
  },
  // Playful Ideas (ready-to-be-playful)
  {
    id: 'beam-balance-challenge',
    title: 'Beam Balance Challenge',
    hook: '30-second balance, zero wobbles—think you\'ve got it? Film, tag #BeamBrave.',
    visualIdea: 'Multiple kids attempting the challenge',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'flip-fail-friday',
    title: 'Flip Fail Friday',
    hook: 'Failure is part of the flip! Laugh, learn, repeat. Tag a friend who\'d try this.',
    visualIdea: 'Harmless tumbling mishaps + immediate laughter',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'cartwheel-counting',
    title: 'Cartwheel Counting Challenge',
    hook: 'How many cartwheels in 30 seconds? Let\'s find out!',
    visualIdea: 'Timer counting down while gymnast cartwheels',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'gymnastics-riddle',
    title: 'Gymnastics Riddle Game',
    hook: 'I flip without wings and roll without wheels. What am I?',
    visualIdea: 'Visual clues leading to the answer reveal',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'coach-vs-kids',
    title: 'Coach vs. Kids Challenge',
    hook: 'Think you can beat Coach Sarah in a handstand hold? Game on!',
    visualIdea: 'Side-by-side competition with timer',
    mood: 'ready-to-be-playful'
  },
  // Teaching Mode Ideas
  {
    id: 'pointed-toes-tip',
    title: 'Quick Tip: Pointed Toes',
    hook: 'Tiny tweak, huge impact! Point those toes for cleaner lines—save this for practice.',
    visualIdea: 'Before/after comparison of the same skill',
    mood: 'teaching-mode'
  },
  {
    id: 'hollow-holds-science',
    title: 'Why We Do Hollow Holds',
    hook: 'It\'s not just about abs! Strong core = sitting still in class. Here\'s the science...',
    visualIdea: 'Hollow hold demo with explanation overlay',
    mood: 'teaching-mode'
  },
  {
    id: 'balance-brain-power',
    title: 'Balance = Brain Power',
    hook: 'Every wobble on beam builds neural pathways for math problems. Seriously!',
    visualIdea: 'Balance beam work with brain development graphics',
    mood: 'teaching-mode'
  },
  {
    id: 'skill-building-blocks',
    title: 'Skill Building Blocks',
    hook: 'Why we master cartwheels before round-offs: gymnastics is like math!',
    visualIdea: 'Progression pyramid showing skill connections',
    mood: 'teaching-mode'
  },
  // Community Ideas
  {
    id: 'friendship-goals',
    title: 'Friendship Goals',
    hook: 'When your gym bestie helps you nail that skill! This is what teamwork looks like.',
    visualIdea: 'Kids supporting and cheering for each other',
    mood: 'community-vibes'
  },
  {
    id: 'alumni-visits',
    title: 'Alumni Visits',
    hook: '[Name] started here 10 years ago... now she\'s back teaching! Full circle moments.',
    visualIdea: 'Former student now helping current students',
    mood: 'community-vibes'
  },
  {
    id: 'gym-traditions',
    title: 'Gym Traditions',
    hook: 'Every Friday we do [tradition]. It started 5 years ago and now it\'s legend!',
    visualIdea: 'Special gym traditions in action',
    mood: 'community-vibes'
  },
  // Behind-the-Scenes Ideas
  {
    id: 'coach-spotlight',
    title: 'Coach Spotlight',
    hook: 'Meet Coach [Name]—[unique fact/skill]! Here\'s what makes them special...',
    visualIdea: 'Coach in action + personal moment',
    mood: 'curious-details'
  },
  {
    id: 'six-am-setup',
    title: '6 AM Setup Crew',
    hook: 'Before you arrive, we\'re already here making magic happen. 6 AM setup crew in action!',
    visualIdea: 'Early morning equipment setup',
    mood: 'curious-details'
  },
  {
    id: 'after-hours-reality',
    title: 'After Hours Reality',
    hook: 'After the last gymnast leaves... this is what happens to keep our gym spotless!',
    visualIdea: 'Closing and cleaning routines',
    mood: 'curious-details'
  }
];

const moodCategories: { [key: string]: { emoji: string; title: string } } = {
  'all': { emoji: '✨', title: 'Everything' },
  'inspired-by-progress': { emoji: '🌟', title: 'Progress Stories' },
  'ready-to-be-playful': { emoji: '🎪', title: 'Playful & Fun' },
  'teaching-mode': { emoji: '👨‍🏫', title: 'Educational' },
  'community-vibes': { emoji: '💫', title: 'Community' },
  'curious-details': { emoji: '🔥', title: 'Behind-the-Scenes' }
};

export function CreateYourOwnContentSection() {
  const [currentMood, setCurrentMood] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');
  const [filteredIdeas, setFilteredIdeas] = useState<ContentIdea[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const filtered = allContentIdeas.filter(idea => {
      const matchesMood = currentMood === 'all' || idea.mood === currentMood;
      const matchesSearch = currentSearch === '' ||
        idea.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        idea.hook.toLowerCase().includes(currentSearch.toLowerCase()) ||
        idea.visualIdea.toLowerCase().includes(currentSearch.toLowerCase());
      return matchesMood && matchesSearch;
    });
    setFilteredIdeas(filtered);
  }, [currentMood, currentSearch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCopyIdea = (idea: ContentIdea) => {
    const textToCopy = `${idea.title}\n\nThe idea: ${idea.hook}\n\nWhat to capture: ${idea.visualIdea}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(`✨ Nice choice! "${idea.title}" is ready to use. Make it your own!`);
    }).catch(() => {
      alert(`✨ Here's your idea: "${idea.title}"\n\nThe idea: ${idea.hook}\n\nWhat to capture: ${idea.visualIdea}\n\nMake it yours!`);
    });
  };

  const handleResetFilters = () => {
    setCurrentMood('all');
    setCurrentSearch('');
  };

  const getPillCount = (mood: string) => {
    if (mood === 'all') {
      return allContentIdeas.length;
    }
    return allContentIdeas.filter(idea => idea.mood === mood).length;
  };

  return (
    <div className="create-your-own-content-container">
      <h1>🎬 CREATE YOUR OWN CONTENT</h1>

      <div className="desc">
        <h3>🎯 Your Mission:</h3>
        <p>Create one 30–60 second Reel that feels authentic and meaningful. Show us the gym through your eyes—your voice, your experience, your style.</p>

        <h3>📌 Guidelines at a Glance</h3>
        <ul>
          <li><strong>Be Age Appropriate:</strong> Content should reflect positive and supportive values.</li>
          <li><strong>Highlight Your Gym:</strong> Your reel should showcase your gym community, culture, or uniqueness.</li>
          <li><strong>Be You:</strong> Personality matters most. Create something that feels true to you!</li>
        </ul>

        <h3>🗣️ Message from Jayme</h3>
        <p>
          <em>"For this final August post, there's no specific shot list. The most important thing is that IT comes from you. We want to see the gym through your eyes. Have fun with it, get creative, and share a story that you're passionate about. We can't wait to see what you create!"</em> —Jayme
        </p>
      </div>

      {/* Search & Filter Section */}
      <div className="inspiration-section">
        <h3>🤹‍♀️ Need Inspiration?</h3>
        <p className="inspiration-description">
          Browse by your current mood or search for anything that inspires you. 💡 <strong>Reminder:</strong> These are just starting points, not scripts. Use them as-is, tweak them, mix and match, or let them spark something completely different.
        </p>
        
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for anything that inspires you..."
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            className="search-input"
          />
          {currentSearch && (
            <button
              onClick={() => setCurrentSearch('')}
              className="search-clear-btn"
            >
              ✕
            </button>
          )}
        </div>

        {/* Mood Filter Pills */}
        <div className="mood-filter-pills">
          {Object.entries(moodCategories).map(([key, { emoji, title }]) => (
            <button
              key={key}
              onClick={() => setCurrentMood(key)}
              className={`mood-pill ${currentMood === key ? 'active' : ''}`}
            >
              <span className="mood-emoji">{emoji}</span>
              <span>{title}</span>
              <span className="mood-count">({getPillCount(key)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="results-header">
        <div>
          <h3>
            {currentMood === 'all'
              ? `✨ ${filteredIdeas.length} Ideas to Explore`
              : `${moodCategories[currentMood].emoji} ${filteredIdeas.length} ${moodCategories[currentMood].title} Ideas`}
          </h3>
          {currentSearch && (
            <p className="search-results-text">
              Found these for "{currentSearch}":
            </p>
          )}
        </div>
        {currentMood !== 'all' && (
          <button 
            onClick={() => setCurrentMood('all')}
            className="browse-all-btn"
          >
            ✨ Browse Everything
          </button>
        )}
      </div>

      {/* Ideas Grid */}
      {filteredIdeas.length > 0 ? (
        <div className="ideas-grid">
          {filteredIdeas.map(idea => {
            const category = moodCategories[idea.mood];
            return (
              <div 
                key={idea.id} 
                className="idea-card"
              >
                <div className="idea-card-header">
                  <span className="idea-emoji">
                    {category.emoji}
                  </span>
                  <h4 className="idea-title">
                    {idea.title}
                  </h4>
                </div>
                
                <div className="idea-content">
                  <div className="idea-hook">
                    <strong>The idea:</strong> "{idea.hook}"
                  </div>
                  <div className="idea-visual">
                    <strong>What to capture:</strong> {idea.visualIdea}
                  </div>
                </div>
                
                <div className="idea-action">
                  <button 
                    onClick={() => handleCopyIdea(idea)}
                    className="copy-idea-btn"
                  >
                    📋 Grab This Idea
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <h4>No matches this time</h4>
          <p className="no-results-text">
            Try a different filter or search term - or just browse everything!
          </p>
          <button 
            onClick={handleResetFilters}
            className="reset-filters-btn"
          >
            🔄 Start Fresh
          </button>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}