// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';

import Typography from 'material-ui/Typography';
import AutoSelect from '../../../../components/auto-select';
import SingleTour from '../../views/single-tour';
import GetPlayersController from '../../../../controllers/get-players';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {Data as ToursData} from '../../../../controllers/get-tours/typedef';
import type {Match, RouterHistory} from 'react-router-dom';

type OwnProps = {
    tour: ToursData,
    suggestions: Array<{value: number, label: string}>,
    id: string | typeof undefined,
    match: Match,
    history: RouterHistory
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {
};

type Props = OwnProps & WithProps;

class ToursView extends React.Component<Props, State> {

    onSelect = val => {
        if (val) {
            this.props.history.push(`/children/tours/${val}`);
        } else {
            this.props.history.push('/children/tours');
        }
    };

    render() {
        const {classes, tour, suggestions, id} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.chooseTour}>
                    <Typography variant={'subheading'} className={''} color={'primary'}>
                        Выберите турнир
                    </Typography>
                    <AutoSelect
                        suggestions={suggestions}
                        value={id || ''}
                        onSelect={this.onSelect}
                    />
                </div>
                {tour ? (
                    <GetPlayersController
                        view={({data}) => (
                            data ? (
                                <SingleTour
                                    tour={tour}
                                    players={data}
                                />
                            ) : null
                        )}
                    />
                ) : (
                    <Typography variant={'display3'} color={'primary'} className={classes.title}>
                       Выберите Турнир
                    </Typography>
                )}
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withRouter(withStyleConnector(ToursView));
