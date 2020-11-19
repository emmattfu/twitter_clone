import { TweetsActionType } from './actionCreators'
import { TweetsState, LoadingState } from './contracts/state'

const initialState: TweetsState = { 
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetReducer = (state: TweetsState = initialState, action: any): TweetsState => {

    if(action.type === TweetsActionType.SET_TWEEETS) {
        return {...state, items: action.payload, loadingState: LoadingState.LOADING}
    } else if (action.type === TweetsActionType.CLEAR_TWEETS) {
        return {...state, items: action.payload, loadingState: LoadingState.LOADING}
    }

    return state
}