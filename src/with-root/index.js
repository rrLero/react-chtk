// @flow

import React, {type StatelessFunctionalComponent, type Node} from 'react';
import {MuiThemeProvider, withStyles} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import styles from './global-styles';
import theme from './global-theme';

type ComponentType<Props> =
    | StatelessFunctionalComponent<Props>
    | Class<React.Component<Props>>;

let GlobalWrapper = (props: {children: Node}) => props.children;
GlobalWrapper = withStyles(styles)(GlobalWrapper);

const withRoot = (BaseComponent: ComponentType<*>) => {
    return (props: {}) => {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalWrapper>
                    <BaseComponent {...props} />
                </GlobalWrapper>
            </MuiThemeProvider>
        );
    };
};

export default withRoot;

