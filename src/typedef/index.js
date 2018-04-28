// @flow

declare class ConnectedComponent<OP, P> extends React$Component<OP> {
    static WrappedComponent: Class<React$Component<P>>,
    getWrappedInstance(): React$Component<P>,
    props: OP,
    state: void
}

type ConnectedComponentClass<OP, P> = Class<ConnectedComponent<OP, P>>;

export type WithStyleConnector<OP, P> = (
    component: React$ComponentType<P>
) => ConnectedComponentClass<OP, P>;
