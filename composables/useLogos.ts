import type { Logo } from '~/types'

export const useLogos = () => {
  // Create two rows of logos
  const logos: Logo[][] = [
    [
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+1', alt: 'Company Logo 1' },
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+2', alt: 'Company Logo 2' },
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+3', alt: 'Company Logo 3' },
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+4', alt: 'Company Logo 4' }
    ],
    [
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+5', alt: 'Company Logo 5' },
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+6', alt: 'Company Logo 6' },
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+7', alt: 'Company Logo 7' },
      { url: 'https://placehold.co/100x100/222/fff?text=Logo+8', alt: 'Company Logo 8' }
    ]
  ]

  return {
    logos
  }
}