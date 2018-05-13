// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        alignSelf: 'center'
    },
    title: {
        textTransform: 'uppercase',
        flex: 1,
        marginRight: theme.spacing.unit * 3
    },
    date: {
        color: theme.palette.text.secondary
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    link: {
        '&[href]': {
            color: 'inherit',
            '&:hover': {
                color: theme.palette.primary.dark
            }
        }
    },
    avatarZone: {
        flexBasis: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        margin: theme.spacing.unit * 2
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
    },
    color: {
        background: 'rgba(255,235,59,0.3)'
    }
});

export default styles;
