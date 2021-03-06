// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter, NavLink} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import MenuIcon from 'material-ui-icons/Menu';
import MenuList from '../menu-list';

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
    mobileOpen: boolean
};

type Props = OwnProps & WithProps;

class AppBarChildren extends React.Component<Props, State> {

    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes, children} = this.props;
        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar className={classes.toolbar}>
                        <NavLink to={'/'}>
                            <Avatar src={require('./logo2.png')} className={classes.avatar}/>
                        </NavLink>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}>
                            <MenuIcon/>
                        </IconButton>
                        <Hidden xsDown={true}>
                            <MenuList/>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}>
                    <MenuList column={classes.column}/>
                </Drawer>
                {children}
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(AppBarChildren));
