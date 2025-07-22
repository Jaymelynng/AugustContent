import jsPDF from 'jspdf';

export const generateQuickGuidePDF = async () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  
  let yPosition = margin;
  
  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: string = '#000000') => {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    pdf.setTextColor(color);
    
    const lines = pdf.splitTextToSize(text, contentWidth);
    
    // Check if we need a new page
    if (yPosition + (lines.length * fontSize * 0.35) > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
    
    pdf.text(lines, margin, yPosition);
    yPosition += lines.length * fontSize * 0.35 + 3;
  };
  
  // Helper function to add a section break
  const addSectionBreak = () => {
    yPosition += 5;
    if (yPosition > pageHeight - 40) {
      pdf.addPage();
      yPosition = margin;
    }
  };
  
  // Header with gradient effect (simulated with color)
  pdf.setFillColor(212, 165, 165);
  pdf.rect(0, 0, pageWidth, 45, 'F');
  
  pdf.setTextColor('#FFFFFF');
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('August Content - Quick Guide', pageWidth / 2, 25, { align: 'center' });
  
  yPosition = 55;
  
  // Content Tasks Header
  addText('Content Tasks Overview', 16, true, '#8B4A4A');
  addSectionBreak();
  
  // Task List
  addText('POST #1: Back to School Balance - PHOTO CAROUSEL | 4 PHOTOS', 10, true);
  addText('POST #2: Pencil Grip Strength from Bars - PHOTO COLLAGE | 7 PHOTOS', 10, true);
  addText('POST #3: Bounce-Back Power - VIDEO REEL | 3 CLIPS', 10, true);
  addText('POST #4: Become A Boss On The Playground - VIDEO REEL | 3 VIDEOS', 10, true);
  addText('POST #5: Finding Their Voice - PHOTO COLLAGE | 6 PHOTOS', 10, true);
  addText('POST #6: Power Starts Here - PHOTO + VIDEO | 2 PHOTOS, 1 VIDEO', 10, true);
  addText('POST #7: The Progression Pyramid Reel - CINEMATIC REEL | 6 CLIPS', 10, true);
  addText('POST #8: The High-Five That Matters - DYNAMIC VIDEO REEL | 9 CLIPS', 10, true);
  addText('POST #9: The 6 Shapes That Build Every Gymnast - PHOTO CAROUSEL | 6 PHOTOS', 10, true);
  
  addSectionBreak();
  addSectionBreak();
  
  // Back to School Balance Task
  addText('POST #1: Back to School Balance', 12, true, '#8B4A4A');
  addText('PHOTO CAROUSEL | 4 PHOTOS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Create a compelling photo carousel that demonstrates how gymnastics beam training directly translates to school readiness and confidence.', 10);
  
  addText('Technical Requirements:', 10, true);
  addText('• Aspect Ratio: SQUARE (1:1) format only', 10);
  addText('• Image Quality: High resolution, well-lit, camera-ready', 10);
  addText('• Equipment: Use floor beams with incline props', 10);
  
  addText('Photo 1: Uphill Challenge Walk', 10, true);
  addText('Children walking uphill on inclined beam with school props balanced on heads', 10);
  
  addText('Photo 2: Single-Foot Balance Mastery', 10, true);
  addText('One child balancing on one foot with school item on head, forward-facing shot', 10);
  
  addText('Photo 3: Skill-Building Game', 10, true);
  addText('Hula hoop balance game OR pit cube throwing while on beam', 10);
  
  addText('Photo 4: Creative School Connection', 10, true);
  addText('Visual metaphor connecting beam skills to school readiness using backpacks/supplies', 10);
  
  addSectionBreak();
  addSectionBreak();
  
  // Pencil Grip Strength Task
  addText('POST #2: Pencil Grip Strength from Bars', 12, true, '#8B4A4A');
  addText('PHOTO COLLAGE | 7 PHOTOS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Demonstrate how grip strength from bar work sets the foundation for pencil control and neat handwriting.', 10);
  
  addText('Technical Requirements:', 10, true);
  addText('• Format: Square (1:1) aspect ratio for all 7 photos', 10);
  addText('• Lighting: Clean, well-lit shots emphasizing finger placement', 10);
  addText('• Coverage: Wide shots and close-ups for each grip type', 10);
  
  addText('Required Photos:', 10, true);
  addText('1. Overgrip – Full Shot: Standard overhand grip, full/upper body', 10);
  addText('2. Overgrip – Close-Up: Tight crop on fingers and palms', 10);
  addText('3. Reverse Grip – Full Shot: Palms facing toward body', 10);
  addText('4. Reverse Grip – Close-Up: Detail of reverse grip hand position', 10);
  addText('5. Mixed Grip – Full Shot: One hand over, one under', 10);
  addText('6. Mixed Grip – Close-Up: Both grips side-by-side on bar', 10);
  addText('7. Group/Class Hanging: Multiple kids, mix of grips, focus on energy', 10);
  
  addSectionBreak();
  
  // Bounce-Back Power Task
  addText('POST #3: Bounce-Back Power', 12, true, '#8B4A4A');
  addText('VIDEO REEL | 3 CLIPS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Capture the powerful, teachable moment after a mistake showing how gymnastics builds resilience.', 10);
  
  addText('Required Videos:', 10, true);
  addText('1. The Wobble & Save: Student recovers from a mistake with determination', 10);
  addText('2. The Re-Focus Moment: Quiet preparation for next attempt', 10);
  addText('3. The Praise for Recovery: Coach celebrates the effort and recovery', 10);
  
  addSectionBreak();
  
  // Playground Boss Task
  addText('POST #4: Become A Boss On The Playground', 12, true, '#8B4A4A');
  addText('VIDEO REEL | 3 VIDEOS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Show how gymnastics translates to playground skills through dynamic comparisons.', 10);
  
  addText('Required Videos:', 10, true);
  addText('1. Ring Swing → Monkey Bars Connection', 10);
  addText('2. Rope Climb → Rock Wall Connection', 10);
  addText('3. Trampoline → Trampoline Park Connection', 10);
  
  addSectionBreak();
  
  // Finding Their Voice Task
  addText('POST #5: Finding Their Voice', 12, true, '#8B4A4A');
  addText('PHOTO COLLAGE | 6 PHOTOS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Tell the visual story of how a quieter child finds their strength and belonging at the gym.', 10);
  
  addText('Required Photos:', 10, true);
  addText('1. The Quiet Start: Shy beginning moment', 10);
  addText('2. The Gentle Invitation: Connection and outreach', 10);
  addText('3. First Tries: Taking action', 10);
  addText('4. The Growing Confidence: Finding their footing', 10);
  addText('5. The Triumph & Belonging: Success with class celebration', 10);
  addText('6. The Final Salute: Confident centerpiece shot', 10);
  
  // Add new page for remaining content
  pdf.addPage();
  yPosition = margin;
  
  // Power Starts Here Task
  addText('POST #6: Power Starts Here', 12, true, '#8B4A4A');
  addText('PHOTO + VIDEO | 2 PHOTOS, 1 VIDEO', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Show the secret weapon behind a powerful roundoff through correct vs incorrect mountain climber comparison.', 10);
  
  addText('Required Content:', 10, true);
  addText('1. Photo: CORRECT Mountain Climber Position', 10);
  addText('2. Photo: INCORRECT Mountain Climber Position', 10);
  addText('3. Video: The Roundoff demonstration', 10);
  
  addSectionBreak();
  
  // Progression Pyramid Task
  addText('POST #7: The Progression Pyramid Reel', 12, true, '#8B4A4A');
  addText('CINEMATIC REEL | 6 CLIPS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Showcase methodical coaching by breaking down the back walkover into detailed progressions.', 10);
  
  addText('Required Clips:', 10, true);
  addText('1. Tabletop Shape: Foundational position', 10);
  addText('2. Elevated Bridge: Push-up vs. Rockers (side-by-side)', 10);
  addText('3. Knee Bridge: Wall Prep vs. Full Skill (side-by-side)', 10);
  addText('4. Cheese Mat Backbend: Shape vs. Rockers (side-by-side)', 10);
  addText('5. Standing Backbend to Vertical: Independence building', 10);
  addText('6. Independent Back Walkover: The payoff shot', 10);
  
  addSectionBreak();
  
  // High-Five That Matters Task
  addText('POST #8: The High-Five That Matters', 12, true, '#8B4A4A');
  addText('DYNAMIC VIDEO REEL | 9 CLIPS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Fast-paced montage showing complete emotional support system through three categories.', 10);
  
  addText('Required Clips:', 10, true);
  addText('Category 1 - Effort High-Five (3 clips): Praise for imperfect attempts', 10);
  addText('Category 2 - Encouragement Fist Bump (3 clips): Pre-challenge support', 10);
  addText('Category 3 - Success Celebration (3 clips): Shared joy of breakthroughs', 10);
  
  addSectionBreak();
  
  // Six Shapes Task
  addText('POST #9: The 6 Shapes That Build Every Gymnast', 12, true, '#8B4A4A');
  addText('PHOTO CAROUSEL | 6 PHOTOS', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Educate parents on six foundational body shapes that form the basis of every gymnastics skill.', 10);
  
  addText('Required Photos:', 10, true);
  addText('1. Straight Body: Full-body alignment', 10);
  addText('2. Hollow Body: Core engagement shape', 10);
  addText('3. Arch Position: Extension shape', 10);
  addText('4. Tuck Shape: Compact position', 10);
  addText('5. Pike Shape: Hip flexion angle', 10);
  addText('6. Straddle Shape: Wide leg position (side view only)', 10);
  
  addSectionBreak();
  addSectionBreak();
  
  // Guidelines Section
  addText('CONTENT GUIDELINES', 14, true, '#8B4A4A');
  addSectionBreak();
  
  addText('✅ DO THIS - What Makes Great Content', 12, true, '#28a745');
  addText('• Kids learning and making genuine progress', 10);
  addText('• Authentic smiles and breakthrough moments', 10);
  addText('• Proper technique and safe skill execution', 10);
  addText('• Clean, organized gym environment', 10);
  addText('• Coaches actively teaching and encouraging', 10);
  addText('• Natural interactions and teamwork', 10);
  
  addSectionBreak();
  
  addText('❌ NOT THIS - Red Flags', 12, true, '#dc3545');
  addText('• Skills with incorrect technique', 10);
  addText('• Inappropriate angles or revealing positions', 10);
  addText('• Blurry, dark, or poor quality footage', 10);
  addText('• Cluttered backgrounds with equipment out of place', 10);
  addText('• Kids who are upset, crying, or frustrated', 10);
  addText('• Forced or awkward moments', 10);
  
  addSectionBreak();
  
  addText('💡 THE GOLDEN RULE', 12, true, '#8B4A4A');
  addText('Before hitting record, ask yourself: "Would I want this shared if it were my child?" If yes—film it! If you hesitate, don\'t.', 10, true);
  
  // Save the PDF
  pdf.save('August-Content-Quick-Guide.pdf');
};