import { createImage, runOnReactPage } from '@lib/utils';

runOnReactPage('tailwindcss.com', () => {
  const logo =
    document.querySelector<SVGElement>('#__next header > * > * > svg') ??
    document.querySelector<SVGElement>('a[href="/"] > svg');
  if (!logo) return;

  const image = createImage('tailwind%20css/Tailwindcss.png', false);
  if (logo.parentElement?.tagName !== 'A') {
    image.classList.add('w-auto', 'h-16');
    image.style.margin = 'calc((1.25rem - 4rem) / 2)';
  } else {
    image.classList.add('w-auto', 'h-10');
    image.style.marginTop = 'calc((1.25rem - 2.5rem) / 2)';
    image.style.marginBottom = 'calc((1.25rem - 2.5rem) / 2)';
  }
  logo.replaceWith(image);
});
