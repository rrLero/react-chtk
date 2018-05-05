// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& ~ div': {
            marginTop: theme.spacing.unit * 2
        }
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 30,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[8],
        padding: theme.spacing.unit * 4,
        top: `calc(50% - ${theme.spacing.unit * 4 / 2}px)`,
        left: `calc(50% - ${theme.spacing.unit * 30 / 2}px)`
    },
    page: {
        padding: theme.spacing.unit * 2
    }
});

export default styles;
