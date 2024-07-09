import { createImage, runOnPage } from '@lib/utils';

runOnPage('nodejs.org', async () => {
  queueMicrotask(() => {
    const logo = document.querySelector<HTMLAnchorElement>('nav a.NavBar_nodeIconWrapper__tDLur');
    if (!logo) return;

    logo.replaceChildren(createImage('Node.js/Node.js.png'));
  });
});