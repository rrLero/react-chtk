// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter, NavLink} from 'react-router-dom';

import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

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

class MenuListChildren extends React.Component<Props, State> {

    render() {
        const {classes} = this.props;
        return (
            <List className={classes.root}>
                <div className={classes.toolbar} />
                <Divider />
                <ListItem button={true} component={props => <NavLink to="/" {...props} />}>
                    <ListItemText primary="Главная" className={classes.item} classes={{primary: classes.text}}/>
                </ListItem>
                <Divider />
                <ListItem button={true} component={props => <NavLink to="/children/schedule" {...props} />}>
                    <ListItemText primary="Расписание" className={classes.item} classes={{primary: classes.text}}/>
                </ListItem>
                <ListItem button={true} component={props => <NavLink to={'/children/tours'} {...props} />}>
                    <ListItemText primary="Турниры" className={classes.item} classes={{primary: classes.text}}/>
                </ListItem>
                <ListItem button={true} component={props => <NavLink to={'/children/rating'} {...props} />}>
                    <ListItemText primary="Рейтинг" className={classes.item} classes={{primary: classes.text}}/>
                </ListItem>
            </List>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(MenuListChildren));
