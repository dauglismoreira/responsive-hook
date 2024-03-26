declare module 'responsive-hook' {
  export interface ScreenSize {
      isLargeScreen: boolean;
      width: number;
  }

  export { default as useScreenSize } from './src/hooks/useScreenSize';
}