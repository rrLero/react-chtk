// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';
// import deepOrange from 'material-ui/colors/deepOrange';
// import deepPurple from 'material-ui/colors/deepPurple';

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
        backgroundColor: '#ffc108'
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#3ab7a6'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    listItem: {
        [theme.breakpoints.up('md')]: {
            width: '33.3%'
        },
        [theme.breakpoints.between('xs', 'md')]: {
            width: '50%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    link: {
        '&[href]': {
            color: 'inherit',
            '&:hover': {
                color: theme.palette.primary.dark
            }
        }
    }
});

export default styles;
