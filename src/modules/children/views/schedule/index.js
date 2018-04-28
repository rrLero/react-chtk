// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
    tournament: Array<{time: string, courts: Array<Array<string>>}>,
    time: string
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {

};

type Props = OwnProps & WithProps;

class ScheduleChildren extends React.Component<Props, State> {

    render() {
        const {classes, tournament, time} = this.props;
        const keys = Object.keys(tournament[0]);
        return (
            <div className={classes.page}>
                <Typography variant={'subheading'}>
                    <a
                        href={'https://docs.google.com/spreadsheets/d/1wUom5DBYVWXZes-_j6bBnUHKV_p03AiGKi60knAKZHQ/edit?usp=sharing'}
                        className={classes.link}
                        target="_blank"
                    >Сетки до 14 лет</a>
                </Typography>
                <Typography variant={'subheading'}>
                    <a
                        href={'https://docs.google.com/spreadsheets/d/1c3HFge-cFCZSXTspRArrXmGdVy9NhFCOFeq7dd4ccQo/edit?usp=sharing'}
                        className={classes.link}
                        target="_blank"
                    >Сетки до 11 лет
                    </a>
                </Typography>
                <Typography variant={'subheading'}>
                    <a
                        href={'https://docs.google.com/spreadsheets/d/1nMEPiX2Gmg79AQT3JqecWM3Bt_8GAQIAvhMEEW3wsxM/edit?usp=sharing'}
                        className={classes.link}
                        target="_blank"
                    >Сетки до 9 лет</a>
                </Typography>
                <Typography variant={'display3'}>
                    Расписание {time}
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Время</TableCell>
                                {tournament[0].courts.map((el, i) => {
                                    return (<TableCell key={i}>Корт №{i + 1}</TableCell>)
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tournament.map((n,i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{n.time}</TableCell>
                                        {n.courts.map((el, j) => {
                                            return (
                                                <TableCell key={n.time + j}>{el.join(' - ')}</TableCell>
                                            )
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(ScheduleChildren);
