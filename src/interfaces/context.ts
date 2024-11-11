export interface Action {
    readonly payload?: any;
    readonly type: string;
}

export interface ContextProps {
    children: React.JSX.Element;
};