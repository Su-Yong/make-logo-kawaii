export const BASE_URL = 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/';
export const toURL = (url: string) => `${BASE_URL}${url}`;

type Removable = (() => void) | void | Promise<(() => void) | void>;
export const runOnPage = async (url: string, fn: () => Removable) => {
  let cleanUp: (() => void) | null = null;
  if (window.location.host === url) {
    const cleanUpFn = await fn();
    if (cleanUpFn) cleanUp = cleanUpFn;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.navigation.addEventListener('navigate', async () => {
    cleanUp?.();
    if (window.location.host === url) {
      const cleanUpFn = await fn();
      if (cleanUpFn) cleanUp = cleanUpFn;
    }
  });
};

export const runOnReactPage = (url: string, fn: () => Removable) => {
  let cleanUp: (() => void) | null = null;
  let ignore = false;

  const runner = async () => {
    if (window.location.host !== url) return;
    cleanUp?.();
    ignore = true;
    const cleanUpFn = await fn();
    if (cleanUpFn) cleanUp = cleanUpFn;
  };

  const observer = new MutationObserver(() => {
    if (window.location.host !== url) return;
    if (ignore) {
      ignore = false;
      return;
    }

    runner();
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.navigation.addEventListener('navigate', runner);
  observer.observe(document.body, { childList: true, subtree: true });
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
