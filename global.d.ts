export {}; // This makes it a module but still allows global augmentation

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
