import { CSSProperties } from 'react';

export interface Theme {
  mainPage: CSSProperties;
  button: CSSProperties;
  tabs: CSSProperties,
  tabsActive: CSSProperties,
  contentSection: CSSProperties,
  scrollBar: CSSProperties,
  text: CSSProperties,
  boldText: CSSProperties
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
    fontSize: '28px',
    backgroundColor: '#756553',
    color: '#F5D4AE'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '28px',
    backgroundColor: '#362E26',
    color: '#F5D4AE'
  },
  contentSection: {
    backgroundColor: '#756553'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '20px',
    color: '#F5D4AE'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5D4AE'
  },
  scrollBar: {
    scrollbarColor: '#DBBE9C',
    scrollbarWidth: 'thin'
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
    backgroundColor: '#363636',
    fontSize: '28px'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#757575',
    fontSize: '28px'
  },
  contentSection: {
    backgroundColor: '#363636'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    color: '#F5F5F5'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5F5F5'
  },
  scrollBar: {
    scrollbarColor: '#DBDBDB',
    scrollbarWidth: 'thin'
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
    backgroundColor: '#405275',
    fontSize: '28px'
  },
  tabsActive: {
    fontFamily: 'cursive',
    fontWeight: 'bolder',
    backgroundColor: '#212636',
    color: '#F5F5F5',
    fontSize: '28px'
  },
  contentSection: {
    backgroundColor: '#405275'
  },
  text: {
    fontFamily: 'cursive',
    fontSize: '20px',
    color: '#212636'
  },
  boldText: {
    fontFamily: 'cursive',
    fontWeight: 'bolder',
    color: '#212636'
  },
  scrollBar: {
    scrollbarColor: '#889ADB',
    scrollbarWidth: 'thin'
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
    backgroundColor: '#36312A',
    color: '#F5DEBF',
    fontSize: '28px'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#756B5B',
    fontSize: '28px',
    color: '#F5DEBF',
  },
  contentSection: {
    backgroundColor: '#36312A'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '20px',
    color: '#F5DEBF'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5DEBF'
  },
  scrollBar: {
    scrollbarColor: '#DBC7AB',
    scrollbarWidth: 'thin'
  }
};

const redTheme: Theme = {
  mainPage: {
    backgroundColor: '#7e1206'
  },
  button: {
    backgroundColor: '#360803',
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#F5230C',
    fontSize: '28px'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#F5230C',
    fontSize: '28px'
  },
  contentSection: {
    backgroundColor: '#360803'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    color: '#F5230C'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F5230C'
  },
  scrollBar: {
    scrollbarColor: '#DB200B',
    scrollbarWidth: 'thin'
  }
};

export const themes: Theme[] = [whiteTheme, redTheme, yellowTheme, blueTheme, grayTheme];