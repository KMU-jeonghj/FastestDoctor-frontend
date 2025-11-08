import { rgba } from 'polished';
import type { Theme, ThemeName } from '../types/theme';

const createButtonScheme = (color: Theme['color']): Theme['buttonScheme'] => ({
  primary: {
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    color: color.black,
    backgroundColor: color.white,
    border: color.border,
  },
  option: {
    color: color.black,
    backgroundColor: color.white,
  },
  optionActive: {
    color: color.white,
    backgroundColor: color.primary,
  },
  prev: {
    color: color.secondText,
    backgroundColor: 'transparent',
  },
  answer: {
    color: color.black,
    backgroundColor: color.background,
    boxShadow: `0px 0px 4px ${rgba(color.black, 0.25)}`,
  },
});

const lightColor: Theme['color'] = {
  black: '#111111',
  white: '#FFFFFF',
  primary: '#7762FF',
  secondary: '#FFFFFF',
  background: '#F1EEFF',
  gradationGreen: '#F3F4FF',
  border: '#C7C7C7',
  secondText: '#797979',
  buttonActive: '#676767',
  errorText: '#CC0000',
  hoverOverlay: '#000000',
};

export const light: Theme = {
  name: 'light',
  color: lightColor,
  shadow: {
    default: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  fontSize: {
    xlarge: '2rem',
    large: '1.5rem',
    medium: '1rem',
    small: '0.875rem',
    xsmall: '0.75rem',
  },
  buttonSize: {
    small: { padding: '0.5rem 0.875rem' },
    medium: { padding: '1rem 5rem' },
    large: { width: '100%', padding: '1rem 0' },
  },
  buttonScheme: createButtonScheme(lightColor),
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '50px',
    round: '100px',
  },
  layout: {
    width: {
      large: '1020px',
      medium: '760px',
      small: '320px',
    },
  },
  mediaQuery: {
    mobile: '(max-width: 480px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024px)',
  },
};


export const getTheme = (): Theme => {
  return light;
};
