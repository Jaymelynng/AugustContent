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
  // Progress Ideas (inspired-by-progress) - 🌟
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
  {
    id: 'i-can-do-hard-things',
    title: '"I Can Do Hard Things" Moment',
    hook: 'That moment when they realize they\'re stronger than they thought...',
    visualIdea: 'A child overcoming a specific fear with coach support',
    mood: 'inspired-by-progress'
  },
  {
    id: 'first-day-vs-30-days',
    title: 'First Day vs. 30 Days',
    hook: 'Transformation: Same kid, different confidence level!',
    visualIdea: 'Split screen showing nervous beginning vs. proud achievement',
    mood: 'inspired-by-progress'
  },
  {
    id: 'skill-upgrade-achievement',
    title: 'Skill Upgrade Achievement',
    hook: 'Level up! From beginner beam to high beam hero!',
    visualIdea: 'Progression from skill intro to phase',
    mood: 'inspired-by-progress'
  },
  {
    id: 'helping-others-succeed',
    title: 'Helping Others Succeed',
    hook: 'Teaching others = mastering yourself.',
    visualIdea: 'Advanced student helping a beginner learn a skill',
    mood: 'inspired-by-progress'
  },
  {
    id: 'confidence-glow-up',
    title: 'Confidence Glow-Up',
    hook: 'Same skill, same kid, completely different energy!',
    visualIdea: 'Same child performing similar skills with growing confidence',
    mood: 'inspired-by-progress'
  },
  {
    id: 'fear-conquered',
    title: 'Fear Conquered',
    hook: 'From \'I can\'t\' to \'Watch me go!\' in # weeks',
    visualIdea: 'Journey from avoiding a skill to mastering it',
    mood: 'inspired-by-progress'
  },
  {
    id: 'priceless-look',
    title: 'The Priceless Look',
    hook: 'The look on their face when they nail a new skill is PRICELESS.',
    visualIdea: 'Photo of a child beaming with pride',
    mood: 'inspired-by-progress'
  },
  {
    id: 'stick-the-landing',
    title: 'When You Finally Stick the Landing',
    hook: 'When you finally stick the landing - victory is sweet!',
    visualIdea: 'Perfect landing moment captured',
    mood: 'inspired-by-progress'
  },
  {
    id: 'pure-joy',
    title: 'This is Pure Joy',
    hook: 'This is what pure joy looks like. 🥰 #gymnasticslove #happykids',
    visualIdea: 'Candid shot of genuine happiness',
    mood: 'inspired-by-progress'
  },
  {
    id: 'every-story-beginning',
    title: 'Every Story Has a Beginning',
    hook: 'Every story has a beginning. Start yours today.',
    visualIdea: 'New student taking their first step onto the mat',
    mood: 'inspired-by-progress'
  },
  {
    id: 'building-confidence',
    title: 'Building Confidence, One Skill at a Time',
    hook: 'Gymnastics is more than just fun—it\'s about building confidence and resilience. Watch as your child grows stronger, both mentally and physically, with every new skill they master.',
    visualIdea: 'Progression photos showing confidence growth',
    mood: 'inspired-by-progress'
  },
  {
    id: 'best-views-hardest-climbs',
    title: 'The Best Views Come After the Hardest Climbs',
    hook: 'The best views come after the hardest climbs.',
    visualIdea: 'Child at the top of a challenging skill',
    mood: 'inspired-by-progress'
  },
  {
    id: 'their-journey-our-passion',
    title: 'Their Journey is Our Passion',
    hook: 'Their journey is our passion. #ProudMoments',
    visualIdea: 'Coach smiling at kiddo after new skill',
    mood: 'inspired-by-progress'
  },

  // Playful Ideas (ready-to-be-playful) - 🎪
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
  {
    id: 'musical-mats',
    title: 'Musical Mats',
    hook: 'Gymnastics meets musical chairs! Last one standing wins!',
    visualIdea: 'Kids moving between mats when music stops',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'gym-myth-boys',
    title: 'Gym Myth: Only for Girls',
    hook: 'Boys flip too! 💪 Gymnastics builds strength and focus for ALL kids.',
    visualIdea: 'Boys showing off their favorite skills',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'spot-the-difference',
    title: 'Spot the Difference: Gym Edition',
    hook: 'Coach set up this station wrong... can you spot what\'s missing?',
    visualIdea: 'Two setups side by side with one obvious difference',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'equipment-pictionary',
    title: 'Gym Equipment Pictionary',
    hook: 'Can you guess what gym equipment I\'m drawing?',
    visualIdea: 'Quick sketch reveals with guessing in comments',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'mime-a-skill',
    title: 'Mime a Skill',
    hook: 'No words, just movement. Can you guess this gymnastics skill?',
    visualIdea: 'Exaggerated mime version of popular skills',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'skill-dice-challenge',
    title: 'Skill Dice Challenge',
    hook: 'Whatever the dice lands on, we do! Ready for random fun?',
    visualIdea: 'Rolling dice with different skills on each side',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'color-coordination',
    title: 'Color Coordination Challenge',
    hook: 'Touch something red, then blue, then yellow - while on the beam!',
    visualIdea: 'Kids navigating color challenges',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'scavenger-hunt',
    title: 'Scavenger Hunt: Gym Edition',
    hook: 'Find something round, something bouncy, something that squeaks!',
    visualIdea: 'Quick-paced hunt through gym equipment',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'backwards-day',
    title: 'Backwards Day Challenge',
    hook: 'Everything backwards today! Backwards walks, rolls, even hellos!',
    visualIdea: 'Kids attempting skills in reverse',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'beat-the-clock',
    title: 'Beat the Clock',
    hook: 'Can our whole class do a perfect toe touch in under 10 seconds?',
    visualIdea: 'Group countdown with collective goal',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'target-practice',
    title: 'Target Practice: Foam Block Edition',
    hook: 'Throw soft blocks at the target while balance on one foot',
    visualIdea: 'Multi-tasking challenge with fun',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'gymnastics-bingo',
    title: 'Gymnastics Bingo',
    hook: 'First to get 5 in a row wins! Cartwheel, jump, spin, balance, roll!',
    visualIdea: 'Bingo game with movement squares',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'weird-skills-championship',
    title: 'Weird Skills Championship',
    hook: 'Most creative way to get from here to there without touching the floor!',
    visualIdea: 'Kids inventing unique movement patterns',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'celebration-station',
    title: 'Celebration Station',
    hook: 'Every skill gets its own victory dance! Show us your moves!',
    visualIdea: 'Custom celebration dances after achievements',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'fun-friends-flips',
    title: 'Fun, Friends, and Flips!',
    hook: 'Fun, Friends, and Flips! 🤸 The perfect trio!',
    visualIdea: 'Group of friends having fun together',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'spooky-skills',
    title: 'Spooky Skills and Thrills',
    hook: 'Get ready for a month full of fun, fitness, and spooky surprises! 🎃',
    visualIdea: 'Halloween-themed gymnastics activities',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'national-gymnastics-day',
    title: 'National Gymnastics Day',
    hook: 'Ready to celebrate National Gymnastics Day? Join us for special activities!',
    visualIdea: 'Themed decorations and special gymnastics activities',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'monday-motivation-cartwheel',
    title: 'Monday Motivation Cartwheel',
    hook: 'Mondays are for new beginnings. Start your week with a cartwheel! 🤸‍♀️ #MondayMotivation #GymnasticsLife',
    visualIdea: 'Multiple kids doing cartwheels to start the week',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'upside-down-happy-place',
    title: 'Upside Down Happy Place',
    hook: 'Upside down is our happy place. 🙃 #gymnastics #upsidedownfun',
    visualIdea: 'Line of gymnasts in handstands',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'life-better-upside-down',
    title: 'Life is Better Upside Down',
    hook: 'Life is better upside down. 🤸‍♀️ #gymnasticslife #upsidedownfun',
    visualIdea: 'Various upside-down skills montage',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'gravity-never-heard',
    title: 'Gravity? Never Heard of It',
    hook: 'Gravity? Never heard of it. 🤸‍♂️ #gymnastics #defyinggravity',
    visualIdea: 'Mid-air shot of gymnast jumping or flipping',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'upside-down-smiles',
    title: 'Upside Down Smiles',
    hook: 'Upside down smiles are the best kind',
    visualIdea: 'Kids smiling while in handstands',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'life-too-short-right-side-up',
    title: 'Life\'s Too Short to Stay Right Side Up',
    hook: 'Life is too short to stay right side up. 🙃 #gymnastics #upsidedownfun',
    visualIdea: 'Variety of inverted positions',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'lifes-a-flip',
    title: 'Life\'s a Flip',
    hook: 'Life\'s a flip, enjoy the ride! 🎢 #gymnastics #enjoythejourney',
    visualIdea: 'Sequence shots of a flip in progress',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'hang-in-there',
    title: 'Hang in There',
    hook: 'Hang in there, it\'s almost the weekend! 😉 #gymnastics #hangtime',
    visualIdea: 'Gymnast hanging from bars with big smile',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'defying-gravity',
    title: 'Defying Gravity',
    hook: 'Defying gravity, one handstand at a time. 🙌 #gymnastics #handstand',
    visualIdea: 'Perfect handstand form',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'line-of-handstands',
    title: 'Line of Handstands',
    hook: 'The only thing better than one handstand is a whole line of them! 🤸‍♀️🤸‍♂️ #gymnasticsteam #squadgoals',
    visualIdea: 'Team doing synchronized handstands',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'tumble-into-savings',
    title: 'Ready to Tumble into Savings?',
    hook: 'Ready to tumble into savings? Special offers this month!',
    visualIdea: 'Fun tumbling with promotional graphics',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'gymnastics-to-rescue',
    title: 'Gymnastics to the Rescue!',
    hook: 'Gymnastics to the rescue! Energy outlet found!',
    visualIdea: 'Kids channeling energy into gymnastics',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'find-your-passion',
    title: 'Find Your Passion',
    hook: 'Find Your Passion - it might be upside down!',
    visualIdea: 'Various skills being explored',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'calling-future-gymnasts',
    title: 'Calling All Future Gymnasts',
    hook: 'Calling all future gymnasts! Our classes are filling up fast.',
    visualIdea: 'Exciting class activities',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'chance-to-shine',
    title: 'This is Your Chance to Shine',
    hook: 'This is your chance to shine! Sign up for our classes today.',
    visualIdea: 'Spotlight on student achievements',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'magic-of-movement',
    title: 'Experience the Magic of Movement',
    hook: 'Experience the Magic of Movement——Contact Us to Learn More!',
    visualIdea: 'Flowing movement sequences',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'mid-week-motivation-flipping',
    title: 'Mid-Week Motivation: Keep Flipping!',
    hook: '🤸‍♀️ Mid-Week Motivation: Keep Flipping! 🤸‍♂️',
    visualIdea: 'Wednesday energy boost activities',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'flashback-friday',
    title: 'Flashback Friday Favorite Moments',
    hook: '🌟 Flashback Friday: Our Favorite Gymnastics Moments! 🌟',
    visualIdea: 'Collection of memorable gym moments',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'unlock-new-skill',
    title: 'Unlock a New Skill This Week',
    hook: '🔄 Unlock a New Skill This Week! 🔄',
    visualIdea: 'Tutorial-style skill breakdown',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'showcase-skills',
    title: 'Showcase Your Skills',
    hook: '🏅 Showcase Your Skills! 🏅',
    visualIdea: 'Students demonstrating their best moves',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'experience-joy-unbeatable-price',
    title: 'Experience the Joy at an Unbeatable Price',
    hook: 'Experience the Joy of Gymnastics at an Unbeatable Price! 🤸‍♀️',
    visualIdea: 'Happy gymnasts with special offer overlay',
    mood: 'ready-to-be-playful'
  },
  {
    id: 'back-to-school-back-to-fun',
    title: 'Back to School, Back to Fun',
    hook: 'Back to School, Back to Fun – Save Big on Gymnastics!',
    visualIdea: 'Back-to-school themed gymnastics activities',
    mood: 'ready-to-be-playful'
  },

  // Teaching Mode Ideas (teaching-mode) - 👨‍🏫
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
  {
    id: 'perfect-hand-placement',
    title: 'Perfect Hand Placement',
    hook: 'This tiny change in hand position prevents wrist injuries AND improves skills!',
    visualIdea: 'Close-up hand placement comparison',
    mood: 'teaching-mode'
  },
  {
    id: 'home-practice-helps',
    title: 'Home Practice That Actually Helps',
    hook: '5 things your gymnast can safely practice at home (and 3 they absolutely can\'t!)',
    visualIdea: 'Safe home drills demonstration',
    mood: 'teaching-mode'
  },
  {
    id: 'parent-me-warmup',
    title: 'Parent & Me Warm-Up',
    hook: 'Stretching isn\'t just for kids! Try this 5-min parent-and-me warm-up tonight.',
    visualIdea: 'Adorable parent-tot class moments',
    mood: 'teaching-mode'
  },
  {
    id: 'safety-check',
    title: 'Safety Check',
    hook: 'Safety first: here\'s our daily equipment checklist so you can relax while they flip.',
    visualIdea: 'Quick equipment check routine',
    mood: 'teaching-mode'
  },
  {
    id: 'spotting-secrets',
    title: 'Spotting Secrets Revealed',
    hook: 'How coaches know exactly when to let go: the 3 signs we look for',
    visualIdea: 'Coach explaining spotting decision points',
    mood: 'teaching-mode'
  },
  {
    id: 'science-straight-lines',
    title: 'The Science of Straight Lines',
    hook: 'Why we love strong shapes: it\'s physics, not pickiness!',
    visualIdea: 'Body alignment demonstration with physics overlay',
    mood: 'teaching-mode'
  },
  {
    id: 'conditioning-counts',
    title: 'Conditioning That Counts',
    hook: 'These aren\'t just exercises - they\'re building blocks for every skill!',
    visualIdea: 'Conditioning moves with skill application examples',
    mood: 'teaching-mode'
  },
  {
    id: 'breaking-down-backwards-roll',
    title: 'Breaking Down a Backwards Roll',
    hook: 'Step 1, 2, 3: how we teach a sometimes scary skill for beginners',
    visualIdea: 'Detailed progression breakdown',
    mood: 'teaching-mode'
  },
  {
    id: 'what-coaches-look-for',
    title: 'What Coaches Really Look For',
    hook: 'It\'s not about perfection - here\'s what we actually assess in skills',
    visualIdea: 'Coach evaluation process explanation',
    mood: 'teaching-mode'
  },
  {
    id: 'equipment-101',
    title: 'Equipment 101: Why We Use This',
    hook: 'Ever wonder why we have different mat thicknesses? Here\'s the method behind the madness!',
    visualIdea: 'Equipment purpose explanations',
    mood: 'teaching-mode'
  },
  {
    id: 'power-of-routine',
    title: 'The Power of Routine',
    hook: 'Why we do the same warm-up every class: building habits that build',
    visualIdea: 'Routine explanation with brain science',
    mood: 'teaching-mode'
  },
  {
    id: 'age-appropriate-expectations',
    title: 'Age-Appropriate Expectations',
    hook: 'What your 4-year-old should actually be learning (hint: it\'s not what you would think)',
    visualIdea: 'Developmental milestone demonstrations',
    mood: 'teaching-mode'
  },
  {
    id: 'energy-management',
    title: 'Energy Management Techniques',
    hook: 'How to channel that crazy energy into focus: coach secrets revealed!',
    visualIdea: 'Energy direction strategies in action',
    mood: 'teaching-mode'
  },
  {
    id: 'real-reason-repeat-skills',
    title: 'The Real Reason We Repeat Skills',
    hook: 'Muscle memory isn\'t just memory - it\'s safety and confidence building!',
    visualIdea: 'Repetition benefits demonstration',
    mood: 'teaching-mode'
  },
  {
    id: 'progress-looks-different',
    title: 'Progress Looks Different for Everyone',
    hook: 'Why Suzy got her cartwheel first but Jake will get his handstand first',
    visualIdea: 'Individual development path explanations',
    mood: 'teaching-mode'
  },
  {
    id: 'micro-progressions',
    title: 'Micro-Progressions Explained',
    hook: 'How we break ONE skill into 10 tiny steps - and why it works!',
    visualIdea: 'Detailed skill breakdown process',
    mood: 'teaching-mode'
  },
  {
    id: 'creating-balance',
    title: 'Creating Balance',
    hook: 'Balance is not something you find, it\'s something you create. 💪 #gymnastics #balance',
    visualIdea: 'Demonstration of balance progression exercises',
    mood: 'teaching-mode'
  },
  {
    id: 'wednesday-wisdom-practice',
    title: 'Wednesday Wisdom: The Power of Practice',
    hook: '🌟 Wednesday Wisdom: The Power of Practice 🌟',
    visualIdea: 'Time-lapse of skill improvement through practice',
    mood: 'teaching-mode'
  },
  {
    id: 'back-to-school-balance',
    title: 'Back to School, Back to Balance',
    hook: 'Balance schoolwork with playtime! Our gymnastics classes are the perfect complement to a busy school schedule. Enroll now and keep the fun going! #SchoolAndPlay',
    visualIdea: 'Child balancing on a beam with school backpack nearby',
    mood: 'teaching-mode'
  },
  {
    id: 'why-gymnastics-great',
    title: 'Why Gymnastics is Great for Kids',
    hook: '🏆 Why Gymnastics is Great for Kids! 🏆',
    visualIdea: 'Infographic-style benefits breakdown',
    mood: 'teaching-mode'
  },
  {
    id: 'classrooms-to-cartwheels',
    title: 'From Classrooms to Cartwheels',
    hook: 'From Classrooms to Cartwheels - the perfect after-school transition!',
    visualIdea: 'Transition from school to gym activities',
    mood: 'teaching-mode'
  },
  {
    id: 'school-days-gymnastics-plays',
    title: 'School Days and Gymnastics Plays',
    hook: '💪 School Days and Gymnastics Plays 💪',
    visualIdea: 'Balance between academics and physical activity',
    mood: 'teaching-mode'
  },
  {
    id: 'mid-week-motivation-pushing',
    title: 'Mid-Week Motivation: Keep Pushing Forward',
    hook: '🌟 Mid-Week Motivation: Keep Pushing Forward! 🌟',
    visualIdea: 'Motivational skill progression',
    mood: 'teaching-mode'
  },
  {
    id: 'gymnastics-savings-perfect-school',
    title: 'Gymnastics + Savings = Perfect School Year',
    hook: 'Gymnastics + Savings = A Perfect School Year!',
    visualIdea: 'School supplies and gymnastics equipment',
    mood: 'teaching-mode'
  },

  // Community Ideas (community-vibes) - 💫
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
  {
    id: 'meet-the-mascot',
    title: 'Meet the Mascot',
    hook: 'Say hi to [name], our longtime hype hero! Drop a ❤️ if you remember them!',
    visualIdea: 'The mascot interacting with kids',
    mood: 'community-vibes'
  },
  {
    id: 'reward-system-spotlight',
    title: 'Reward System Spotlight',
    hook: 'Our ticket booth isn\'t just for prizes - it\'s for building dreams!',
    visualIdea: 'Kids excited about reward system',
    mood: 'community-vibes'
  },
  {
    id: 'stretch-along-session',
    title: 'Stretch Along Session',
    hook: 'Join us for a community stretch session!',
    visualIdea: 'Group stretching together',
    mood: 'community-vibes'
  },
  {
    id: 'multi-generational-magic',
    title: 'Multi-Generational Magic',
    hook: 'Mom trained here, now daughter trains here. Some legacies are built on cartwheels!',
    visualIdea: 'Family connections to the gym',
    mood: 'community-vibes'
  },
  {
    id: 'memory-wall-tour',
    title: 'Memory Wall Tour',
    hook: 'Every photo tells a story... take a walk down memory lane with us!',
    visualIdea: 'Touring achievement photos and memories',
    mood: 'community-vibes'
  },
  {
    id: 'new-student-welcome',
    title: 'New Student Welcome',
    hook: 'How we make first days feel like family days - welcome wagon activated!',
    visualIdea: 'First day experience from community perspective',
    mood: 'community-vibes'
  },
  {
    id: 'team-support-system',
    title: 'Team Support System',
    hook: 'See how our recreational kids cheer for our competitive team? One gym, one family!',
    visualIdea: 'Cross-program support and encouragement',
    mood: 'community-vibes'
  },
  {
    id: 'acts-of-kindness',
    title: 'Acts of Kindness',
    hook: 'Random acts of kindness happen here daily. This one made us cry happy tears!',
    visualIdea: 'Spontaneous kindness between gymnasts',
    mood: 'community-vibes'
  },
  {
    id: 'gym-culture-moments',
    title: 'Gym Culture Moments',
    hook: 'You know you\'re part of [Gym Name] when... (fill in the blank!)',
    visualIdea: 'Inside jokes and cultural moments',
    mood: 'community-vibes'
  },
  {
    id: 'november-gratitude',
    title: 'November Gratitude and Growth',
    hook: '🌟 November is Here: Get Ready for a Month of Gratitude and Growth! 🌟',
    visualIdea: 'Thanksgiving-themed gym activities',
    mood: 'community-vibes'
  },
  {
    id: 'fall-into-fun',
    title: 'Fall Into Fun',
    hook: 'Leaves are falling, but our spirits are soaring! Join us this fall for gymnastics adventures!',
    visualIdea: 'Gymnasts playing with fall decorations in the gym',
    mood: 'community-vibes'
  },
  {
    id: 'teacher-appreciation',
    title: 'Teacher Appreciation Day',
    hook: 'Teacher Appreciation Day - Our coaches are the real MVPs! 🍎',
    visualIdea: 'Students surprising coaches with appreciation cards',
    mood: 'community-vibes'
  },
  {
    id: 'give-gift-gymnastics',
    title: 'Give the Gift of Gymnastics',
    hook: 'Give the Gift of Gymnastics - share the joy this season!',
    visualIdea: 'Gift certificate or enrollment special',
    mood: 'community-vibes'
  },
  {
    id: 'tell-us-your-story',
    title: 'Tell Us Your Story',
    hook: 'Tell us your story - how has gymnastics changed your child?',
    visualIdea: 'Parent testimonials and student journeys',
    mood: 'community-vibes'
  },
  {
    id: 'gear-up-new-school-year',
    title: 'Gear Up for a New School Year',
    hook: 'As we gear up for a new school year, let\'s keep the excitement rolling with gymnastics! Enroll now and give your child the perfect balance of fun and focus.',
    visualIdea: 'Back-to-school gymnastics preparation',
    mood: 'community-vibes'
  },

  // Behind-the-Scenes Ideas (curious-details) - 🔥
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
  },
  {
    id: 'coach-favorite-drill',
    title: 'Coach\'s Favorite Drill',
    hook: 'Coach [Name]\'s secret beam drill—no beam needed! Save this and tag us when you nail it.',
    visualIdea: 'The drill explanation + kids trying it',
    mood: 'curious-details'
  },
  {
    id: 'lesson-planning',
    title: 'Lesson Planning',
    hook: 'Every class is planned to perfection. Here\'s how coaches create the magic!',
    visualIdea: 'Coaches setting up lesson plans',
    mood: 'curious-details'
  },
  {
    id: 'innovation-station',
    title: 'Innovation Station',
    hook: 'New drill idea testing in progress! Will it make it to class? Let\'s find out!',
    visualIdea: 'Coaches testing new teaching methods',
    mood: 'curious-details'
  },
  {
    id: 'event-setup-magic',
    title: 'Event Setup Magic',
    hook: 'How we transform our gym for special events in 30 minutes!',
    visualIdea: 'Time-lapse event preparation',
    mood: 'curious-details'
  },
  {
    id: 'progress-tracking-system',
    title: 'Progress Tracking System',
    hook: 'How we track every gymnast\'s progress - the secret sauce revealed!',
    visualIdea: 'Behind-the-scenes of your star charts',
    mood: 'curious-details'
  },
  {
    id: 'continuing-education',
    title: 'Continuing Education',
    hook: 'Coaches never stop learning! Here\'s how we stay at the top of our game.',
    visualIdea: 'Coach training sessions',
    mood: 'curious-details'
  },
  {
    id: 'when-things-go-wrong',
    title: 'When Things Go Wrong',
    hook: 'Real talk: how we handle unexpected situations (with grace and humor!)',
    visualIdea: 'Problem-solving moments',
    mood: 'curious-details'
  },
  {
    id: 'why-we-do-this',
    title: 'Why We Do This',
    hook: 'After 10 years of coaching, this is what still gets me excited every day...',
    visualIdea: 'Coach sharing their passion',
    mood: 'curious-details'
  },
  {
    id: 'real-staff-meeting',
    title: 'The Real Staff Meeting',
    hook: 'What really happens in coach meetings? Spoiler: lots of gymnastics talk!',
    visualIdea: 'Staff collaboration moments',
    mood: 'curious-details'
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    hook: 'How we make sure every class meets our standards - behind the scenes quality check!',
    visualIdea: 'Management oversight and improvement',
    mood: 'curious-details'
  },
  {
    id: 'tour-the-gym',
    title: 'Tour the Gym',
    hook: 'Take a virtual tour of where the magic happens!',
    visualIdea: 'Walk-through tour showing different gym areas',
    mood: 'curious-details'
  },
  {
    id: 'coaches-after-hours-fun',
    title: 'Coaches After Hours Fun',
    hook: 'What happens when coaches stay late? Gymnastics fun for grown-ups!',
    visualIdea: 'Coaches playing in the gym after hours',
    mood: 'curious-details'
  },

  // Equipment Fun Ideas (equipment-fun) - 🏋️
  {
    id: 'equipment-personality-test',
    title: 'Equipment Personality Test',
    hook: 'If gym equipment had personalities... this is what they\'d be!',
    visualIdea: 'Equipment "interviews" with personality traits',
    mood: 'curious-details'
  },
  {
    id: 'guess-equipment-sound',
    title: 'Guess That Equipment Sound',
    hook: 'Close your eyes and guess - is this the bars, beam, or vault?',
    visualIdea: 'Audio-only equipment sounds for guessing',
    mood: 'curious-details'
  },
  {
    id: 'heavy-vs-light',
    title: 'Heavy vs. Light Challenge',
    hook: 'Guess which piece of equipment weighs more! The answers might surprise you.',
    visualIdea: 'Weight comparison reveals',
    mood: 'curious-details'
  },
  {
    id: 'size-comparison-station',
    title: 'Size Comparison Station',
    hook: 'How many gymnasts can fit on a single mat? Let\'s find out!',
    visualIdea: 'Visual size demonstrations',
    mood: 'curious-details'
  },
  {
    id: 'equipment-rainbow',
    title: 'Equipment Rainbow',
    hook: 'Making a rainbow with gym equipment - every color tells a story!',
    visualIdea: 'Organizing equipment by color',
    mood: 'curious-details'
  },
  {
    id: 'equipment-how-old',
    title: 'This Equipment is HOW Old?',
    hook: 'Some of our equipment has been building dreams for 15 years!',
    visualIdea: 'Equipment age and history reveals',
    mood: 'curious-details'
  },
  {
    id: 'strongest-equipment',
    title: 'Strongest Equipment Challenge',
    hook: 'Which equipment can hold the most gymnasts safely? Science experiment time!',
    visualIdea: 'Safe capacity demonstrations',
    mood: 'curious-details'
  },
  {
    id: 'trick-shots',
    title: 'Trick Shots',
    hook: 'Can we bounce a ball off a vault table into a hula hoop? Let\'s see!',
    visualIdea: 'Creative equipment trick shots',
    mood: 'curious-details'
  },
  {
    id: 'perfect-setup-science',
    title: 'Perfect Setup Science',
    hook: 'Why this distance between bars matters - it\'s all about body mechanics!',
    visualIdea: 'Equipment spacing and setup logic',
    mood: 'curious-details'
  },
  {
    id: 'equipment-transformation',
    title: 'Equipment Transformation',
    hook: 'Watch this vault become a dance stage! Creativity meets equipment!',
    visualIdea: 'Creative equipment alternative uses',
    mood: 'curious-details'
  },
  {
    id: 'equipment-detail-detective',
    title: 'Equipment Detail Detective',
    hook: 'Zoom in extreme close-up - can you guess what part of what equipment?',
    visualIdea: 'Macro shots of equipment details',
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