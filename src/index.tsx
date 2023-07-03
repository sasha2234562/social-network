
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./state/store";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                changeNewpostText={store.changeNewpostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)