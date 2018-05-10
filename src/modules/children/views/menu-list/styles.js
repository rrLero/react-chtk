// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
        padding: 0
    },
    flex: {
        flex: 1
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    item: {
        padding: 0
    },
    text: {
        [theme.breakpoints.up('xs')]: {
            color: theme.palette.common.white
        },
        [theme.breakpoints.down('xs')]: {
            color: theme.palette.primary.dark
        }
    }
});

export default styles;
