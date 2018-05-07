// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
        overflowX: 'auto',
        flexGrow: 1,
        alignSelf: 'stretch',
        position: 'relative'
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
    },
    hour: {
        height: 60,
        position: 'relative',
        color: theme.palette.text.secondary
    },
    schedule: {
        position: 'absolute',
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme.shadows[17]
    },
    courtsNames: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around'
    },
    timeCourts: {
        display: 'flex',
        width: '100%'
    },
    hoursBlock: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2
    },
    divider: {
        position: 'absolute'
    }
});

export default styles;
