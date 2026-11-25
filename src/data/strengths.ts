import { links } from './profile'
import type { SkillGroup, Strength } from './types'

export const strengths: readonly Strength[] = [
  {
    id: 'connection',
    title: 'A vessel of communication and connection',
    text: 'My greatest strength is connecting with people. I am outgoing and approachable, and I make people comfortable sharing their perspectives. I listen closely, ask follow up questions, and help people put what they need into words. I would bring that curiosity to conversations across product, design, and engineering, building collaborative relationships through clear communication.',
    accent: 'sea',
  },
  {
    id: 'ai',
    title: 'Putting AI to good use',
    text: 'I follow how AI is changing the workforce and use it regularly in my education, from breaking down complex concepts for studying to working through coding problems and examining my reasoning. It helps me explore unfamiliar topics while practicing how to ask precise questions, evaluate answers, and analyze complex ideas.',
    accent: 'navy',
  },
  {
    id: 'software',
    title: 'Software fluency',
    text: 'My Python coursework and daily software use help me talk comfortably with engineering teams. Breaking problems into smaller steps, tracing code, and working through errors taught me to describe problems precisely and ask focused questions. I bring that approach to understanding workflows, clarifying requirements, and discussing implementation options.',
    accent: 'palm',
  },
  {
    id: 'design',
    title: 'Graphic design',
    text: 'I design graphics for Coastal Well Woman, including events I helped plan and everyday office needs. More of my work, including creative videos, lives on the Project CARE UCSB and Coastal Well Woman Instagram accounts.',
    link: links.designPortfolio,
    accent: 'coral',
  },
  {
    id: 'analytical',
    title: 'An analytical and creative mind',
    text: 'I look closely at how people use a platform, spot ways to improve their experience, and connect user needs with business goals. My product pitches show this in action.',
    link: links.pitchPortfolio,
    accent: 'gold',
  },
]

export const skills: readonly SkillGroup[] = [
  {
    group: 'Product and Business',
    accent: 'sea',
    items: ['Business development', 'Business strategy', 'Product pitching', 'Usability testing plans'],
  },
  {
    group: 'Research',
    accent: 'navy',
    items: ['Scientific research', 'Quantitative analysis', 'Experimental project development', 'Analytical thinking'],
  },
  {
    group: 'Technical',
    accent: 'palm',
    items: ['Python', 'Tebra EHR', 'AI tools for learning', 'Basic software skills'],
  },
  {
    group: 'Creative',
    accent: 'coral',
    items: ['Graphic design', 'Social media content', 'Video and reels', 'Sketching and acrylic painting'],
  },
  {
    group: 'Healthcare Operations',
    accent: 'gold',
    items: ['Patient communication', 'Scheduling', 'Lab order workflows', 'Patient intake and vitals', 'Billing'],
  },
  {
    group: 'Leadership',
    accent: 'sea',
    items: ['Team management', 'Event coordination', 'Audience engagement', 'Volunteer recruitment'],
  },
]
