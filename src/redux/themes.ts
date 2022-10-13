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
    fontSize: '1.8em',
    backgroundColor: '#362E26',
    color: '#F5D4AE'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
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

const pinkTheme: Theme = {
  mainPage: {
    backgroundColor: '#CD0074'
  },
  button: {
    backgroundColor: '#EE6B9E',
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
    color: '#900038',
    fontWeight: 'lighter'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#900038'
  }
};

const oliveTheme: Theme = {
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
    fontWeight: '700'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000'
  }
};

const powderyTheme: Theme = {
  mainPage: {
    backgroundColor: '#FF5D40'
  },
  button: {
    backgroundColor: '#BF4630',
  },
  tabs: {
    fontFamily: 'garamond, serif',
    fontSize: '1.8em',
    backgroundColor: '#BF4630',
    color: '#000000'
  },
  tabsActive: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    fontSize: '1.8em',
    backgroundColor: '#BF4630',
    color: '#000000'
  },
  contentSection: {
    backgroundColor: '#BF4630'
  },
  text: {
    fontFamily: 'garamond, serif',
    fontSize: '1.5em',
    color: '#000000',
    fontWeight: 'lighter'
  },
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#000000'
  }
};

const grayTheme: Theme = {
  mainPage: {
    backgroundColor: '#323232'
  },
  button: {
    backgroundColor: '#363636'
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#757575',
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
    fontFamily: 'Inter',
    backgroundColor: '#212636',
    fontSize: '1.8em'
  },
  tabsActive: {
    fontFamily: 'Inter',
    fontWeight: 'bolder',
    backgroundColor: '#405275',
    color: '#F5F5F5',
    fontSize: '1.8em'
  },
  contentSection: {
    backgroundColor: '#405275'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: '1.5em',
    color: '#212636'
  },
  boldText: {
    fontFamily: 'Inter',
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
    fontSize: '1.8em'
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
  boldText: {
    fontFamily: 'garamond, serif',
    fontWeight: 'bolder',
    color: '#F5DEBF'
  }
};

const redTheme: Theme = {
  mainPage: {
    backgroundColor: '#B51200'
  },
  button: {
    backgroundColor: '#520800',
  },
  tabs: {
    fontFamily: 'sans-serif',
    backgroundColor: '#750C00',
    fontSize: '1.8em',
    color: '#F51A00'
  },
  tabsActive: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    backgroundColor: '#520800',
    fontSize: '1.8em',
    color: '#F51A00'
  },
  contentSection: {
    backgroundColor: '#520800'
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: '1.5em',
    color: '#F51A00'
  },
  boldText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    color: '#F51A00'
  }
};

export const themes: Theme[] = [whiteTheme, powderyTheme, redTheme, yellowTheme, blueTheme, grayTheme, pinkTheme, oliveTheme];
