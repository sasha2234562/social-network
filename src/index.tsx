import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store"
import {ActionType} from "./redux/store";
import React from "react";

export type storeType = {
    state: {
        dialogsPage: DialogsPageType,
        profilePage: ProfilePage
    }
    dispatch: (action: ActionType) => void
}
type DialogsPageType = {
    dialogsName: Array<DialogsNameType>
    messages: Array<MessagesType>
    newMessage: string
}
export type  DialogsNameType = {
    src: string
    name: string
    id: string
}
type MessagesType = {
    value: string
    id: string
}

type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
}
type PostsType = {
    comment: string
    img: string
}


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)