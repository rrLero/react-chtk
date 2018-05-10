// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import RatingTableController from '../../controllers/rating-table';

import styles from './styles';
import type {WithStyleConnector} from '../../../../typedef';

const TabContainer = props => {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
};

type OwnProps = {};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {
    value: number
};

type Props = OwnProps & WithProps;

class RatingTabsView extends React.Component<Props, State> {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} fullWidth={true}>
                        <Tab label="Общий"/>
                        <Tab label="от 12 до 14 лет"/>
                        <Tab label="от 10 до 12 лет"/>
                        <Tab label="до 10 лет"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><RatingTableController filter={[0, 18]}/></TabContainer>}
                {value === 1 && <TabContainer><RatingTableController filter={[12, 14]}/></TabContainer>}
                {value === 2 && <TabContainer><RatingTableController filter={[10, 12]}/></TabContainer>}
                {value === 3 && <TabContainer><RatingTableController filter={[0, 10]}/></TabContainer>}
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(RatingTabsView);
