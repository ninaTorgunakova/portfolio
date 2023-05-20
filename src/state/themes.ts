import { atom } from 'nanostores';
import { CSSProperties } from 'react';

export interface Theme {
  mainPage: CSSProperties;
  button: CSSProperties;
  tabs: CSSProperties;
  tabsActive: CSSProperties;
  contentSection: CSSProperties;
  text: CSSProperties;
  link: CSSProperties;
  boldText: CSSProperties;
  arrow: CSSProperties;
  imageUrl: string;
};

const WHITE_THEME: Theme = {
  mainPage: {
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: '#B3A89E',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '1.8em',
    backgroundColor: '#EBDFD5',
    color: '#000000'
  },
  arrow: {
    borderColor: 'black'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
    backgroundColor: '#B3A89E',
    color: '#000000'
  },
  contentSection: {
    backgroundColor: '#B3A89E'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#000000'
  },
  link: {
    fontFamily: 'garamond, serif',
    color: '#000000'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/white.webp'
};

const PINK_THEME: Theme = {
  mainPage: {
    backgroundColor: '#CD0074'
  },
  button: {
    backgroundColor: '#EE6B9E',
  },
  arrow: {
    borderColor: 'black'
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '1.8em',
    backgroundColor: '#EE6B9E',
    color: '#000000'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
    backgroundColor: '#EE6B9E',
    color: '#000000'
  },
  contentSection: {
    backgroundColor: '#EE6B9E'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#000000',
    fontWeight: 'lighter'
  },
  link: {
    fontFamily: 'garamond, serif',
    color: '#000000',
    fontWeight: 'lighter'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/pink.webp'
};

const OLIVE_THEME: Theme = {
  mainPage: {
    backgroundColor: '#BF9230'
  },
  button: {
    backgroundColor: '#A67100',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '1.8em',
    backgroundColor: '#A67100',
    color: '#000000'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
    backgroundColor: '#A67100',
    color: '#000000'
  },
  contentSection: {
    backgroundColor: '#A67100'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#000000',
    fontWeight: 'lighter'
  },
  link: {
    fontFamily: 'garamond, serif',
    color: '#000000',
    fontWeight: 'lighter'
  },
  arrow: {
    borderColor: 'black'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/olive.jpg'
};

const POWDERY_THEME: Theme = {
  mainPage: {
    backgroundColor: '#FF5D40'
  },
  button: {
    backgroundColor: '#FFB293',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '1.8em',
    backgroundColor: '#FFB293',
    color: '#000000'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
    backgroundColor: '#FFB293',
    color: '#000000'
  },
  contentSection: {
    backgroundColor: '#FFB293'
  },
  arrow: {
    borderColor: 'black'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#000000',
  },
  link: {
    fontFamily: 'garamond, serif',
    color: '#000000',
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/powdery.webp'
};

const GRAY_THEME: Theme = {
  mainPage: {
    backgroundColor: '#323232'
  },
  button: {
    backgroundColor: '#363636'
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#5C5C5C',
    fontSize: '1.8em',
    color: '#F5F5F5'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#363636',
    fontSize: '1.8em',
    color: '#F5F5F5'
  },
  arrow: {
    borderColor: 'white'
  },
  contentSection: {
    backgroundColor: '#363636'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '1.5em',
    color: '#F5F5F5'
  },
  link: {
    fontFamily: 'garamond, serif',
    color: '#F5F5F5',
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5F5F5',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/gray.webp'
};

const BLUE_THEME: Theme = {
  mainPage: {
    backgroundColor: '#363D57'
  },
  button: {
    backgroundColor: '#7283A9',
  },
  tabs: {
    fontFamily: 'Inter',
    color: '#F5F5F5',
    backgroundColor: '#212636',
    fontSize: '1.8em'
  },
  tabsActive: {
    fontFamily: 'Inter',
    fontWeight: 'bolder',
    backgroundColor: '#7283A9',
    color: '#F5F5F5',
    fontSize: '1.8em'
  },
  contentSection: {
    backgroundColor: '#7283A9'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: '1.5em',
    color: '#000000'
  },
  link: {
    fontFamily: 'Inter',
    color: '#000000',
  },
  arrow: {
    borderColor: 'black'
  },
  boldText: {
    fontFamily: 'Inter',
    fontWeight: 'bolder',
    color: '#000000',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/blue.webp'
};

const YELLOW_THEME: Theme = {
  mainPage: {
    backgroundColor: '#A3947F'
  },
  button: {
    backgroundColor: '#36312A',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    backgroundColor: '#756B5B',
    color: '#F5DEBF',
    fontSize: '1.8em'
  },
  arrow: {
    borderColor: 'black'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#36312A',
    fontSize: '1.8em',
    color: '#F5DEBF',
  },
  contentSection: {
    backgroundColor: '#36312A'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#F5DEBF'
  },
  link: {
    fontFamily: 'garamond, serif',
    color: '#F5DEBF',
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5DEBF',
    fontSize: '1.5em',
  },
  imageUrl: 'photos/yellow.jpg'
};

export const THEMES: Theme[] = [WHITE_THEME, PINK_THEME, BLUE_THEME, POWDERY_THEME, YELLOW_THEME, GRAY_THEME, OLIVE_THEME];
export const IMAGES: {url: string}[] = THEMES.map(theme => ({url: theme.imageUrl}));

export const $theme = atom<Theme>(THEMES[0]);
