import { createImage, runOnPage, runOnReactPage } from '@lib/utils';

runOnReactPage('www.cloudflare.com', async () => {
  const logo = document.querySelector<HTMLAnchorElement>('a.main-header-logo');
  if (!logo) return;

  logo.replaceChildren(createImage('Cloudflare/Cloudflare.png'));
});
