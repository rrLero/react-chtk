// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import SelectWrapped from './select-wrapped';
import styles from './styles';
import type {WithStyleConnector} from '../../typedef';

type OwnProps = {
    suggestions: Array<{value: number, label: string}>,
    onSelect: string => void,
    value: number | string,
    disabled?: boolean
};

type WithProps = {
    classes: $Call<typeof styles>
};

type Props = OwnProps & WithProps;

type State = {
    single: null | number | string
};

class TechLeadAssignView extends React.Component<Props, State> {

    state = {
        single: this.props.value
    };

    handleChange = name => value => {
        this.props.onSelect(value);
        this.setState({
            [name]: value
        });
    };

    render() {
        const {classes, suggestions, disabled} = this.props;
        return (
            <div className={classes.root}>
                <Input
                    fullWidth={true}
                    inputComponent={SelectWrapped}
                    value={this.state.single}
                    onChange={this.handleChange('single')}
                    placeholder="Search"
                    id="react-select-single"
                    inputProps={{
                        classes,
                        name: 'react-select-single',
                        instanceId: 'react-select-single',
                        simpleValue: true,
                        options: suggestions,
                        clearable: true
                    }}
                    disabled={disabled}
                />
            </div>
        );
    }
}

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(TechLeadAssignView);

