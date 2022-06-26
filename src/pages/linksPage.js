import { createLinks } from '../views/linksView.js';

export const initLinks = (links) => {
  const linkElement = createLinks(links);

  return linkElement;
};
