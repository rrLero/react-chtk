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
        alignItems: 'center',
        paddingTop: theme.spacing.unit
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
        textAlign: 'center'
    },
    avatar: {
        backgroundColor: deepPurple[500]
    },
    link: {
        '&[href]': {
            color: theme.palette.primary.main,
            '&:hover': {
                color: theme.palette.primary.dark
            }
        }
    }
});

export default styles;
