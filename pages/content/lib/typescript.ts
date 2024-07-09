import { createImage, runOnPage } from '@lib/utils';

runOnPage('www.typescriptlang.org', async () => {
  let cleanUp: (() => void) | null = null;
  queueMicrotask(() => {

    const logo = document.querySelector<HTMLAnchorElement>('#home-page-logo');
    if (!logo) return;

    const observer = new MutationObserver(() => {
      if (logo.firstElementChild?.tagName === 'IMG') return;

      const newLogo = document.querySelector<HTMLAnchorElement>('#home-page-logo');
      if (!newLogo) return;

      observer.observe(newLogo, { childList: true });
      cleanUp = () => observer.disconnect();

      newLogo.style.width = 'fit-content';
      newLogo.replaceChildren(createImage('TypeScript/TypeScript.png'));

      console.log('mutation');
    });
    observer.observe(logo, { childList: true });
    cleanUp = () => observer.disconnect();
    console.log('replace');

    logo.style.width = 'fit-content';
    logo.replaceChildren(createImage('TypeScript/TypeScript.png'));
  });

  return () => cleanUp?.();
});
