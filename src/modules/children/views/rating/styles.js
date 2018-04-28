// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        margin: theme.spacing.unit * 3,
        overflowX: 'auto',
        flexGrow: 1
    },
    table: {

    },
    title: {
        padding: theme.spacing.unit * 4
    },
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default styles;
