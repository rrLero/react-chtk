// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    card: {
        display: 'flex',
        marginTop: theme.spacing.unit * 3,
        justifyContent: 'space-between'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 151,
        height: 151,
        minWidth: 151,
        alignSelf: 'center'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
    },
    link: {
        '&[href]': {
            color: theme.palette.primary.dark,
            '&:hover': {
                color: theme.palette.primary.main
            }
        }
    },
    date: {
        fontStyle: 'italic'
    }
});

export default styles;
