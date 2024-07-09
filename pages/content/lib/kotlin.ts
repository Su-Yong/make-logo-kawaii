import { createImage, runOnPage } from '@lib/utils';

runOnPage('kotlinlang.org', async () => {
  const logo = document.querySelector<HTMLAnchorElement>('header .ktl-logo-large-module_link_AOGas');
  if (!logo) return;
  logo.replaceChildren(createImage('Kotlin/Kotlin.png'));
  if (logo.parentElement) logo.parentElement.style.height = '100%';
  logo.style.height = '100%';
  if (logo.nextElementSibling) logo.nextElementSibling.remove();
});
