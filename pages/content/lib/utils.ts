export const BASE_URL = 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/';
export const toURL = (url: string) => `${BASE_URL}${url}`;
export const runOnPage = (url: string, fn: () => Promise<(() => void) | void>) => {
  let cleanUp: (() => void) | null = null;
  console.log('runOnPage', window.location.host, url);
  if (window.location.host === url) {
    fn().then((cleanUpFn) => cleanUpFn ? cleanUp = cleanUpFn : void 0);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.navigation.addEventListener('navigate', () => {
    console.log('runOnPage', window.location.host, url);
    cleanUp?.();
    if (window.location.host === url) {
      fn().then((cleanUpFn) => cleanUpFn ? cleanUp = cleanUpFn : void 0);
    }
  });
};

export const wait = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));
export const createImage = (url: string) => {
  const image = document.createElement('img');
  image.src = toURL(url);
  image.style.width = '100%';
  image.style.height = '100%';
  image.style.objectFit = 'contain';

  return image;
};
