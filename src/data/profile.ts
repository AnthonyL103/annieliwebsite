import type { LinkRef } from './types'

export const profile = {
  name: 'Annie Li',
  first: 'Annie',
  location: 'Santa Barbara, CA',
  school: 'UC Santa Barbara',
  degree: 'B.S. Biological Sciences',
  status: 'In progress',
  email: 'annie_li02@icloud.com',
  schoolEmail: 'annieli@ucsb.edu',
  phone: '425-647-0183',
  tagline: 'Student. Operator. Creator. Connector.',
  blurb:
    'A Biological Sciences student at UC Santa Barbara with real healthcare operations experience, a creator’s eye, and a habit of turning everyday frustrations into practical product ideas.',
} as const

export const links = {
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/annieli0183' },
  resume: {
    label: 'Resume',
    href: 'https://docs.google.com/document/d/1-xZmlVTXY5o1N7-YfOpEktluKO4JJFL0xzRkR3awVW0/edit?usp=drive_link',
  },
  coverLetter: {
    label: 'Cover letter',
    href: 'https://docs.google.com/document/d/1J-RYNSp-6G89nHWtOElZjbNdRNt8lTK2RfZxvxakIv4/edit?usp=sharing',
  },
  coastalWellWoman: { label: 'Coastal Well Woman website', href: 'https://coastalwellwoman.com/' },
  careSite: { label: 'Project CARE website', href: 'https://www.thecareinitiative.org/' },
  careInstagram: { label: 'Project CARE Instagram', href: 'https://www.instagram.com/projectcare_ucsb/' },
  foodInstagram: { label: 'My food Instagram', href: 'https://www.instagram.com/biggie.li1/' },
  kin: { label: 'Kids In Nutrition UCSB', href: 'https://www.kidsinnutrition.org/ucsb' },
  artPortfolio: {
    label: 'My art portfolio',
    href: 'https://drive.google.com/drive/folders/18-hnOGmmJ5fN5v1XM4ock0PHm5Ef-bzs?usp=drive_link',
  },
  singingCover: {
    label: 'Hear my cover of Somebody Else',
    href: 'https://drive.google.com/file/d/1N6y-hicIshkLBWjc6SoR3hfmjh-WNT6W/view?usp=sharing',
  },
  designPortfolio: {
    label: 'Graphic design portfolio',
    href: 'https://drive.google.com/drive/folders/1v2lgpq2H9gSUXw6dVv-oDF0Lii-sRGux?usp=drive_link',
  },
  pitchPortfolio: {
    label: 'Product pitch portfolio',
    href: 'https://drive.google.com/drive/folders/1sAZ2WM64AD7nQlz8-_a_jg1w37YF0-IW?usp=drive_link',
  },
} as const satisfies Record<string, LinkRef>

export const nav = [
  { id: 'top', label: 'Top' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'pitches', label: 'Pitches' },
  { id: 'service', label: 'Service' },
  { id: 'life', label: 'Life' },
  { id: 'strengths', label: 'Why me' },
  { id: 'contact', label: 'Contact' },
] as const

export const navIds = nav.map((n) => n.id)

export type StatItem = {
  readonly value: number
  readonly suffix?: string
  readonly label: string
  readonly sub: string
}

export const stats: readonly StatItem[] = [
  { value: 60, label: 'Hospital volunteer hours', sub: 'Emergency Department, Cottage Hospital' },
  { value: 50, suffix: '+', label: 'Volunteers at launch', sub: 'First Project CARE interest meeting' },
  { value: 600, label: 'Followers grown', sub: 'Project CARE Instagram' },
  { value: 2, label: 'Product pitches', sub: 'Tebra and Wirecutter concepts' },
]

/** Coursework and core skills, hung up as bunting. */
export const bunting: readonly string[] = [
  'Business Strategy',
  'Intermediate Python',
  'Quantitative Analysis',
  'Scientific Research',
  'Experimental Projects',
  'Communication',
  'Event Coordination',
  'Graphic Design',
]
