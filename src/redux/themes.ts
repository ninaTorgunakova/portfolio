import { CSSProperties } from 'react';

export interface Theme {
  mainPage: CSSProperties;
  button: CSSProperties;
  tabs: CSSProperties;
  tabsActive: CSSProperties;
  contentSection: CSSProperties;
  text: CSSProperties;
  boldText: CSSProperties;
};

const whiteTheme: Theme = {
  mainPage: {
    backgroundColor: '#A89177'
  },
  button: {
    backgroundColor: '#756553',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '2em',
    backgroundColor: '#362E26',
    color: '#F5D4AE'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '2em',
    backgroundColor: '#756553',
    color: '#F5D4AE'
  },
  contentSection: {
    backgroundColor: '#756553'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#F5D4AE'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5D4AE'
  }
};

const grayTheme: Theme = {
  mainPage: {
    backgroundColor: '#323232'
  },
  button: {
    backgroundColor: '#363636',
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#757575',
    fontSize: '2em'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#363636',
    fontSize: '26px'
  },
  contentSection: {
    backgroundColor: '#363636'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '1.5em',
    color: '#F5F5F5'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5F5F5'
  }
};

const blueTheme: Theme = {
  mainPage: {
    backgroundColor: '#363D57'
  },
  button: {
    backgroundColor: '#405275',
  },
  tabs: {
    fontFamily: 'cursive',
    backgroundColor: '#212636',
    fontSize: '2em'
  },
  tabsActive: {
    fontFamily: 'cursive',
    fontWeight: 'bolder',
    backgroundColor: '#405275',
    color: '#F5F5F5',
    fontSize: '2em'
  },
  contentSection: {
    backgroundColor: '#405275'
  },
  text: {
    fontFamily: 'cursive',
    fontSize: '1.5em',
    color: '#212636'
  },
  boldText: {
    fontFamily: 'cursive',
    fontWeight: 'bolder',
    color: '#212636'
  }
};

const yellowTheme: Theme = {
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
    fontSize: '2em'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#36312A',
    fontSize: '2em',
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
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5DEBF'
  }
};

const redTheme: Theme = {
  mainPage: {
    backgroundColor: '#7e1206'
  },
  button: {
    backgroundColor: '#F5230C',
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#300803',
    fontSize: '2em',
    color: '#F5230C'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#F5230C',
    fontSize: '26px'
  },
  contentSection: {
    backgroundColor: '#300803'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '1.5em',
    color: '#F5230C'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5230C'
  }
};

export const themes: Theme[] = [whiteTheme, redTheme, yellowTheme, blueTheme, grayTheme];