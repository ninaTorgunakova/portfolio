import { Theme } from "./themes";

export interface Action {
  type: string;
  payload: Theme;
};

export const APPLY_THEME = "APPLY_THEME";

export const applyTheme = (theme: Theme) => {
  const action: Action = {
    type: APPLY_THEME,
    payload: theme
  };
  return action;
};