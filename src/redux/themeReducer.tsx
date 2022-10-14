import { Action, APPLY_THEME } from './themeActions';
import { THEMES, Theme } from './themes';

export interface State {
  theme: Theme;
}

const INITIAL_STATE: State = { theme: THEMES[0] };

export const themeReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case APPLY_THEME:
      return Object.assign({}, { theme: action.payload } );
    default:
      return state;
  }
};