import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainText: string;
    };
    typography: {
      mainFontFamily: string;
      regularFontFamily: string;
      superSize: string;
      mainSize: string;
      titleSize: string;
      secondaryTitleSize: string;
      regularSize: string;
    };
  }
}
