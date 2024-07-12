import { createImage, runOnPage, runOnReactPage } from '@lib/utils';

runOnReactPage('www.figma.com', () => {
  const logo = document.querySelector<SVGElement>('header a[href^="https://www.figma.com"] svg');
  if (!logo) return;

  const image = createImage('Figma/Figma.png');
  image.style.height = '40px';
  logo.replaceWith(image);
});
