// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing.unit * 2
    },
    chooseTour: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 350,
        alignSelf: 'flex-end'
    },
    title: {
        alignSelf: 'center'
    }
});

export default styles;
