// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {NavLink} from 'react-router-dom';

import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Button from 'material-ui/Button';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
    rating: Array<{
        avatarUrl: string,
        coachId: string,
        id: string,
        name: string,
        points: number,
        year: number
    }>
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {
    value: number
};

type Props = OwnProps & WithProps;

class RatingTableView extends React.Component<Props, State> {

    render() {
        const {rating, classes} = this.props;
        return (
            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rating.map((el, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell>
                                        <Button className={classes.link}
                                            component={
                                                props => <NavLink to={`/children/players/${el.id}`} {...props} />
                                            }>
                                            {el.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell>{el.year}</TableCell>
                                    <TableCell>{el.points}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(RatingTableView);
