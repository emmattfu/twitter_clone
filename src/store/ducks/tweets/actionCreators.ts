import { Tweet } from "./contracts/state";
import axios from 'axios'
import { Dispatch } from "react";

export enum TweetsActionType {
    SET_TWEEETS = 'tweets/SET_TWEETS',
    CLEAR_TWEETS = 'tweets/CLEAR_TWEETS'
}

export interface SetTweetsActionInterface {
    type: TweetsActionType.SET_TWEEETS;
    payload: Tweet[]
}

export function getTweets()  {
    return async function(dispatch: Dispatch<SetTweetsActionInterface>) {
        try {
            const tweets = await axios.get('/tweets')
            dispatch({type: TweetsActionType.SET_TWEEETS, payload: tweets.data})
        } catch(error) {

        }
    }
}

export function clearTweets() {
    return {type: TweetsActionType.CLEAR_TWEETS, payload: []}
}