import { CSSProperties } from 'react';

export interface Theme {
  mainPage: CSSProperties;
  button: CSSProperties;
  tabs: CSSProperties;
  tabsActive: CSSProperties;
  contentSection: CSSProperties;
  text: CSSProperties;
  boldText: CSSProperties;
  arrow: CSSProperties;
  imageUrl: string;
};

const WHITE_THEME: Theme = {
  mainPage: {
    backgroundColor: '#A89177'
  },
  button: {
    backgroundColor: '#5C4D3C',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '1.8em',
    backgroundColor: '#362E26',
    color: '#F5D4AE'
  },
  arrow: {
    borderColor: 'black'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
    backgroundColor: '#5C4D3C',
    color: '#F5D4AE'
  },
  contentSection: {
    backgroundColor: '#5C4D3C'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1em',
    color: '#F5D4AE'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5D4AE'
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
    fontSize: '1em',
    color: '#000000',
    fontWeight: 'lighter'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000'
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
    fontSize: '1em',
    color: '#000000',
    fontWeight: '600'
  },
  arrow: {
    borderColor: 'black'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000'
  },
  imageUrl: 'photos/olive.webp'
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
    fontSize: '1em',
    color: '#000000',
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000'
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
    fontSize: '1em',
    color: '#F5F5F5'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5F5F5'
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
    fontSize: '1em',
    color: '#000000'
  },
  arrow: {
    borderColor: 'black'
  },
  boldText: {
    fontFamily: 'Inter',
    fontWeight: 'bolder',
    color: '#000000'
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
    fontSize: '1em',
    color: '#F5DEBF'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5DEBF'
  },
  imageUrl: 'photos/yellow.webp'
};

const RED_THEME: Theme = {
  mainPage: {
    backgroundColor: '#B51200'
  },
  button: {
    backgroundColor: '#370000',
  },
  arrow: {
    borderColor: 'white'
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#922B19',
    fontSize: '1.8em',
    color: '#F5B3AB'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#370000',
    fontSize: '1.8em',
    color: '#F5B3AB'
  },
  contentSection: {
    backgroundColor: '#370000'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '1em',
    color: '#F5B3AB'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5B3AB'
  },
  imageUrl: 'photos/red.webp'
};

export const THEMES: Theme[] = [PINK_THEME, GRAY_THEME, BLUE_THEME, RED_THEME, POWDERY_THEME, YELLOW_THEME, WHITE_THEME, OLIVE_THEME];
export const IMAGES: {url: string}[] = THEMES.map(theme => ({url: theme.imageUrl}));
