// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        margin: theme.spacing.unit * 3,
        overflowX: 'auto',
        flexGrow: 1,
        alignSelf: 'stretch'
    },
    table: {

    },
    time: {

    },
    title: {
        padding: theme.spacing.unit * 4
    },
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing.unit * 3
    },
    link: {
        color: theme.palette.common.black,
        '&[href]': {
            color: theme.palette.primary.main
        }
    }

});

export default styles;
