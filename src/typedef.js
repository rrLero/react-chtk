export type React$Element<Config> = {
    type: ReactClass<Config>;
    props: $PropsOf<Config>;
    key: ?string;
    ref: any;
};