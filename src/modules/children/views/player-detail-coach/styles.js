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
        marginLeft: theme.spacing.unit * 2,
        color: deepPurple[500]
    },
    title: {
        color: red[500],
        textAlign: 'center',
        paddingBottom: theme.spacing.unit
    }
});

export default styles;
