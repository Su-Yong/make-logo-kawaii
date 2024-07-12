import { createImage, runOnPage, runOnReactPage } from '@lib/utils';

runOnReactPage('www.typescriptlang.org', async () => {
  const logo = document.querySelector<HTMLAnchorElement>('#home-page-logo');
  if (!logo) return;

  logo.style.width = 'fit-content';
  logo.replaceChildren(createImage('TypeScript/TypeScript.png'));
});
