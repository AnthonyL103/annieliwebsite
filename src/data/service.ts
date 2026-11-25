import { links } from './profile'
import { photos } from './photos'
import type { ServiceItem } from './types'

export const service: readonly ServiceItem[] = [
  {
    id: 'care-board',
    tag: 'Founding board',
    title: 'Board Member',
    org: 'Project CARE for Women’s Health, UCSB',
    text: 'As part of the original board, I helped launch the UC Santa Barbara chapter. We planned donation drives, hygiene drives, and charity runs supporting women’s health education and global access to essential supplies. We built volunteer teams and spread the word until more than 50 volunteers showed up to our first interest meeting.',
    image: photos.careLogo,
    imageAlt: 'Project CARE for Women’s Health logo',
    imageFit: 'contain',
    link: links.careSite,
    accent: 'coral',
  },
  {
    id: 'care-social',
    tag: 'Content and communications',
    title: 'Social Media Manager',
    org: 'Project CARE for Women’s Health, UCSB',
    meta: '200 followers in two weeks, now 600',
    text: 'I design our Instagram posts, including Women’s Health Wednesday, an original weekly series of educational graphics. I also create videos that grow engagement across Instagram and TikTok, and you will see me starring in, or editing, nearly every reel on the page.',
    image: photos.carePosts,
    imageAlt: 'A grid of Project CARE Instagram graphics in pink and purple',
    link: links.careInstagram,
    accent: 'navy',
  },
  {
    id: 'kin',
    tag: 'Teaching',
    title: 'Elementary School Instructor',
    org: 'Kids In Nutrition UCSB',
    meta: '30 hours',
    text: 'I developed course content and taught interactive lessons that bring nutrition to young audiences. Our classes run once a week for six weeks in elementary and middle schools, covering healthy eating, cutting food waste, and turning leftovers into delicious recipes.',
    link: links.kin,
    accent: 'palm',
  },
  {
    id: 'ed',
    tag: 'Healthcare',
    title: 'Emergency Department Volunteer',
    org: 'Santa Barbara Cottage Hospital',
    meta: '60 hours',
    text: 'I assisted patients and visitors, supported wayfinding, and helped keep clinical spaces stocked and organized.',
    accent: 'sea',
  },
]
