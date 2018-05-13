// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const drawerWidth = 150;

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 7
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    navIconHide: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            position: 'relative'
        }
    },
    column: {
        flexDirection: 'column'
    },
    avatar: {
        [theme.breakpoints.up('xs')]: {
            width: 60,
            height: 60
        },
        [theme.breakpoints.down('xs')]: {
            width: 50,
            height: 50
        }
    }
});

export default styles;
