// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../../../with-root/typedef';

const styles = (theme: Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    editZone: {
        padding: theme.spacing.unit,
        margin: theme.spacing.unit
    },
    date: {
        width: 250
    },
    textField: {
        '& ~ div': {
            marginLeft: theme.spacing.unit
        }
    },
    menu: {
        width: 200
    },
    update: {
        alignSelf: 'center',
        marginLeft: theme.spacing.unit
    }
});

export default styles;
