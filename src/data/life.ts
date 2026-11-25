import { links } from './profile'
import { photos } from './photos'
import type { LifeItem } from './types'

export const life: readonly LifeItem[] = [
  {
    id: 'animals',
    tag: 'Animals',
    title: 'The biggest animal lover ever',
    text: 'I have two cats, three freshwater fish tanks, and one saltwater tank at home. Pictured is my son, Leo. They say cats bond to one person in each family, and I can say with total confidence that his person is me. Fun fact: a spiny flower praying mantis lives in a terrarium in my room at school. During covid I kept many species of mantids and wrote research papers on them.',
    image: photos.annieLeo,
    imageAlt: 'Annie holding her fluffy cat Leo in front of a stone fireplace',
    imagePos: '70% 50%',
    accent: 'gold',
  },
  {
    id: 'gym',
    tag: 'Fitness',
    title: 'The gym is my second home',
    text: 'Weight lifting became a true passion last year. When school got hard, the gym gave me a reason to keep showing up, and my confidence grew from staying committed to a goal. It built discipline, a growth mindset, and patience for delayed rewards. People keep asking for my routines and splits, so I plan to start posting health, gym, and lifestyle videos and grow into a fitness creator.',
    image: photos.gym,
    imageAlt: 'A bright gym floor with rows of cardio machines',
    accent: 'navy',
  },
  {
    id: 'cook',
    tag: 'Food',
    title: 'I love to cook',
    text: 'To fuel my workouts I eat a protein rich diet built on whole foods, and that curiosity turned into a passion for nutrition education. Friends and family started asking about my meals, so I began posting recipe ideas on my food account. It makes me happy that my cooking inspires people to think about their health.',
    image: photos.food,
    imageAlt: 'A grid of home cooked meals including poke bowls, steak and pasta',
    link: links.foodInstagram,
    accent: 'palm',
  },
  {
    id: 'friends',
    tag: 'Friends',
    title: 'I love my friends',
    text: 'In my free time you will catch me exploring the beaches and towns around Santa Barbara with my best friends. A big part of my confidence is that I always show up for them, whether it is a major life change, a silly debrief, or an angry rant.',
    image: photos.beachFriends,
    imageAlt: 'Two friends laughing on a Santa Barbara beach at sunset',
    accent: 'sea',
  },
  {
    id: 'art',
    tag: 'Art',
    title: 'I like to make art',
    text: 'In case the graphic design did not tip you off, I love creating art. My current favorites are sketching and acrylic painting.',
    image: photos.art,
    imageAlt: 'Colorful sketches and a painted dragon on a wooden table',
    link: links.artPortfolio,
    accent: 'coral',
  },
  {
    id: 'performing',
    tag: 'Performing',
    title: 'I grew up performing',
    text: 'I have been on stage since I was little: a ballerina for more than seven years, a varsity cheerleader for three, an actress, and a competitive singer through middle and high school. Whenever I get a moment alone, in the car, in the shower, or at home, I sing my heart out.',
    link: links.singingCover,
    accent: 'navy',
  },
  {
    id: 'family',
    tag: 'Family',
    title: 'Very close with my family',
    text: 'I feel a little left out now that my older brother Anthony has a job in Seattle, where I am from, and my younger brother Andy is finishing his last year of high school. So here is a picture I definitely did not edit myself onto of all of us at Dad’s birthday dinner. Truth be told, I miss my mom’s cooking the most.',
    image: photos.family,
    imageAlt: 'The Li family around a dinner table, with Annie edited in above',
    imagePos: '50% 30%',
    accent: 'gold',
  },
]

export const moments = [
  { src: photos.nyc, alt: 'A New York City skyline at dusk', caption: 'New York City, this past summer', rot: -3 },
  { src: photos.backyardSunset, alt: 'A bright orange sunset over the ocean', caption: 'The nightly view from my backyard', rot: 2.5 },
] as const
