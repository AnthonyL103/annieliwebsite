import { photos } from './photos'
import type { Pitch } from './types'

export const pitches: readonly Pitch[] = [
  {
    id: 'tebra',
    eyebrow: 'Product Pitch One',
    title: 'Bulk Patient Portal Invitations for Tebra',
    byline: 'An independent product concept by Annie Li',
    summary:
      'A proposed workflow that lets clinic staff filter patients by portal activation status, then send invitations and reminders to everyone who needs one in a single batch.',
    story: [
      {
        label: 'Context',
        text: 'Coastal Well Woman runs almost entirely on Tebra, a platform for records, scheduling, billing, and secure messages. I use it every day, and I noticed that several routine tasks take more steps than they should.',
      },
      {
        label: 'The problem',
        text: 'To send a portal invitation I open each chart, check Demographics, and invite the patient by hand. Tebra cannot filter by activation, and its “active” label only means an account exists, not that the patient ever logged in. Patients without portal access end up calling, and the office phone stacks up.',
      },
      {
        label: 'Proposed workflow',
        text: 'Add an Activation Status filter so staff can separate activated patients from the ones who still need an invitation. Inside the unactivated group, staff see who was never invited and who needs a reminder, select the eligible patients, review the batch, and send.',
      },
      {
        label: 'How I would test it',
        text: 'Ask a front desk team member to follow up with six fictional patients: new patients, returning patients, one activated account, one opt out, and one missing email. Compare time spent, charts opened, and whether each patient received the intended action.',
      },
    ],
    featuresTitle: 'Key features',
    features: [
      'An Activation Status filter that sorts unactivated patients from activated ones.',
      'Invited and Reminder labels, so staff can send a first invitation or a reminder to the right people.',
      'A Review Invitations step that adds one click but catches surprises, like patients who opted out or have no way to be contacted.',
    ],
    tags: ['Product thinking', 'Workflow design', 'Mockups', 'Testing plan', 'Healthcare operations'],
    figures: [
      {
        src: photos.pitchFilter,
        alt: 'Mockup of a Tebra portal invitations screen filtered to patients who are not activated',
        caption: 'Proposed: filter the patient list and select eligible recipients.',
      },
      {
        src: photos.tebraPortal,
        alt: 'Tebra patient chart showing the manual portal invitation step',
        caption: 'Today: staff check and invite one chart at a time.',
      },
      {
        src: photos.pitchReview,
        alt: 'Mockup of a review screen listing who will receive a first invitation, a reminder, or be skipped',
        caption: 'Proposed: confirm recipients and see why others are skipped.',
      },
    ],
    chip: 'Built from daily clinic experience',
    disclaimer: 'Original content, not affiliated with Tebra.',
  },
  {
    id: 'creator-picks',
    eyebrow: 'Product Pitch Two',
    title: 'Wirecutter Creator Picks',
    byline: 'An independent product concept by Annie Li',
    summary:
      'A separate, shareable site where creators publish firsthand product comparisons and keep their favorite gear one tap away from their bio.',
    story: [
      {
        label: 'Context',
        text: 'Friends and followers who watched my fitness journey kept asking what products I recommend at the gym. After exploring Wirecutter, I wondered how its approach could reach niche creators, a bit like an Amazon wishlist paired with Wirecutter’s active comparison articles.',
      },
      {
        label: 'The concept',
        text: 'Creators sign up, choose a niche, and publish short comparisons under a My Reviews tab. Product names link to purchase sites, just like Wirecutter, and a Product Favorites page gives followers one convenient place to find every pick.',
      },
      {
        label: 'How it earns revenue',
        text: 'Creators could earn a commission on qualifying purchases through affiliate links. Reviews would disclose affiliate links, gifts, and sponsorships, and creator picks would stay clearly attributed and visually separate from Wirecutter’s editorial picks.',
      },
      {
        label: 'How I would test it',
        text: 'Start with a small fitness creator pilot. Watch whether creators can publish a comparison and add disclosures without help. Ask followers to find a pick, explain why it was chosen, and say who recommended it. Track review completion and clicks to products as separate signals.',
      },
    ],
    featuresTitle: 'What creators get',
    features: [
      'A My Reviews tab for short comparisons written from real, firsthand experience.',
      'A Product Favorites page that gathers every recommended product and its shopping link.',
      'Built in disclosures for affiliate links, gifts, and sponsorships.',
    ],
    tags: ['Product concept', 'Creator economy', 'Information design', 'Affiliate revenue', 'Pilot testing'],
    figures: [
      {
        src: photos.creatorReviews,
        alt: 'Blueprint of the Creator Picks main page with a My Reviews tab',
        caption: 'The main page: short comparisons under My Reviews.',
      },
      {
        src: photos.creatorComparison,
        alt: 'Sample comparison of Bose QuietComfort and AirPods Max for lifting',
        caption: 'A sample review from my own time as a weight lifter.',
      },
      {
        src: photos.creatorFavorites,
        alt: 'Product Favorites page listing creator recommended products with shopping links',
        caption: 'Product Favorites: every pick, one tap from a bio.',
      },
    ],
    chip: 'Inspired by my own gym routine',
    disclaimer: 'An independent concept, not affiliated with Wirecutter.',
  },
]
