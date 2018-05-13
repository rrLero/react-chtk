// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing.unit * 2,
        alignItems: 'center'
    },
    chooseTour: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 250,
        alignSelf: 'flex-end'
    },
    title: {
        alignSelf: 'center'
    },
    news: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: 700
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 950
        }
    }
});

export default styles;
