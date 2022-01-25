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

const whiteTheme: Theme = {
  mainPage: {
    backgroundColor: '#A89177'
  },
  button: {
    backgroundColor: '#756553',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    backgroundColor: '#756553',
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#362E26',
  },
  contentSection: {
    backgroundColor: '#756553'
  },
  headers: {
    fontFamily: 'garamond, serif',
    fontSize: '18px',
    color: '#F5D4AE'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '16px',
    color: '#F5D4AE'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5D4AE'
  },
  links: {
    fontFamily: 'garamond, serif',
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
    fontFamily: 'garamond, serif',
    backgroundColor: '#363636',
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#757575',
  },
  contentSection: {
    backgroundColor: '#363636'
  },
  headers: {
    fontFamily: 'garamond, serif',
    fontSize: '18px',
    color: '#F5F5F5'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '16px',
    color: '#F5F5F5'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5F5F5'
  },
  links: {
    fontFamily: 'garamond, serif',
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
    fontFamily: 'garamond, serif',
    backgroundColor: '#405275',
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#212636',
  },
  contentSection: {
    backgroundColor: '#405275'
  },
  headers: {
    fontFamily: 'garamond, serif',
    fontSize: '18px',
    color: '#212636'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '16px',
    color: '#212636'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#212636'
  },
  links: {
    fontFamily: 'garamond, serif',
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
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#756B5B',
  },
  contentSection: {
    backgroundColor: '#36312A'
  },
  headers: {
    fontFamily: 'garamond, serif',
    fontSize: '18px',
    color: '#F5DEBF'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '16px',
    color: '#F5DEBF'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5DEBF'
  },
  links: {
    fontFamily: 'garamond, serif',
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
    fontFamily: 'garamond, serif',
    backgroundColor: '#360803',
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    backgroundColor: '#751106',
  },
  contentSection: {
    backgroundColor: '#360803'
  },
  headers: {
    fontFamily: 'garamond, serif',
    fontSize: '18px',
    color: '#F5230C'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '16px',
    color: '#F5230C'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5230C'
  },
  links: {
    fontFamily: 'garamond, serif',
    color: '#F5230C'
  },
  scrollBar: {
    scrollbarColor: '#DB200B',
    scrollbarWidth: 'thin'
  }
};

export const themes: Theme[] = [whiteTheme, redTheme, yellowTheme, blueTheme, grayTheme];