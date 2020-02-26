import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#D3FAD8',
      },
      secondary: {
        main: '#EF6C6D',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontWeightRegular: 200,
    },
  })
);

export default theme;