import React from 'react';
import { PDFGeneratorButton } from './PDFGeneratorButton';
import { IntroSection } from './sections/IntroSection';
import { BackToSchoolBalanceSection } from './sections/BackToSchoolBalanceSection';
import { PencilGripStrengthSection } from './sections/PencilGripStrengthSection';
import { GuidelinesSection } from './sections/GuidelinesSection';
import { TechnicalSection } from './sections/TechnicalSection';
import { SubmissionSection } from './sections/SubmissionSection';

interface MainContentProps {
  activeSection: string;
}

export function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection />;
      case 'back-to-school-balance':
        return <BackToSchoolBalanceSection />;
      case 'pencil-grip-strength':
        return <PencilGripStrengthSection />;
      case 'guidelines':
        return <GuidelinesSection />;
      case 'technical':
        return <TechnicalSection />;
      case 'submission':
        return <SubmissionSection />;
      default:
        return <IntroSection />;
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'intro': return 'August-Content-Mission-Guide';
      case 'back-to-school-balance': return 'Back-to-School-Balance-Guide';
      case 'pencil-grip-strength': return 'Pencil-Grip-Strength-Guide';
      case 'guidelines': return 'Content-Guidelines';
      case 'technical': return 'Technical-Standards';
      case 'submission': return 'Submission-Process';
      default: return 'Content-Guide';
    }
  };
  return (
    <main className="main">
      {activeSection !== 'intro' && (
        <div className="content-pdf-generator">
          <PDFGeneratorButton
            targetElementId="content-block"
            filename={`${getSectionTitle()}.pdf`}
            buttonText="📄 Download This Section as PDF"
            className="content-section-pdf-btn"
          />
        </div>
      )}
      <div className="content-block">
        <div id="content-block">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}