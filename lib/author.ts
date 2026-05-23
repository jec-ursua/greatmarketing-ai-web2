/**
 * Client-safe AUTHOR constant. Pulled out of lib/blog.ts so client
 * components (sidebar CTA, exit-intent popup, etc.) can import it
 * without dragging in `fs`. lib/blog.ts re-exports for back-compat.
 */

export const AUTHOR = {
  name: 'Rafael Hernandez',
  role: 'CEO and Co-Founder of Great Marketing AI',
  bio: 'Rafael Hernandez is the Founder of Great Marketing AI and a former Microsoft Engineer. He specializes in performance marketing for personal injury law firms, managing over $10M in ad spend to help attorneys generate signed cases across every PI case type. His strategies focus on exclusive lead generation, AI-powered qualification, and eliminating wasted budget.',
  photo: 'https://framerusercontent.com/images/oeRSCyTr7lmwI9P0qmMTtHkAIHQ.png',
  social: {
    youtube: 'https://www.youtube.com/@rafaelhernandez_',
    instagram: 'https://www.instagram.com/rafaelhernandez.ai/',
    facebook: 'https://www.facebook.com/rafael.hernandez.184463',
    linkedin: 'https://www.linkedin.com/in/rafael-hernandez/',
  },
};
