import {createTheme} from '@mui/material/styles';

export const mainTheme = createTheme({
    typography: {
        fontFamily: '"Raleway", sans-serif',
        allVariants: {color: '#131214'},
        number: {fontFamily: 'Commissioner, sans-serif', fontWeight: 400},
        email: {fontFamily: 'Commissioner, sans-serif', fontWeight: 400},
        tableCell: {display: 'block', fontWeight: 500, fontSize: 14},
        success: {color: '#007C75'},
        h1: {fontWeight: 600, fontSize: 34},
        h2: {fontWeight: 700, fontSize: 24},
        h3: {fontWeight: 600, fontSize: 20},
        h5: {fontWeight: 600, fontSize: 16},
        h6: {fontWeight: 500, fontSize: 15},
        subtitle1: {fontWeight: 500, fontSize: 16},
        subtitle2: {fontWeight: 600, fontSize: 16},
        hint: {fontWeight: 500, fontSize: 12, color: '#6D6D6D'}
    },
    palette: {
        mode: 'dark',
        grey: {
            100: '#E7E7E8',
            200: '#BBBBBF',
            500: '#46464F',
            700: '#DFDFDF',
            600: '#F3F4FF'
        },
        secondary: {
            main: '#131214',
            light: '#6D6D6D',
            dark: '#484E54',
            contrastText: '#86868A'
        },
        primary: {
            contrastText: '#D4F6F4',
            main: '#7172F1',
            light: '#EBEDFF'
        },
        success: {
            main: '#9BE9C6',
            dark: '#007C75',
            light: '#36D5CB'
        },
        info: {main: '#D4F6F4', dark: '#41BFAC'},
        warning: {main: '#F6AE3E'},
        background: {
            default: '#FFFFFF',
            paper: '#FBFBFF'
        },
        action: {hover: '#EBEDFF'},
        error: {main: '#E9193B', light: '#FF8288', dark: '#E00529'}
    },
    components: {
        MuiLink: {styleOverrides: {root: {textDecoration: 'none'}}},
        MuiModal: {
            styleOverrides: {
                backdrop:
                    {
                        background:
                            'linear-gradient(175.9deg, rgba(235, 237, 255, 0.8) 3.5%, rgba(255, 255, 255, 0.8) 96.82%)'
                    }
            }
        }
    }
});
