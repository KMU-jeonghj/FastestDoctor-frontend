import { rgba } from 'polished';
import type { Theme } from '../types/theme';

const lightColor: Theme['color'] = {
  black: '#111111',
  white: '#FFFFFF',
  primary: '#007DCA',
  secondary: '#E1EFFA',
  background: '#F9FCFF',
  gradationGreen: '#00A799',
  border: '#D8DBDE',
  secondText: '#7F7F7F',
  errorText: '#CC0000',
  hoverOverlay: '#000000',
};

const gradation = {
  primary: `linear-gradient(90deg, ${lightColor.primary} 0%, ${lightColor.gradationGreen} 100%)`,
};

const shadow = {
  default: `0px 0px 4px ${rgba(lightColor.black, 0.25)}`,
};

const createButtonScheme = (color: Theme['color']): Theme['buttonScheme'] => ({
  primary: {
    color: color.white,
    backgroundColor: color.primary,
    gradation: gradation.primary,
  },
  secondary: {
    color: color.black,
    backgroundColor: color.white,
    boxShadow: shadow.default,
  },
  option: {
    color: color.black,
    backgroundColor: color.white,
    border: color.border,
  },
  optionActive: {
    color: color.white,
    backgroundColor: color.primary,
    gradation: gradation.primary,
  },
  prev: {
    color: color.secondText,
    backgroundColor: 'transparent',
  },
  answer: {
    color: color.black,
    backgroundColor: color.background,
    boxShadow: shadow.default,
  },
});

export const light: Theme = {
  name: 'light',
  color: lightColor,
  gradation,
  shadow,
  fontSize: {
    xlarge: '2rem',
    large: '1.5rem',
    medium: '1rem',
    small: '0.875rem',
    xsmall: '0.75rem',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
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
