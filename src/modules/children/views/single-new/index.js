// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {NavLink} from 'react-router-dom';

import Card, {CardContent, CardMedia, CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {ResponseNew} from '../../../admin/services/typedef';

type OwnProps = {
    oneNew: ResponseNew
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {};

type Props = OwnProps & WithProps;

class SingleNewView extends React.Component<Props, State> {

    render() {
        const {classes, oneNew} = this.props;
        return (
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="caption" color="textSecondary" className={classes.date}>
                            {oneNew.date}
                        </Typography>
                        <Typography variant="headline">{oneNew.title}</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            {oneNew.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {oneNew.links.split(',').map((link, i) => (
                            link ? (
                                <Button
                                    key={i}
                                    size="small"
                                    color="primary">
                                    <a href={link} target="_blank" className={classes.link}>
                                        Файл - {i + 1}
                                    </a>
                                </Button>
                            ) : null
                        ))}
                    </CardActions>
                </div>
                <Hidden xsDown={true}>
                    <CardMedia
                        className={classes.cover}
                        image={oneNew.imageUrl || require('./empty.png')}
                        title={oneNew.title}
                    />
                </Hidden>
            </Card>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(SingleNewView);
