import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { PiMoonStarsFill } from "react-icons/pi";
import { FiSun } from "react-icons/fi";

const ThemeManager = ({ children, setIsDarkMode, isDarkMode }) => {
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
        
            primary: {
        main: '#ff52',
    },
    });

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button
                sx={{
                    position: 'absolute',
                    top: 89,
                    right: 5,
                    backgroundColor: isDarkMode ? 'grey-800' : 'grey-500',
                    color: isDarkMode ? 'black' : 'white',
                }}
                variant="contained"
                onClick={toggleTheme}>
                {isDarkMode ? <FiSun />
                    : <PiMoonStarsFill />
                }
            </Button>
            {children}
        </ThemeProvider>
    );
};



export default ThemeManager;