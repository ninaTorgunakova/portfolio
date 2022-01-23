import { Action, APPLY_THEME } from './themeActions';
import { firstTheme, Theme } from './themes';

export interface State {
  theme: Theme;
}

const initialState: State = {
  theme: firstTheme
};

export const themeReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case APPLY_THEME:
      return Object.assign({}, { theme: action.payload } );
    default:
      return state;
  }
};