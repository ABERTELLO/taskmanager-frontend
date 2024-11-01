export interface ActionInterface {
    readonly payload?: any;
    readonly type: string;
}

export interface ContextPropsInterface {
    children: React.JSX.Element;
};