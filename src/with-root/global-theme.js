// @flow

import {createMuiTheme} from 'material-ui/styles/index';
import * as colors from 'material-ui/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: colors.blue[300],
            main: colors.blue[500],
            dark: colors.blue[700]
        },
        secondary: {
            light: colors.green[300],
            main: colors.green[500],
            dark: colors.green[700]
        }
    },
    myGlobals: {
        startColor: '#333333',
        startReversedColor: '#ffffff',
        mainFontSize: 16,
        drawerWidth: 240
    }
});

export default theme;
