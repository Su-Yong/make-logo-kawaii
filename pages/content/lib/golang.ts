import { createImage, runOnPage } from '@lib/utils';

runOnPage('go.dev', () => {
  const logo = document.querySelector<HTMLAnchorElement>('header nav > a');
  if (!logo) return;

  logo.style.height = '100%';
  logo.replaceChildren(createImage('Go%20Lang/Golang.png'));
});
