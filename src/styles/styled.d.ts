import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      text: string;
      textLight: string;
      textMuted: string;
      primaryDark: string;
    };
    fonts: {
      primary: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
