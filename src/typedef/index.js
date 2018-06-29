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

export type Court = {
    adress: string,
    type: string,
    description: string,
    name: string,
    phones: string,
    image: string,
    id: number
};

export type OneNew = {
    id: number,
    title: string,
    date: string,
    text: string,
    image: string
};
