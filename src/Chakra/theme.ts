import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: '#f7c5c5',
      900: '#1439ad',
      200: 'red',
    },
    logout: 'red',
  },
});

export default theme;