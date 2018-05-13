// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {NavLink} from 'react-router-dom';

import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import {path} from 'ramda';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data} from '../../../../controllers/get-tours/typedef';

type OwnProps = {
    tours: Array<Data>
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class PlayerDetailsToursView extends React.Component<Props, State> {

    render() {
        const {classes, tours} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={'subheading'} className={classes.title}>
                    УЧАСТИЕ В ТУРНИРАХ
                </Typography>
                <Divider/>
                {tours.map(tour => (
                    <div className={classes.type} key={path(['_id', '$oid'])(tour)}>
                        <Typography variant={'body1'} className={classes.typeTitle}>
                            турнир:
                        </Typography>
                        <Typography
                            component={props => (
                                <NavLink
                                    to={`/children/tours/${path(['_id', '$oid'])(tour)}`} {...props}
                                    className={classes.link}
                                />
                            )}
                            variant={'subheading'}
                            className={classes.typeText}>
                            {`${path(['date'])(tour)} ${path(['name'])(tour)}`}
                        </Typography>
                    </div>
                ))}
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(PlayerDetailsToursView);
