// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {

    },
    table: {

    },
    link: {
        '&[href]': {
            color: 'inherit',
            '&:hover': {
                color: theme.palette.primary.dark
            }
        }
    }
});

export default styles;
