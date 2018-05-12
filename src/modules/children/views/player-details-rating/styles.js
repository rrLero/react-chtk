// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';
import red from 'material-ui/colors/red';
import deepPurple from 'material-ui/colors/deepPurple';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing.unit * 2
    },
    type: {
        display: 'flex',
        alignItems: 'center'
    },
    typeTitle: {
        marginRight: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    },
    typeText: {
        color: theme.palette.primary.dark
    },
    title: {
        color: red[500],
        textAlign: 'center',
        paddingBottom: theme.spacing.unit
    },
    avatar: {
        backgroundColor: deepPurple[500]
    }
});

export default styles;
