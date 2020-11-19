export enum LoadingState {
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER"
}

export interface Tweet {
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
    id: string
}

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingState;
}