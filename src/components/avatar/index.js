// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import Avatar from 'material-ui/Avatar';
import DefaultAvatar from './default-avatar.png';
import styles from './styles';

import type {WithStyleConnector} from '../../typedef';
import type {Theme} from '../../with-root/typedef';

type WithProps = {
    classes: $Call<typeof styles>,
    theme: Theme,
    className: string
};

type OwnProps = {
    size?: 'sm' | 'md' | 'lg' | 'xl',
    alt: string,
    src: string
};

type Props = WithProps & OwnProps;

const MainAvatar = ({size, classes, className, src, ...other}: Props) => {
    const sizeClassName = classNamesBind.bind(classes)({
        sm: size === 'sm',
        md: size === 'md',
        lg: size === 'lg',
        xl: size === 'xl'
    });
    const avatarClassName = classNames(
        classes.root,
        sizeClassName,
        className
    );
    return (
        <Avatar
            src={src ? src : DefaultAvatar}
            {...other}
            className={avatarClassName}
        />
    );
};

const withStyleConnector: WithStyleConnector<OwnProps, Props> = withStyles(styles);

export default withStyleConnector(MainAvatar);
