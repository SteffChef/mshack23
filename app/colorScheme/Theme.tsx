import { DefaultTheme, DarkTheme } from "@react-navigation/native";

declare module "@react-navigation/native" {
  export interface DefaultTheme {
    colors: {
      accent: string;
    };
  }

  export interface DarkTheme {
    colors: {
      accent: string;
    };
  }
}

export const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#19CD91",
  },
};
export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#19CD91",
  },
};
