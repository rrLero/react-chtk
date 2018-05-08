// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import {path} from 'ramda';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import styles from './styles';

import type {WithStyleConnector} from '../../../../typedef';
import type {ScheduleGoogleItem} from '../../services/typedef';

type OwnProps = {
    scheduleGoogle: Array<ScheduleGoogleItem>,
    qnt: number,
    getDataCalendar: (?Date) => void
};

type WithProps = {
    classes: $Call<typeof styles>
};

type State = {};

type Props = OwnProps & WithProps;

class ScheduleChildren extends React.Component<Props, State> {

    getTimeString = (date: number) => {
        const hours = `0${new Date(date).getHours()}`.slice(-2);
        const minutes = `0${new Date(date).getMinutes()}`.slice(-2);
        return `${hours}-${minutes}`;
    };

    onDateChange = (event: MouseEvent) => {
        if (event.target instanceof HTMLInputElement) {
            this.props.getDataCalendar(new Date(event.target.value));
        }
    };

    render() {
        const {classes, qnt, scheduleGoogle} = this.props;
        const nowDate = new Date(path(['0', 'start', 'dateTime'])(scheduleGoogle));
        nowDate.setHours(3, 0, 0, 0);
        const currentDate = nowDate.toISOString().slice(0, 10);
        const hours = new Array(24).fill(0);
        return (
            <div className={classes.page}>
                <form className={classes.datePicker} noValidate={true}>
                    <TextField
                        id="date"
                        label="Current"
                        type="date"
                        defaultValue={currentDate}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={this.onDateChange}
                    />
                </form>
                <div className={classes.courtsNames}>
                    {new Array(qnt).fill(0).map((el, i) => (
                        <Typography key={i}>
                            КОРТ - {i + 1}
                        </Typography>
                    ))}
                </div>
                <div className={classes.timeCourts}>
                    <div className={classes.hoursBlock}>
                        {hours.map((el, i) => (
                            <Typography key={i} className={classes.hour}>
                                {`0${i}`.slice(-2)}: 00
                            </Typography>
                        ))}
                    </div>
                    <Paper className={classes.root}>
                        {hours.map((el, i) => (
                            <Divider
                                className={classes.divider}
                                key={i}
                                style={{
                                    top: i * 60,
                                    width: '100%'
                                }}
                            />)
                        )}
                        {scheduleGoogle.map(el => (
                            <Paper
                                key={el.id}
                                className={classes.schedule}
                                style={{
                                    top: (new Date(el.start.dateTime + 3 * 60 * 60 * 1000) - nowDate) / (60 * 1000),
                                    right: `${100 - 100 * (el.court || 1) / qnt}%`,
                                    width: `${Math.floor(100 / qnt)}%`,
                                    height: (el.end.dateTime - el.start.dateTime) / (60 * 1000) - 3
                                }}>
                                <Typography>
                                    {el.summary}
                                </Typography>
                                <Typography>
                                    {this.getTimeString(el.start.dateTime)}{' - '}{this.getTimeString(el.end.dateTime)}
                                </Typography>
                            </Paper>
                        ))}
                    </Paper>
                </div>

            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(ScheduleChildren);
