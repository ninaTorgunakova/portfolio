import { Action, APPLY_THEME } from './themeActions';
import { themes, Theme } from './themes';

export interface State {
  theme: Theme;
}

const initialState: State = {
  theme: themes[0]
};

export const themeReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case APPLY_THEME:
      return Object.assign({}, { theme: action.payload } );
    default:
      return state;
  }
};