// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter, NavLink} from 'react-router-dom';
import classNames from 'classnames';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import styles from './styles';

import type {Node} from 'react';

type OwnProps = {
    children: Node,
    column: {
        flexDirection: 'string'
    }
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class MenuListChildren extends React.Component<Props, State> {

    render() {
        const {classes, column} = this.props;
        return (
            <List className={classNames(classes.root, column)}>
                <div className={classes.toolbar} />
                <Divider />
                <Button
                    className={classNames(classes.item, classes.text)}
                    component={props => <NavLink to="/children/schedule" {...props} activeClassName={classes.active}/>}>
                    Расписание
                </Button>
                <Button
                    className={classNames(classes.item, classes.text)}
                    component={props => <NavLink to="/children/tours" {...props} activeClassName={classes.active}/>}>
                    Турниры
                </Button>
                <Button
                    className={classNames(classes.item, classes.text)}
                    component={props => <NavLink to="/children/players" {...props} activeClassName={classes.active}/>}>
                    Игроки
                </Button>
                <Button
                    className={classNames(classes.item, classes.text)}
                    component={props => <NavLink to="/children/rating" {...props} activeClassName={classes.active}/>}>
                    Рейтинг
                </Button>
                <Button
                    className={classNames(classes.item, classes.text)}
                    component={props => <NavLink to="/children/news" {...props} activeClassName={classes.active}/>}>
                    Новости
                </Button>
            </List>
        );
    }
}

const withStyleConnector = withStyles(styles);

export default withRouter(withStyleConnector(MenuListChildren));
