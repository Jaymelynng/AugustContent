import React from 'react';
import { PDFGeneratorButton } from './PDFGeneratorButton';
import { IntroSection } from './sections/IntroSection';
import { BackToSchoolBalanceSection } from './sections/BackToSchoolBalanceSection';
import { PencilGripStrengthSection } from './sections/PencilGripStrengthSection';
import { PlaygroundBossSection } from './sections/PlaygroundBossSection';
import { BounceBackPowerSection } from './sections/BounceBackPowerSection';
import { FindingTheirVoiceSection } from './sections/FindingTheirVoiceSection';
import { PowerStartsHereSection } from './sections/PowerStartsHereSection';
import { ProgressionPyramidSection } from './sections/ProgressionPyramidSection';
import { HighFiveThatMattersSection } from './sections/HighFiveThatMattersSection';
import { SixShapesSection } from './sections/SixShapesSection';
import { CreateYourOwnContentPost } from './sections/CreateYourOwnContentPost';
import { GuidelinesSection } from './sections/GuidelinesSection';
import { TechnicalSection } from './sections/TechnicalSection';
import { SubmissionSection } from './sections/SubmissionSection';
import { CreateYourOwnContentSection } from './sections/CreateYourOwnContentSection';

interface MainContentProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MainContent({ activeSection, onSectionChange }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection />;
      case 'back-to-school-balance':
        return <BackToSchoolBalanceSection />;
      case 'pencil-grip-strength':
        return <PencilGripStrengthSection />;
      case 'playground-boss':
        return <PlaygroundBossSection />;
      case 'bounce-back-power':
        return <BounceBackPowerSection />;
      case 'finding-their-voice':
        return <FindingTheirVoiceSection />;
      case 'power-starts-here':
        return <PowerStartsHereSection />;
      case 'progression-pyramid':
        return <ProgressionPyramidSection />;
      case 'high-five-that-matters':
        return <HighFiveThatMattersSection />;
      case 'six-shapes':
        return <SixShapesSection />;
      case 'create-your-own-content-post':
        return <CreateYourOwnContentPost />;
      case 'create-your-own-content':
        return <CreateYourOwnContentSection />;
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
      case 'playground-boss': return 'Playground-Boss-Guide';
      case 'bounce-back-power': return 'Bounce-Back-Power-Guide';
      case 'finding-their-voice': return 'Finding-Their-Voice-Guide';
      case 'power-starts-here': return 'Power-Starts-Here-Guide';
      case 'progression-pyramid': return 'Progression-Pyramid-Reel-Guide';
      case 'high-five-that-matters': return 'High-Five-That-Matters-Guide';
      case 'six-shapes': return 'Six-Shapes-That-Build-Every-Gymnast-Guide';
      case 'create-your-own-content-post': return 'Create-Your-Own-Content-Post-Guide';
      case 'create-your-own-content': return 'Create-Your-Own-Content-Guide';
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