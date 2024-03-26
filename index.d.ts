declare module 'responsive-hook' {
  export interface ScreenSize {
      isLargeScreen: boolean;
      width: number;
  }

  export default function useScreenSize(breakpoint: number): ScreenSize;
}