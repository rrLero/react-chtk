// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import {path} from 'ramda';

import styles from './styles';

import SingleNewView from '../single-new';
import Typography from 'material-ui/Typography';

import type {WithStyleConnector} from '../../../../typedef';
import type {ResponseNew} from '../../../admin/services/typedef';

type OwnProps = {
    news: Array<ResponseNew>
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {
};

type Props = OwnProps & WithProps;

class NewsView extends React.Component<Props, State> {

    render() {
        const {classes, news} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={'display3'} color={'primary'} className={classes.title}>
                    Новости
                </Typography>
                <div className={classes.news}>
                    {news.map(oneNew => (
                        <SingleNewView
                            key={path(['_id', '$oid'])(oneNew)}
                            oneNew={oneNew}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(NewsView);
