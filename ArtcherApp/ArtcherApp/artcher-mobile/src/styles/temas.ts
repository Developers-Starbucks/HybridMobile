import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
    colors: {
        gray: { 300: '#979A9A', 400: '#ACB9B9' }, 
        blue: { 500: '#0D0F36', 800: '#232D46', 1000: '#69D2CD', 100: '#B9F1D6' },
        white: { 100: '#FFFFFF', 600: '#F1F6CE' },
        black: { 100: '#000000' },
        yellow: '#FFD600'
    }, 

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 32,
        big: 46
    }
})