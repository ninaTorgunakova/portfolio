import { CSSProperties } from 'react';

export interface Theme {
  mainPage: CSSProperties;
  button: CSSProperties;
  tabs: CSSProperties,
  tabsActive: CSSProperties,
  contentSection: CSSProperties,
  scrollBar: CSSProperties,
  headers: CSSProperties,
  text: CSSProperties,
  boldText: CSSProperties,
  links: CSSProperties
};

export const firstTheme: Theme = {
  mainPage: {
    backgroundColor: '#9F9FB3'
  },
  button: {
    backgroundColor: '#FFFFFF',
  },
  tabs: {
    backgroundColor: '#FFFFFF',
    fontStyle: 'italic'
  },
  tabsActive: {
    backgroundColor: '#77778b',
    fontStyle: 'normal'
  },
  contentSection: {
    backgroundColor: '#ABACAB'
  },
  headers: {
    fontSize: '18px',
    color: '#000000'
  },
  text: {
    fontSize: '16px',
    color: '#000000'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#235423'
  },
  links: {
    textDecorationColor: 'blue',
    color: 'blue'
  },
  scrollBar: {
    scrollbarColor: 'red',
    scrollbarWidth: 'thin'
  }
};

export const secondTheme: Theme = {
  mainPage: {
    backgroundColor: '#AAAAAA'
  },
  button: {
    backgroundColor: '#9F9FB3',
  },
  tabs: {
    backgroundColor: '#77778b',
    fontStyle: 'normal'
  },
  tabsActive: {
    backgroundColor: '#FFFFFF',
    fontStyle: 'italic'
  },
  contentSection: {
    backgroundColor: '#FFFFAB'
  },
  headers: {
    fontSize: '20px',
    color: '#FFFFFF'
  },
  text: {
    fontSize: '14px',
    color: '#77778b'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#77778b'
  },
  links: {
    textDecorationColor: 'red',
    color: 'gray'
  },
  scrollBar: {
    scrollbarColor: 'blue',
    scrollbarWidth: 'auto'
  }
};