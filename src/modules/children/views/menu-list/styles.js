// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
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
        minWidth: 'unset'
    },
    text: {
        '&[href]': {
            [theme.breakpoints.up('xs')]: {
                color: theme.palette.common.white
            },
            [theme.breakpoints.down('xs')]: {
                color: theme.palette.primary.dark
            },
            '&:hover': {
                [theme.breakpoints.down('xs')]: {
                    color: theme.palette.primary.light
                }
            }
        }
    },
    active: {
        background: 'rgba(0,0,0,0.1)'
    }
});

export default styles;
