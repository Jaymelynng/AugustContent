import jsPDF from 'jspdf';

export const generateFullContentPDF = async () => {
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
    yPosition += 8;
    if (yPosition > pageHeight - 50) {
      pdf.addPage();
      yPosition = margin;
    }
  };
  
  // Header
  pdf.setFillColor(212, 165, 165);
  pdf.rect(0, 0, pageWidth, 50, 'F');
  
  pdf.setTextColor('#FFFFFF');
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('📣 August Content Mission', pageWidth / 2, 25, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Your Complete Guide to Capturing Summer Magic', pageWidth / 2, 35, { align: 'center' });
  
  yPosition = 60;
  
  // Mission Statement
  addText('Show off the real moments that make your gyms so unique and special—kids learning, trying new things, and having a blast. Snap the smiles, teamwork, and big "I did it!" moments. These are what inspire families and show how amazing you are.', 12, true);
  
  addText('All content must be collected in July and submitted by July 31, 2025 for posting in August.', 11, true, '#dc3545');
  
  addSectionBreak();
  
  // Table of Contents
  addText('📋 TABLE OF CONTENTS', 16, true, '#8B4A4A');
  addText('1. Back to School Balance - 📸 PHOTO CAROUSEL | 4 PHOTOS', 10);
  addText('2. Pencil Grip Strength from Bars - 📸 PHOTO COLLAGE | 7 PHOTOS', 10);
  addText('3. Bounce-Back Power - 📹 VIDEO REEL | 3 CLIPS', 10);
  addText('4. Become A Boss On The Playground - 📹 VIDEO REEL | 3 VIDEOS', 10);
  addText('5. Finding Their Voice - 📸 PHOTO COLLAGE | 6 PHOTOS', 10);
  addText('6. Power Starts Here - 📸📹 PHOTO + VIDEO | 2 PHOTOS, 1 VIDEO', 10);
  addText('7. The Progression Pyramid Reel - 📹 CINEMATIC REEL | 6 CLIPS', 10);
  addText('8. The High-Five That Matters - 📹 DYNAMIC VIDEO REEL | 9 CLIPS', 10);
  addText('9. The 6 Shapes That Build Every Gymnast - 📸 PHOTO CAROUSEL | 6 PHOTOS', 10);
  
  addSectionBreak();
  
  // Content Format Structure
  addText('CONTENT FORMAT STRUCTURE', 14, true, '#8B4A4A');
  addText('Every section follows this simple format:', 10);
  addText('• Title', 10, true);
  addText('• 🎯 Post Type / # Amount / Visual: What the post is capturing emotionally/visually', 10, true);
  addText('• 📌 Content Notes: Technical must-knows (length, edit-free, timing, etc.)', 10, true);
  addText('• 🎥 What to Upload: Clear list (Photo 1, Photo 2… OR Video 1, Video 2…)', 10, true);
  addText('• 💡 Reminders/Tips (Optional)', 10, true);
  
  addSectionBreak();
  
  // Start new page for content tasks
  pdf.addPage();
  yPosition = margin;
  
  addText('📱 CONTENT TASKS', 18, true, '#8B4A4A');
  addSectionBreak();
  
  // Task 1: Back to School Balance
  addText('1. Back to School Balance', 14, true, '#8B4A4A');
  addText('📸 PHOTO CAROUSEL | 4 PHOTOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Four square photos that showcase how beam balance builds confidence and directly translates to school readiness. Kids walking uphill on beams with books balanced on their heads create a powerful metaphor.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Take 4 photos in square (1:1) aspect ratio', 10);
  addText('• Prioritize clean lighting and visible kid expressions', 10);
  addText('• Make posture and balance visually impressive', 10);
  addText('• Submit post-ready images', 10);
  
  addText('📷 UPLOAD THESE 4 PHOTOS:', 11, true);
  addText('📸 Photo 1: Uphill Beam Walk with Props – Multitasking & Sensory Control', 10, true);
  addText('📸 Photo 2: One-Foot Beam Balance – "Steady Focus"', 10, true);
  addText('📸 Photo 3: Beam Game Action – "Problem-Solving Play"', 10, true);
  addText('📸 Photo 4: Final Balance Pose – "I\'m Ready" Moment', 10, true);
  
  addSectionBreak();
  
  // Task 2: Pencil Grip Strength
  addText('2. Pencil Grip Strength from Bars', 14, true, '#8B4A4A');
  addText('📸 PHOTO COLLAGE | 7 PHOTOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Demonstrate how grip strength from bar work sets the foundation for pencil control and neat handwriting through various grip types.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Format: Square (1:1) aspect ratio for all 7 photos', 10);
  addText('• Lighting: Clean, well-lit shots emphasizing finger placement', 10);
  addText('• Coverage: Wide shots and close-ups for each grip type', 10);
  
  addText('📷 UPLOAD THESE 7 PHOTOS:', 11, true);
  addText('1. Overgrip – Full Shot', 10);
  addText('2. Overgrip – Close-Up', 10);
  addText('3. Reverse Grip – Full Shot', 10);
  addText('4. Reverse Grip – Close-Up', 10);
  addText('5. Mixed Grip – Full Shot', 10);
  addText('6. Mixed Grip – Close-Up', 10);
  addText('7. Group/Class Hanging', 10);
  
  addSectionBreak();
  
  // Task 3: Bounce-Back Power
  addText('3. Bounce-Back Power', 14, true, '#8B4A4A');
  addText('📹 VIDEO REEL | 3 CLIPS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Capture the powerful, teachable moment after a mistake. Show how gymnastics builds resilience through wobbles, recovery, and coach support.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Capture three separate, short video clips', 10);
  addText('• Goal is to capture authentic moments during practice', 10);
  addText('• Final video length: Approximately 10–15 seconds', 10);
  
  addText('🎥 UPLOAD THESE 3 VIDEOS:', 11, true);
  addText('📹 Video 1: The Wobble & Save', 10, true);
  addText('📹 Video 2: The Re-Focus Moment', 10, true);
  addText('📹 Video 3: The Praise for Recovery', 10, true);
  
  addSectionBreak();
  
  // Task 4: Playground Boss
  addText('4. Become A Boss On The Playground', 14, true, '#8B4A4A');
  addText('📹 VIDEO REEL | 3 VIDEOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('A dynamic video reel showing how gymnastics translates to being a superstar on the playground through skill connections.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Create 3 short video clips (15–20 seconds each)', 10);
  addText('• Each clip combines multiple shots or angles of the same skill', 10);
  addText('• Include multiple angles or shots, edited into one complete clip per skill', 10);
  
  addText('🎥 UPLOAD THESE 3 VIDEOS:', 11, true);
  addText('📹 Video 1: Ring Swing ➝ Monkey Bars', 10, true);
  addText('📹 Video 2: Rope Climb ➝ Rock Wall', 10, true);
  addText('📹 Video 3: Trampoline ➝ Trampoline Park', 10, true);
  
  addSectionBreak();
  
  // Task 5: Finding Their Voice
  addText('5. Finding Their Voice', 14, true, '#8B4A4A');
  addText('📸 PHOTO COLLAGE | 6 PHOTOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Tell the visual story of how a quieter kiddo finds their strength and sense of belonging at the gym. Message: "You don\'t need to be the loudest kid in the gym to have the strongest voice."', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Capture 6 photos in SQUARE (1:1) aspect ratio', 10);
  addText('• Prioritize consistent, clean lighting across all photos', 10);
  addText('• Submit post-ready images', 10);
  
  addText('📷 UPLOAD THESE 6 PHOTOS:', 11, true);
  addText('📸 Photo 1: The Quiet Start', 10, true);
  addText('📸 Photo 2: The Gentle Invitation', 10, true);
  addText('📸 Photo 3: First Tries', 10, true);
  addText('📸 Photo 4: The Growing Confidence', 10, true);
  addText('📸 Photo 5: The Triumph & Belonging', 10, true);
  addText('📸 Photo 6: The Final Salute (Centerpiece)', 10, true);
  
  // Add new page for remaining content
  pdf.addPage();
  yPosition = margin;
  
  // Task 6: Power Starts Here
  addText('6. Power Starts Here', 14, true, '#8B4A4A');
  addText('📸📹 PHOTO + VIDEO | 2 PHOTOS, 1 VIDEO', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Pull back the curtain on the secret weapon behind a powerful roundoff: the \'mountain climber\' setup. Use a "right vs. wrong" comparison to show how one small change in shape can fuel an entirely different level of power.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• All three pieces of content need to be filmed from the same place and angle', 10);
  addText('• Goal is to capture clean, raw footage for post-editing', 10);
  addText('• Set markers like tape on the floor to maintain consistency', 10);
  
  addText('🎥 UPLOAD THESE 3 FILES:', 11, true);
  addText('📸 Photo 1: The CORRECT Mountain Climber Position ✅', 10, true);
  addText('📸 Photo 2: The INCORRECT Mountain Climber Position ❌', 10, true);
  addText('📹 Video 1: The Roundoff', 10, true);
  
  addSectionBreak();
  
  // Task 7: Progression Pyramid
  addText('7. The Progression Pyramid Reel', 14, true, '#8B4A4A');
  addText('📹 CINEMATIC REEL | 6 CLIPS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('A BWO isn\'t one big skill. It\'s a series of small, teachable wins stacked together. Showcase methodical coaching by breaking down the back walkover into a detailed progression. Build trust by demonstrating expert-level attention to technical detail and safe, step-by-step process.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Cinematic reel format', 10);
  addText('• Clips for Step 2, 3, and 4 will be edited side-by-side', 10);
  addText('• Focus on technical detail and safe progression', 10);
  
  addText('🎥 UPLOAD THESE 6 CLIPS:', 11, true);
  addText('📹 Clip 1: Tabletop Shape', 10, true);
  addText('📹 Clip 2: The Elevated Bridge (Push-up vs. Rockers)', 10, true);
  addText('📹 Clip 3: The Knee Bridge (Wall Prep vs. Full Skill)', 10, true);
  addText('📹 Clip 4: Cheese Mat Backbend (Shape vs. Rockers)', 10, true);
  addText('📹 Clip 5: Standing Backbend to Vertical', 10, true);
  addText('📹 Clip 6: Independent Back Walkover', 10, true);
  
  addSectionBreak();
  
  // Task 8: High-Five That Matters
  addText('8. The High-Five That Matters', 14, true, '#8B4A4A');
  addText('📹 DYNAMIC VIDEO REEL | 9 CLIPS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Fast-paced montage Reel tells a three-act story about coaching philosophy. Showcase rapid succession of nine distinct "skill-and-praise" moments showing complete emotional support system.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Create and upload NINE (9) separate, short video clips', 10);
  addText('• Each clip should be a short edit of skill attempt + coach reaction', 10);
  addText('• Theme: Effort. Encouragement. Celebration.', 10);
  
  addText('🎥 UPLOAD THESE 9 CLIPS:', 11, true);
  addText('Category 1: The "Effort" High-Five (3 Clips)', 10, true);
  addText('Category 2: The "Encouragement" Fist Bump (3 Clips)', 10, true);
  addText('Category 3: The "Success" Celebration (3 Clips)', 10, true);
  
  addSectionBreak();
  
  // Task 9: Six Shapes
  addText('9. The 6 Shapes That Build Every Gymnast', 14, true, '#8B4A4A');
  addText('📸 PHOTO CAROUSEL | 6 PHOTOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Educate parents on the six foundational body shapes in gymnastics. Each slide will feature a side-by-side comparison of basic shape with advanced skill that relies on that same shape.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Six clean, technically strong photos of foundational shapes', 10);
  addText('• Will be paired with advanced skill photos in final edit', 10);
  addText('• Goal: Build trust by showing systematic approach', 10);
  
  addText('📷 UPLOAD THESE 6 PHOTOS:', 11, true);
  addText('🟩 Slide 1: Straight Body', 10, true);
  addText('🟪 Slide 2: Hollow Body', 10, true);
  addText('🟨 Slide 3: Arch Position', 10, true);
  addText('🟦 Slide 4: Tuck Shape', 10, true);
  addText('🟧 Slide 5: Pike Shape', 10, true);
  addText('🔴 Slide 6: Straddle Shape (side view only)', 10, true);
  
  addSectionBreak();
  addSectionBreak();
  
  // Guidelines Section
  addText('📋 CONTENT GUIDELINES', 16, true, '#8B4A4A');
  addSectionBreak();
  
  addText('✅ DO THIS - What Makes Great Content', 12, true, '#28a745');
  addText('• Kids learning and making genuine progress', 10);
  addText('• Authentic smiles and breakthrough moments', 10);
  addText('• Proper technique and safe skill execution', 10);
  addText('• Clean, organized gym environment', 10);
  addText('• Coaches actively teaching and encouraging', 10);
  addText('• Natural interactions and teamwork', 10);
  addText('• Good form and clean space', 10);
  addText('• Natural joy and positive coach energy', 10);
  addText('• Safe, appropriate filming', 10);
  
  addSectionBreak();
  
  addText('❌ NOT THIS - Red Flags', 12, true, '#dc3545');
  addText('• Skills with incorrect technique (arched backs, bent knees, heads turned wrong way)', 10);
  addText('• Inappropriate angles or revealing positions', 10);
  addText('• No low shots, wide straddles, nothing awkward', 10);
  addText('• Clothing malfunctions or exposure', 10);
  addText('• Blurry, dark, or poor quality footage', 10);
  addText('• Cluttered backgrounds with equipment out of place', 10);
  addText('• Kids who are upset, crying, or frustrated', 10);
  addText('• Forced or awkward moments', 10);
  addText('• Distracted or unengaged coaching', 10);
  
  addSectionBreak();
  
  addText('💡 THE GOLDEN RULE', 12, true, '#8B4A4A');
  addText('Before hitting record, ask yourself: "Would I want this shared if it were my child?" If yes—film it! If you hesitate, don\'t.', 10, true);
  
  addSectionBreak();
  
  addText('⚙️ TECHNICAL STANDARDS', 14, true, '#8B4A4A');
  addSectionBreak();
  
  addText('📱 Video & Photo Specs', 12, true);
  addText('• Photos: High resolution, well-lit', 10);
  addText('• Format: Vertical preferred for social (landscape also acceptable)', 10);
  addText('• Quality: Clear, steady, in focus', 10);
  addText('• Composition: Full body in frame', 10);
  
  addSectionBreak();
  
  addText('Before Submitting - Check These:', 12, true);
  addText('• Is the technique clean and safe?', 10);
  addText('• Is the angle respectful and not awkward?', 10);
  addText('• Is the moment authentic (not staged for the camera)?', 10);
  addText('• Is the background good?', 10);
  addText('• Is sound good?', 10);
  addText('• Is the lighting solid?', 10);
  
  // Save the PDF
  pdf.save('August-Content-Complete-Guide.pdf');
};