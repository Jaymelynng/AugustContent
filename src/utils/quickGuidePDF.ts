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
  addText('Content Tasks', 16, true, '#8B4A4A');
  addSectionBreak();
  
  // Task List
  addText('POST #1: Back to School Balance - PHOTO CAROUSEL | 4 PHOTOS', 10);
  addText('Tuesday, August 5', 10, true);
  
  addSectionBreak();
  addSectionBreak();
  
  // Back to School Balance Task
  addText('POST #1: Back to School Balance', 12, true, '#8B4A4A');
  addText('PHOTO CAROUSEL | 4 PHOTOS | Tuesday, August 5', 10, true);
  
  addText('Post Objective:', 10, true);
  addText('Create a compelling photo carousel that demonstrates how gymnastics beam training directly translates to school readiness and confidence.', 10);
  
  addText('Technical Requirements:', 10, true);
  addText('• Aspect Ratio: SQUARE (1:1) format only', 10);
  addText('• Image Quality: High resolution, well-lit, camera-ready', 10);
  addText('• Equipment: Use floor beams with incline props - do NOT modify AAI beams', 10);
  
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
  addText('PHOTO COLLAGE | 7 PHOTOS | Friday, August 8', 10, true);
  
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
  
  // Save the PDF
  pdf.save('August-Content-Quick-Guide.pdf');
};