// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter, NavLink} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Home';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Node} from 'react';

type OwnProps = {
    children: Node
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class AppBarAdmin extends React.Component<Props, State> {

    render() {
        const {classes, children} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <NavLink to={'/'}>
                                <MenuIcon />
                            </NavLink>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            ADMIN
                        </Typography>
                        <Button color="inherit">
                            <NavLink to={'/admin/players'}>Players</NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to={'/admin/tours'}>Tournaments</NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to={'/admin/coaches'}>Coaches</NavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
                {children}
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(AppBarAdmin));
