// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from './typedef';
import Yellow from 'material-ui/colors/yellow';

const globalStyles = (theme: Theme) => ({
    '@global': {
        ul: {
            listStyleType: 'none',
            padding: 0,
            margin: 0
        },
        'a[href]': {
            textDecoration: 'none',
            color: theme.palette.common.white,
            transition: 'color 0.3s easy',
            '&:hover': {
                color: Yellow[400]
            }
        }
    }
});

export default globalStyles;
