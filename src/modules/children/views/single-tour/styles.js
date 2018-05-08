// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';
import deepOrange from 'material-ui/colors/deepOrange';
import deepPurple from 'material-ui/colors/deepPurple';

const styles = (theme: Theme) => ({
    root: {
        marginTop: theme.spacing.unit * 3
    },
    title: {
        textTransform: 'uppercase',
        flex: 1
    },
    date: {
        color: theme.palette.text.secondary
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 60,
        height: 60
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500]
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500]
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    listItem: {
        width: '33.3%'
    }
});

export default styles;
